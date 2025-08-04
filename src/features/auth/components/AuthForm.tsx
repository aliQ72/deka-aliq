"use client";

import React from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useRouter} from "next/navigation";

import {Input, Button, Text} from "@/components/ui";
import {phoneSchema, PhoneFormValues} from "../utils/validatePhone";
import {useFetchUser} from "./../hooks/useFetchUser";
import {storage} from "@/utils/storage";

const AuthForm = () => {
    const router = useRouter();
    const {fetchUser, loading, error} = useFetchUser();

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<PhoneFormValues>({
        resolver: zodResolver(phoneSchema),
    });

    const onSubmit = async () => {
        const user = await fetchUser();
        if (user) {
            storage.set("user", user);
            router.push("/dashboard");
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-md mx-auto p-14 rounded-2xl shadow-lg space-y-4 rtl text-right  bg-white/20 backdrop-blur-lg border border-white"
        >
            <Text as="h1" className="text-xl font-bold mb-4 text-center">ورود به حساب کاربری</Text>

            <Input
                label="شماره موبایل"
                placeholder="مثلاً ۰۹۱۲۳۴۵۶۷۸۹"
                {...register("phone")}
                error={errors.phone?.message}
            />

            <Button type="submit" disabled={loading} className="w-full">
                {loading ? "در حال ورود..." : "ورود"}
            </Button>

            {error && <Text className="text-red-600 text-sm text-center">{error}</Text>}
        </form>
    );
};

export default AuthForm;
