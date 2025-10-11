import { createClient } from '@supabase/supabase-js'

// ⚠️ Reemplazá con tus credenciales de Supabase:
const SUPABASE_URL = "https://vhtbczcjdlovmeqddexk.supabase.co"
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZodGJjemNqZGxvdm1lcWRkZXhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAwMDM2NDEsImV4cCI6MjA3NTU3OTY0MX0.RNK5oSj-ZPQUW0iTV8IuFAtBojdR8Ej0-pLdoypL6HY'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)