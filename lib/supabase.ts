import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import Constants from "expo-constants";

const SUPABASE_URL = Constants.manifest!.extra!.SupabaseURL;
const SUPABASE_ANON_KEY = Constants.manifest!.extra!.SupabaseAnonKey;

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  localStorage: AsyncStorage as any,
});
