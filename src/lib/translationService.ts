// Google Translate API integration for improving translation quality

interface TranslationCache {
  text: string;
  timestamp: number;
}

class TranslationService {
  private cache: Map<string, TranslationCache> = new Map();
  private readonly CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

  // Check if translation needs improvement
  private shouldImproveTranslation(text: string): boolean {
    // Simple heuristic: if text is very short or contains only basic words, it might need improvement
    return text.length > 5 && !text.includes('http') && !text.match(/^\d+$/);
  }

  // Get cached translation if available and not expired
  private getCachedTranslation(key: string): string | null {
    const cached = this.cache.get(key);
    if (cached && Date.now() - cached.timestamp < this.CACHE_DURATION) {
      return cached.text;
    }
    return null;
  }

  // Cache translation with timestamp
  private setCachedTranslation(key: string, text: string): void {
    this.cache.set(key, {
      text,
      timestamp: Date.now()
    });
  }

  // Improve translation using Google Translate API
  async improveTranslation(text: string, targetLanguage: string): Promise<string> {
    try {
      const response = await fetch('/api/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text,
          targetLanguage,
          sourceLanguage: 'en' // Source is always English
        })
      });

      if (!response.ok) {
        console.warn('Translation improvement failed:', response.statusText);
        return text; // Fallback to original
      }

      const data = await response.json();
      return data.translatedText || text; // Fallback to original
    } catch (error) {
      console.warn('Translation API error:', error);
      return text; // Fallback to original
    }
  }

  // Get or improve translation
  async getTranslation(key: string, fallbackText: string): Promise<string> {
    // Check cache first
    const cached = this.getCachedTranslation(key);
    if (cached) {
      return cached;
    }

    // Check if we should improve this translation
    if (!this.shouldImproveTranslation(fallbackText)) {
      this.setCachedTranslation(key, fallbackText);
      return fallbackText;
    }

    // Try to improve the translation
    const currentLanguage = localStorage.getItem('preferred_language') || 'en';
    const improvedText = await this.improveTranslation(fallbackText, currentLanguage);
    
    // Cache the improved version
    this.setCachedTranslation(key, improvedText);
    return improvedText;
  }

  // Clear cache (useful for testing)
  clearCache(): void {
    this.cache.clear();
  }
}

export const translationService = new TranslationService();
