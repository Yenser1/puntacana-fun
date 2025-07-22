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
            <h1 className={`${montserrat.className} absolute inset-0 flex items-center justify-center text-white text-4xl heading`}>{name}</h1>
            <Link href={"https://www.whatsapp.com/"} target="blank" className="absolute items-center text-white text-4xl self-end">
                <button className={`${montserrat.className} cursor-pointer border-2 p-2 rounded-2xl bg-amber-100 text-amber-400`}>Book now</button>
            </Link>
        </div>
    );
}

export default Destino;
