-- Enable the pg_net extension to make HTTP requests
create extension if not exists pg_net;

-- Create a function that will be called by the trigger
create or replace function public.handle_new_lead()
returns trigger as $$
declare
  -- REPLACE WITH YOUR PROJECT URL AND ANON KEY
  -- You can find these in Project Settings > API
  project_url text := 'https://ffejelcoejwwxpcxglhq.supabase.co/functions/v1/send-lead-email';
  anon_key text := 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZmZWplbGNvZWp3d3hwY3hnbGhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQxMTYyOTEsImV4cCI6MjA3OTY5MjI5MX0.VpRsNfuCptEJt1tl-uvGFN8KSuQ_57t_RcpeFa9rfdk';
begin
  -- Make a POST request to the Edge Function
  perform net.http_post(
    url := project_url,
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer ' || anon_key
    ),
    body := jsonb_build_object('record', row_to_json(new))
  );
  return new;
end;
$$ language plpgsql;

-- Create the trigger to fire after a new row is inserted into the leads table
create trigger on_lead_created
  after insert on public.leads
  for each row execute procedure public.handle_new_lead();
