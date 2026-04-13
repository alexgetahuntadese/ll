// Test script to verify Bearer token authentication
// Run this in your browser console or as a Node.js script

import { supabase, checkAuthStatus } from './src/services/supabaseServiceFixed.js';

async function testBearerToken() {
  console.log('Testing Bearer Token Authentication...');
  
  try {
    // 1. Check current auth status
    console.log('1. Checking current auth status...');
    const authStatus = await checkAuthStatus();
    console.log('Auth Status:', authStatus);
    
    // 2. If not authenticated, try to sign in with test credentials
    if (!authStatus.authenticated) {
      console.log('2. Not authenticated, attempting sign in...');
      
      // Replace with your test credentials
      const testEmail = 'test@example.com';
      const testPassword = 'your-test-password';
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email: testEmail,
        password: testPassword,
      });
      
      if (error) {
        console.error('Sign in error:', error);
        return;
      }
      
      console.log('Sign in successful:', data);
    }
    
    // 3. Test a protected API call
    console.log('3. Testing protected API call...');
    const { data: savedQuestions, error: apiError } = await supabase
      .from('saved_questions')
      .select('*')
      .limit(1);
    
    if (apiError) {
      console.error('API call error:', apiError);
      if (apiError.message.includes('Bearer token')) {
        console.error('❌ Bearer token issue still exists!');
      } else {
        console.error('❌ Other API error:', apiError.message);
      }
    } else {
      console.log('✅ API call successful! Bearer token is working.');
      console.log('Sample data:', savedQuestions);
    }
    
    // 4. Check session details
    console.log('4. Checking session details...');
    const { data: { session }, error: sessionError } = await supabase.auth.getSession();
    
    if (sessionError) {
      console.error('Session error:', sessionError);
    } else if (session) {
      console.log('✅ Valid session found');
      console.log('Session expires at:', session.expires_at);
      console.log('Access token length:', session.access_token?.length);
    } else {
      console.log('❌ No session found');
    }
    
  } catch (error) {
    console.error('Test failed with error:', error);
  }
}

// Run the test
testBearerToken();
