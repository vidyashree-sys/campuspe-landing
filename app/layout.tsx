import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CampusPe — Connect 10X Faster",
  description: "One platform connecting students, colleges and employers. Discover opportunities and get matched with CampusPe.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
