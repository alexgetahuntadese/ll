import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { career, stage, previousChoices, language } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const langInstruction = language === 'am' ? 'Respond in Amharic (አማርኛ).' : language === 'om' ? 'Respond in Afaan Oromoo.' : 'Respond in English.';

    let systemPrompt = '';
    
    if (stage === 'intro') {
      systemPrompt = `You are a career simulator for Ethiopian students. ${langInstruction}
      
The student chose the career: "${career.name}".

Generate a JSON response with this exact structure (no markdown, just valid JSON):
{
  "title": "A Day as a ${career.name}",
  "setting": "A vivid description of where they are working in Ethiopia (2-3 sentences)",
  "scenario": "A realistic problem or situation they face on the job (2-3 sentences)",
  "choices": [
    {"id": "a", "text": "First option (1 sentence)", "consequence": "brief"},
    {"id": "b", "text": "Second option (1 sentence)", "consequence": "brief"},
    {"id": "c", "text": "Third option (1 sentence)", "consequence": "brief"}
  ],
  "careerInfo": {
    "salaryRange": "Monthly salary range in Ethiopian Birr",
    "universities": ["List 3-4 Ethiopian universities offering this field"],
    "requiredSkills": ["4-5 key skills needed"],
    "dayInLife": "Brief description of a typical day (2-3 sentences)",
    "growthOutlook": "Career growth prospects in Ethiopia (1-2 sentences)"
  }
}`;
    } else if (stage === 'consequence') {
      systemPrompt = `You are a career simulator for Ethiopian students. ${langInstruction}
      
The student is simulating being a "${career.name}". They previously made these choices: ${JSON.stringify(previousChoices)}.

Generate the NEXT scenario based on their choices. Return valid JSON only:
{
  "outcome": "What happened because of their last choice (2-3 sentences)",
  "newScenario": "A new challenge or situation they now face (2-3 sentences)",
  "choices": [
    {"id": "a", "text": "First option", "consequence": "brief"},
    {"id": "b", "text": "Second option", "consequence": "brief"},
    {"id": "c", "text": "Third option", "consequence": "brief"}
  ],
  "skillsUsed": ["1-2 skills they demonstrated"],
  "progressNote": "A brief encouraging note about their decision-making (1 sentence)"
}`;
    } else if (stage === 'final') {
      systemPrompt = `You are a career simulator for Ethiopian students. ${langInstruction}
      
The student simulated being a "${career.name}" and made these choices: ${JSON.stringify(previousChoices)}.

Generate a final summary. Return valid JSON only:
{
  "summary": "Overall assessment of their performance (3-4 sentences)",
  "strengths": ["2-3 strengths they showed"],
  "areasToImprove": ["2-3 areas they could improve"],
  "fitScore": 85,
  "advice": "Personalized advice for pursuing this career in Ethiopia (2-3 sentences)",
  "nextSteps": ["3 concrete steps they can take now to prepare for this career"]
}`;
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: `Generate the ${stage} scenario for a ${career.name} career simulation.` },
        ],
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Too many requests. Please wait a moment and try again." }), {
          status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI credits exhausted. Please add credits in Settings." }), {
          status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI service error" }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await response.json();
    let content = data.choices?.[0]?.message?.content || "";
    
    // Strip markdown code blocks if present
    content = content.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    
    let parsed;
    try {
      parsed = JSON.parse(content);
    } catch {
      console.error("Failed to parse AI response:", content);
      return new Response(JSON.stringify({ error: "Failed to parse AI response" }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(parsed), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("career-simulator error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
