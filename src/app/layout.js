import { Geist, Geist_Mono, } from "next/font/google"
import localfont from 'next/font/local'
import "./globals.css";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto=localfont({
  src:[
    {path:"../../public/fonts/Roboto-Medium.ttf",weight:'400'}
  
  ],
  variable:'--font-roboto'
})

export const metadata = {
  title: "Chambers of Aniruddha",
  description: "Law Chamber of Aniruddha",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
