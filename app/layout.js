import { Geist, Geist_Mono } from "next/font/google";
import { Roboto } from 'next/font/google';
import "./globals.css";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'], // customize as needed
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
  icons : {
    icon: '/icon/favicon-32x32.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* ${roboto.className} */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased ${roboto.className}`} >
        {children}
      </body>
    </html>
  );
}
