import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/Them/theme-provider";
import { Roboto } from 'next/font/google';
import "./globals.css";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['200','300','400','500','600','700'], // customize as needed
  variable: '--font-roboto', // optional, for CSS vars
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tejas.dev",
  description: "Port folio page powerd by THUNDER",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* ${roboto.className} */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${roboto.className}`}
      >
         <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange 
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
