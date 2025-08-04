import type {Metadata} from "next";
import "../styles/globals.scss";


export const metadata: Metadata = {
    title: "Deka AliQ",
    description: "Next app task",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fa" dir="rtl">
        <body className="h-screen">
        <>{children}</>
        </body>
        </html>
    );
}
