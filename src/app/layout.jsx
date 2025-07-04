import { Geist, Geist_Mono } from "next/font/google";
import "./Styles/globals.css";
import Header from "./Components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Punta - Cana Fun",
  description: "Punta Cana Fun Website",
};







export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased p-0 m-0`}
      >
      <Header/>



        {children}



      <footer className="w-full bg-red-800 flex
                        justify-center footerBG"
      >
        <h1 className="text-6xl"
        >This is the footer
        </h1>
      </footer>
      </body>
    </html>
  );
}