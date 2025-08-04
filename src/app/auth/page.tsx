"use client";

import {useRedirectIfAuthenticated} from "@/features/auth/hooks/useRedirectIfAuthenticated";
import AuthForm from "@/features/auth/components/AuthForm";
import {Text} from "@/components/ui";

export default function AuthPage() {
    useRedirectIfAuthenticated();

    return (

        <main className="flex items-center justify-center w-full h-screen bg-cover bg-center flex-col"
              style={{backgroundImage: "url('/bg.jpeg')"}}
        >
            <AuthForm/>
            <Text as="small" className="text-center text-gray-500 mt-4">Developed by Ali Abedghodsi</Text>
        </main>
    );
}
