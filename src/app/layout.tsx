"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider, createTheme } from "@mui/material";

// export const metadata: Metadata = {
//   title: "nextjs todo app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <html lang="en">
        <head></head>
        <body>{children}</body>
      </html>
    </ThemeProvider>
  );
}
