"use client";
import { motion } from "framer-motion";

function Card({ persona, contenido, svg, className, personaStyle, fecha }) {
    return (
        <div className={"bg-amber-300 p-[2%] w-1/4 min-w-[400px] rounded-4xl" + " " + className} style={{ backgroundColor: "color-mix(in srgb, lightblue 40%, transparent 60%)" }} onClick={() => {}}>
            <div className="flex justify-between">
                <motion.h1 className={"headingfoot underline" + " " + personaStyle} initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ease: "easeInOut", duration: 0.5 }}>
                    -{persona}
                </motion.h1>
                <svg width={"clamp(4.3rem,3.6vw,15rem)"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        {" "}
                        <circle cx="12" cy="6" r="4" stroke="#000   " strokeWidth="1.5"></circle>{" "}
                        <path
                            d="M19.9975 18C20 17.8358 20 17.669 20 17.5C20 15.0147 16.4183 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C14.231 22 15.8398 21.8433 17 21.5634"
                            stroke="#000"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        ></path>{" "}
                    </g>
                </svg>
            </div>

            <p className="paragraf text-justify p-[2%] text-[#333]">{contenido}</p>
            <h3 className="text-right text-black font-extrabold">{fecha}</h3>
        </div>
    );
}
export default Card;
