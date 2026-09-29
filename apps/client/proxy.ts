import { createSupabaseProxyClient } from "@letsheng-holdings/supabase/session";
import type { NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
  const { response } = await createSupabaseProxyClient(request);

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
