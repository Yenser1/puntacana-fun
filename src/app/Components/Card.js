'use client'
import ScrambledText from "./ScrambleText";

function Card({ persona, contenido, svg, className, personaStyle,fecha,
                
 }){
    return(
        <div className={"bg-amber-300 p-[2%] w-1/4 rounded-4xl" + " " + className}
             style={{backgroundColor: 'color-mix(in srgb, lightblue 40%, transparent 60%)'}}
        >
            <h1 className={"headingfoot underline" +" "+ personaStyle}
            >-{persona}</h1>
            {svg}
            <ScrambledText
            className="paragraf text-justify p-[2%] text-[#333]"
            radius={70}
            duration={1.2}
            speed={0.5}
            scrambleChars={'.:'}
          >
            {contenido}
          </ScrambledText>
          <h3 className="text-right text-black font-extrabold"
          >{fecha}</h3>
        </div>
    )
}
export default Card;