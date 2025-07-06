import { SpeedInsights } from "@vercel/speed-insights/next"
import { Geist, Geist_Mono } from "next/font/google";
import "./Styles/globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

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
  description: "Esta es la copia y pagina de aprendizaje de yenser basado en una empresa turistica - Punta Cana Fun",
};





export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased p-0 m-0`}
      >
      <Header/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}