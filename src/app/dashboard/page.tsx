"use client";

import { useCheckAuth } from "@/features/auth/hooks/useCheckAuth";
import { WelcomeMessage } from "@/features/dashboard/components/WelcomeMessage";

export default function DashboardPage() {
    useCheckAuth();

    return (
        <main>
            <WelcomeMessage />
        </main>
    );
}
