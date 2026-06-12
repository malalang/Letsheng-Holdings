import { requireAdminUser } from "../auth";
import { CACHE_PATHS, CACHE_TAGS, mutationResult } from "../cache";
import { createSupabaseServerClient } from "../server";
import type { TablesInsert, TablesUpdate } from "../supabaseType";

export async function createProperty(property: TablesInsert<"properties">) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("properties")
    .insert(property)
    .select()
    .single();
  if (error) throw new Error(error.message);
  return mutationResult(data, {
    tags: [CACHE_TAGS.properties, CACHE_TAGS.property(data.id)],
    paths: [
      CACHE_PATHS.home,
      CACHE_PATHS.properties,
      CACHE_PATHS.property(data.id),
    ],
    mode: "immediate",
  });
}

export async function updateProperty(id: string, property: TablesUpdate<"properties">) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("properties")
    .update(property)
    .eq("id", id)
    .select()
    .single();
  if (error) throw new Error(error.message);
  return mutationResult(data, {
    tags: [CACHE_TAGS.properties, CACHE_TAGS.property(id)],
    paths: [
      CACHE_PATHS.home,
      CACHE_PATHS.properties,
      CACHE_PATHS.property(id),
    ],
    mode: "immediate",
  });
}

export async function deleteProperty(id: string) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.from("properties").delete().eq("id", id);
  if (error) throw new Error(error.message);
  return mutationResult(undefined, {
    tags: [CACHE_TAGS.properties, CACHE_TAGS.property(id)],
    paths: [
      CACHE_PATHS.home,
      CACHE_PATHS.properties,
      CACHE_PATHS.property(id),
    ],
    mode: "immediate",
  });
}

export async function submitLeaseApplication(application: TablesInsert<"lease_applications">) {
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase
    .from("lease_applications")
    .insert({ ...application, status: "Pending" });
  if (error) throw new Error(error.message);
  return mutationResult(undefined, {
    tags: [CACHE_TAGS.leaseApplications],
    mode: "immediate",
  });
}

export async function updateLeaseApplicationStatus(id: string, status: string) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase
    .from("lease_applications")
    .update({ status })
    .eq("id", id);
  if (error) throw new Error(error.message);
  return mutationResult(undefined, {
    tags: [CACHE_TAGS.leaseApplications],
    mode: "immediate",
  });
}

export async function deleteLeaseApplication(id: string) {
  await requireAdminUser();
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase
    .from("lease_applications")
    .delete()
    .eq("id", id);
  if (error) throw new Error(error.message);
  return mutationResult(undefined, {
    tags: [CACHE_TAGS.leaseApplications],
    mode: "immediate",
  });
}
