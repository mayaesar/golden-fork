import { createClient } from "@supabase/supabase-js";

import { env as privateEnv } from "$env/dynamic/private";
import { env as publicEnv } from "$env/dynamic/public";
import type { Database } from "$types/supabase";

export const supabaseAdmin = createClient<Database>(publicEnv.PUBLIC_SUPABASE_URL, privateEnv.SUPABASE_SERVICE_ROLE_KEY);
