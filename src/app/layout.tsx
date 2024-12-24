import { Toaster } from "react-hot-toast";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

import "./globals.css";

import AuthProvider from "@/components/clientSideRendering/AuthProvider";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "cavilOn",
    description: "Quibble, a content generation bot, simplifies and elevates your creative process. Whether crafting engaging blog posts, soulful song lyrics, or attention-grabbing Insta captions, Quibble's advanced algorithms seamlessly transform your ideas into polished, professional content.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-black min-h-screen text-white w-full p-4`}>
                <NextTopLoader color="#9333EA" initialPosition={0.08} crawlSpeed={200} height={6} crawl={true} showSpinner={true} easing="ease" speed={200} zIndex={1600} showAtBottom={false} />

                <Toaster position="top-center" />
                <div className=" bg-purple-800 opacity-30 duration-200 right-0 -z-10 rounded-full blur-3xl w-[60%] h-96 top-20 absolute"></div>
                <AuthProvider>
                    <main>
                        <Navbar />
                        {children}
                    </main>
                </AuthProvider>
            </body>
        </html>
    );
}
