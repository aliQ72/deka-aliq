"use client";

import {Button} from "@/components/ui";
import {useLogout} from "../hooks/useLogout";
import {clsx} from "clsx";

const LogoutButton = ({className}) => {
    const logout = useLogout();

    return (
        <Button variant="outline-danger" className={clsx(className, "text-red-600")} onClick={logout}>
            خروج
        </Button>
    );
};

export default LogoutButton;
