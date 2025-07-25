"use client";

import Link from "next/link";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
    subsets: ["latin"],
});
function Destino({ name, url }) {
    return (
        <div
            className="p-8 rounded-4xl text-center w-[100vw] h-[40vh] relative flex"
            style={{
                backgroundImage: `url("/${url}")`,
                backgroundSize: "cover",
            }}
        >
            <Link href={`/${name}`}>
                <h1 className={`${montserrat.className} absolute inset-0 flex items-center justify-center text-white text-4xl heading`}>{name}</h1>
            </Link>

            <Link href={"https://www.whatsapp.com/"} target="blank" className="absolute items-center text-white text-4xl self-end">
                <button
                    className={`${montserrat.className} cursor-pointer border-2 p-2 rounded-2xl text-amber-400 hover:skew-3 hover:text-white hover:scale-110 transition-all duration-250`}
                    style={{
                        backgroundColor: "color-mix(in srgb, gold 30%, transparent 70%)",
                        textShadow: "0 0 7px black",
                        boxShadow: "0 0 15px #333",
                    }}
                >
                    Book now
                </button>
            </Link>
        </div>
    );
}

export default Destino;
