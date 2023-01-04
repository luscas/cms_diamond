import supabase from "~/services/supabase";

export const getUser = async (uid: string) => {
  const { data, error } = await supabase
    .from("users")
    .select("id")
    .eq("id", uid);

  if (error) {
    throw error;
  }

  return data;
};
