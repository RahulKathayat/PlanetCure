import "~/styles/globals.css";
import "@uploadthing/react/styles.css";
import 'regenerator-runtime/runtime'
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { ourFileRouter } from "~/app/api/uploadthing/core";
import { Inter } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs';
import TopNav from "./_components/TopNav";
import { extractRouterConfig } from "uploadthing/server";
import { Toaster } from "sonner";



const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Planet Cure",
  description: "Generated by Graphathons",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`font-sans ${inter.variable} dark`}>
        <NextSSRPlugin
          routerConfig={extractRouterConfig(ourFileRouter)}
        />
        <div className="h-screen flex flex-col gap-2">
          <TopNav/>
          <main className=" overflow-y-auto">
            {children}
          </main>
        </div>
        <Toaster theme="dark" position="bottom-center"/>
        </body>
      </html>
    </ClerkProvider>
  );
}
