import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";

const sfPro = localFont({
  src: [
    {
      path: './fonts/Sf-reg.otf', // Adjust path to match your file structure
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Sf-med.otf', // Adjust path to match your file structure
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Sf-semibold.otf', // Adjust path to match your file structure
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Sf-bold.otf', // Adjust path to match your file structure
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-sf-pro',
});

const teodor = localFont({
  src: [
    { path: './fonts/Teodor-Regular.otf', weight: '500', style: 'normal' },
    { path: './fonts/Teodor-Medium.otf', weight: '600', style: 'normal' },
    { path: './fonts/Teodor-Light.otf', weight: '400', style: 'normal' },
  ],
  display: 'swap',
  variable: '--font-teodor',
});

export const metadata: Metadata = {
  title: "Cirrcle Up",
  description: "Welcome to Cirrcle Up, Grow your Business!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sfPro.variable} ${teodor.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
