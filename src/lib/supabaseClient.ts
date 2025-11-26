import { createClient } from '@supabase/supabase-js'

declare global {
    interface Window {
        __env?: {
            VITE_SUPABASE_URL?: string;
            VITE_SUPABASE_ANON_KEY?: string;
        };
    }
}

const supabaseUrl = window.__env?.VITE_SUPABASE_URL || ''
const supabaseAnonKey = window.__env?.VITE_SUPABASE_ANON_KEY || ''

if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Missing Supabase credentials. Please ensure env-config.js is loaded.')
}

export const supabase = (supabaseUrl && supabaseAnonKey)
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;
