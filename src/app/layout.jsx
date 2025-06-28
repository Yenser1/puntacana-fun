import { Geist, Geist_Mono } from "next/font/google";
import "./Styles/globals.css";
import Image from "next/image";

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
      <header className="w-full headingheight sticky top-0 z-100 flex
                        justify-center bg-[#87ceeb] flex-col
                        pb-[3%] items-center h-max"
      >
        <Image src="/PuntaCana.png"
              width={400}
              height={300}
              alt="Punta Cana Fun"
              className="fotoHeading relative"
        />
        <div>
          <ul className="flex gap-5 navlinks"
          >
            <a href="/"><li>Inicio</li></a>
            <a href="./Acerca-De-Nosotros"><li>Acerca de Nosotros</li></a>
            <a href="./Contacto"><li>Contacto</li></a>
            <a href="./Tours-Y-Excursiones"><li>Tours y Excursiones</li></a>
          </ul>
        </div>
        
        
      </header>



        {children}


      <footer className="w-full bg-red-800 flex
                        justify-center"
      >
        <h1 className="text-6xl"
        >This is the footer</h1>
      </footer>
      </body>
    </html>
  );
}