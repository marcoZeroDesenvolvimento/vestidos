import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = "https://wxzkglnhkvutprxcnozq.supabase.co"
const SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4emtnbG5oa3Z1dHByeGNub3pxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2MTg5MzM4MCwiZXhwIjoxOTc3NDY5MzgwfQ.9YCdAcjZV8vYvnxzHQAvQVzRAxff00LGwNWwvJynGsM'


export const supabase = createClient(SUPABASE_URL, SERVICE_KEY);

