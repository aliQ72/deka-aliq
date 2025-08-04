"use client";

import {useRedirectIfAuthenticated} from "@/features/auth/hooks/useRedirectIfAuthenticated";
import AuthForm from "@/features/auth/components/AuthForm";

export default function AuthPage() {
    useRedirectIfAuthenticated();

    return (

        <main className="flex items-center justify-center w-full h-screen bg-cover bg-center"
              style={{backgroundImage: "url('https://images.unsplash.com/photo-1554147090-e1221a04a025?q=80&w=2070&auto=format&fit=crop')"}}
        >
            <AuthForm/>
        </main>
    );
}
