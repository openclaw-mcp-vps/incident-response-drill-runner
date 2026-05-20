import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Incident Response Drill Runner",
  description: "Automated incident response training simulations for DevOps and SRE teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="5149722f-9a1c-4f87-a5a0-755c28f748f5"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
