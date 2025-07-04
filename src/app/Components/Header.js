'use client';
import Image from "next/image";
import "../Styles/globals.css";
import HamburguerMenu from "./HamburguerMenu";

function Header(){
    return(
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
                width: 'clamp(250px, 30vw, calc(430px + 1vw))',
              }}
              className="hover:scale-110 transition-transform duration-350"
        />
        </a>
              <HamburguerMenu/>
        <div>
          <ul className="flex gap-10 navlinks font-mono"
          >
            <a href="/" className="hover:underline hover:text-amber-400 transition-colors duration-250">
            <li>Inicio</li>
            </a>
            <a href="./Acerca-De-Nosotros" className="hover:underline hover:text-amber-400 transition-colors duration-250">
            <li>Acerca de Nosotros</li>
            </a>
            <a href="./Contacto" className="hover:underline hover:text-amber-400 transition-colors duration-250">
            <li>Contacto</li>
            </a>
            <a href="./Tours-Y-Excursiones" className="hover:underline hover:text-amber-400 transition-colors duration-250">
            <li>Tours y Excursiones</li>
            </a>
          </ul>
        </div>        
      </header>
    )
}

export default Header;