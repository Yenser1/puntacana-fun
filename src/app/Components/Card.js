'use client'
import ScrambledText from "./ScrambleText";

function Card({ persona, contenido, svg, className, personaStyle }){
    return(
        <div className={"bg-amber-300 p-[2%] w-1/4" + " " + className}
        >
            <h1 className={"headingfoot" +" "+ personaStyle}
            >{persona}</h1>
            {()=>{
                return(svg)
            }}
            <ScrambledText
            className="paragraf text-justify p-[2%]"
            radius={70}
            duration={1.2}
            speed={0.5}
            scrambleChars={'.:'}
          >
            {contenido}
          </ScrambledText>
        </div>
    )
}
export default Card;