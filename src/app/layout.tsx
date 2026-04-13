import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "@/index.css";
import LayoutClient from "../app/layout-client";

export const metadata: Metadata = {
  title: "Simple Road",
  description: "Ethiopian education quiz and study platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <LayoutClient>{children}</LayoutClient>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
