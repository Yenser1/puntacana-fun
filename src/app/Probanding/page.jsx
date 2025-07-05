import ScrambledText from '../Components/ScrambleText';
import SplitText from "../Components/SplitText";
import CircularText from "../Components/CircularText";
import Squares from '../Components/Squares';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // estilos obligatorios



import EmblaCarousel from '../Components/EmblaCarousel';
import '../Styles/base.css'
import '../Styles/embla.css'

const OPTIONS = { align: 'start' }
const SLIDE_COUNT = 6
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


export default function paprobar(){
  return <div className="p-0 m-0">
            <div className="h-max w-screen flex flex-col justify-center items-center p-0 m-0">
              <div className='absolute h-screen w-screen -z-40'>
                <Squares 
                  speed={0.5} 
                  squareSize={40}
                  direction='up'
                  borderColor='#333'
                  hoverFillColor='#222'
                />
              </div>
                <SplitText
                  text='This is PUNTA CANA FUN' 
                  className="text-[4vw]"
                />
                <CircularText
                  text="PUNTA 🌞 CANA 🌞 FUN 🌞 "
                  onHover="speedUp"
                  spinDuration={20}
                  className="custom-class text-yellow-500"
                />
                <CircularText
                  text="TOURS-BIEN-BARATOS-"
                  onHover=""
                  spinDuration={20}
                  className="custom-class text-yellow-500"
                />
                <ScrambledText
                  className="scrambled-text-demo"
                  radius={80}
                  duration={1.2}
                  speed={0.5}
                  scrambleChars={'.:'}
                >
                  Probando texto porque al probar el texto yo lo pruebo
                  con mucho esmejor y sinceramente esto va a ser muy inutil
                  en cuanto a la pagina de punta cana fun pero es curioso
                  probarlo de manera
                </ScrambledText>
                <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            </div>
         </div>
}