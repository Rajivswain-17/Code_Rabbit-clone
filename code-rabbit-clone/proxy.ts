import type { NextRequest } from "next/server";
import { handleAuthProxy } from "./features/auth/utilis/auth_proxy";

export async function proxy(request: NextRequest) {
    return handleAuthProxy(request);
}


export const config = {
    matcher: ["/sign-in", "/dashboard", "/dashboard/:path*"],
};