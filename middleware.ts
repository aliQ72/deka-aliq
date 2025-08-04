import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    const protectedPaths = ["/dashboard"];

    if (protectedPaths.some(path => pathname.startsWith(path))) {
        const token = request.cookies.get("user-token"); // ما تو اینجا فرض می‌کنیم توکن تو کوکی ذخیره شده

        if (!token) {
            const url = request.nextUrl.clone();
            url.pathname = "/auth";
            return NextResponse.redirect(url);
        }
    }
    return NextResponse.next();
}

export const config = {
    // matcher: ["/dashboard/:path*"],
};
