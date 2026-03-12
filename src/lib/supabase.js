import { createClient } from '@supabase/supabase-js' 
const supabaseUrl = 'https://gmfznokfhtfmgbptagsk.supabase.co' 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdtZnpub2tmaHRmbWdicHRhZ3NrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMzMTAyNDEsImV4cCI6MjA4ODg4NjI0MX0.HbzYSW3dvdbUfpuXaa7hZ-6QWpyBH5pgYTFTB_PVmE8' 
export const supabase = createClient(supabaseUrl, supabaseKey)