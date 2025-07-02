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


function HamburguerMenu(){
  return (
    <div className="absolute top-1/2 right-3 cursor-pointer"
    >
          <svg
            width="52"
            height="52"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z"
              fill="currentColor"
            />
            <path
              d="M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845 21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z"
              fill="currentColor"
            />
            <path
              d="M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645 22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z"
              fill="currentColor"
          />
    </svg>
        <div className=""
        >
        </div>
    </div>
  )
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased p-0 m-0`}
      >
      <header className="w-full sticky top-0 z-100 flex
                        justify-center bg-[#87ceeb] flex-col
                        pb-[3%] items-center"
              style={{
                height: 'clamp(80px, 23vh, 300rem)',
                color: 'white'
              }}
      >
        <a href="/">
          <Image src="/PuntaCana.png"
              width={2000}
              height={1000}
              alt="Punta Cana Fun"
              style={{
                filter: 'drop-shadow(0 0 25px #333)',
                width: 'clamp(200px, 20vw, 600px)',
              }}
              className="hover:scale-110 transition-transform duration-350"
        />
        </a>
            
           {HamburguerMenu()} 
              
        <div>
          <ul className="flex gap-10 navlinks font-mono"
          >
            <a href="/" className="hover:underline hover:text-amber-300 transition-colors duration-250">
            <li>Inicio</li>
            </a>
            <a href="./Acerca-De-Nosotros" className="hover:underline hover:text-amber-300 transition-colors duration-250">
            <li>Acerca de Nosotros</li>
            </a>
            <a href="./Contacto" className="hover:underline hover:text-amber-300 transition-colors duration-250">
            <li>Contacto</li>
            </a>
            <a href="./Tours-Y-Excursiones" className="hover:underline hover:text-amber-300 transition-colors duration-250">
            <li>Tours y Excursiones</li>
            </a>
          </ul>
        </div>        
      </header>



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