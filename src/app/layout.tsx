import type { Metadata } from "next";
import "./globals.css";
import {ThemeProvider } from 'next-themes';
import ThemeSwitcher from './ThemeSwitcher';
// import Provider from "./provider";

export const metadata: Metadata = {
  title: "Theme color changer",
  description: "Theme color changer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <ThemeProvider >
        <ThemeSwitcher/>
        {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
