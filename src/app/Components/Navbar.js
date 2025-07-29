"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function Navbar() {
    const pathName = usePathname();
    return (
        <nav className="flex gap-10 navlinks">
            <Link
                href="/"
                className={
                    pathName === "/" ? "text-amber-400 underline hover:text-amber-400 transition-colors duration-250" : "text-white hover:underline hover:text-amber-400 transition-colors duration-250"
                }
            >
                Inicio
            </Link>
            <p>|</p>
            <Link
                href="/Acerca-De-Nosotros"
                className={
                    pathName === "/Acerca-De-Nosotros"
                        ? "text-amber-400 underline hover:text-amber-400 transition-colors duration-250"
                        : "text-white hover:underline hover:text-amber-400 transition-colors duration-250"
                }
            >
                Acerca de Nosotros
            </Link>
            <p>|</p>
            <Link
                href="/Contacto"
                className={
                    pathName === "/Contacto"
                        ? "text-amber-400 underline hover:text-amber-400 transition-colors duration-250"
                        : "text-white hover:underline hover:text-amber-400 transition-colors duration-250"
                }
            >
                Contacto
            </Link>
            <p>|</p>
            <Link
                href="/Tours-Y-Excursiones"
                className={
                    pathName === "/Tours-Y-Excursiones"
                        ? "text-amber-400 underline hover:text-amber-400 transition-colors duration-250"
                        : "text-white hover:underline hover:text-amber-400 transition-colors duration-250"
                }
            >
                Tours y Excursiones
            </Link>
        </nav>
    );
}
