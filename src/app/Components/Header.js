'use client';
import Image from "next/image";
import "../Styles/globals.css";
import HamburguerMenu from "./HamburguerMenu";
import Navbar from "./Navbar";
import Link from "next/link";
import { useEffect, useState } from "react";

const BREAKPOINT = 1200

function Header(){
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checksize = () => setIsMobile(window.innerWidth < BREAKPOINT);
    checksize()
    window.addEventListener('resize', checksize)
    return () => window.removeEventListener('resize', checksize)
  }, [])

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
                filter: 'drop-shadow(0 0 25px #222)',
                width: 'clamp(250px, 30vw, calc(430px + 1vw))',
              }}
              className="hover:scale-110 transition-transform duration-350"
        />
        </Link>
              {isMobile? <HamburguerMenu/> 
                          
                          :<Navbar/>}
      </header>
    )
}

export default Header;