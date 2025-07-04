'use client';
import Image from "next/image";
import "../Styles/globals.css";
import HamburguerMenu from "./HamburguerMenu";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Header(){
    const pathName = usePathname()
    return(
        <header className="w-full sticky top-0 z-100 flex
                        justify-center bg-[#87ceeb] flex-col
                        pb-[3%] items-center"
              style={{
                height: 'clamp(80px, 23vh, 300rem)',
                color: 'white'
              }}
      >
        <Link href="/">
          <Image src="/PuntaCana.png"
              width={2000}
              height={1000}
              alt="Punta Cana Fun"
              style={{
                filter: 'drop-shadow(0 0 25px #333)',
                width: 'clamp(250px, 30vw, calc(430px + 1vw))',
              }}
              className="hover:scale-110 transition-transform duration-350"
        />
        </Link>
              <HamburguerMenu/>
        <div>
          <nav className="flex gap-10 navlinks font-mono"
          >
            <Link href="/" 
                  className={pathName === "/"? "text-amber-200 underline hover:text-amber-400 transition-colors duration-250" :"text-white hover:underline hover:text-amber-400 transition-colors duration-250"}
            >
              Inicio
            </Link>
            <p>|</p>
            <Link href="/Acerca-De-Nosotros" 
                  className={pathName === "/Acerca-De-Nosotros"? "text-amber-200 underline hover:text-amber-400 transition-colors duration-250" :"text-white hover:underline hover:text-amber-400 transition-colors duration-250"}
            >
            Acerca de Nosotros
            </Link>
            <p>|</p>
            <Link href="/Contacto" 
                  className={pathName === "/Contacto"? "text-amber-200 underline hover:text-amber-400 transition-colors duration-250" :"text-white hover:underline hover:text-amber-400 transition-colors duration-250"}
            >
            Contacto
            </Link>
            <p>|</p>
            <Link href="/Tours-Y-Excursiones" 
                  className={pathName === "/Tours-Y-Excursiones"? "text-amber-200 underline hover:text-amber-400 transition-colors duration-250" :"text-white hover:underline hover:text-amber-400 transition-colors duration-250"}
            >
            Tours y Excursiones
            </Link>
          </nav>
        </div>        
      </header>
    )
}

export default Header;