import Image from "next/image";
import { Lexend_Giga, Montserrat } from "next/font/google";
import EmblaCarousel from './Components/EmblaCarousel';
import './Styles/base.css'
import './Styles/embla.css'
import SplitText from "./Components/SplitText";
import TextPressure from "./Components/TextPressure";
import Link from "next/link";
import ScrambledText from "./Components/ScrambleText";
import Card from "./Components/Card";

const lexend = Lexend_Giga({
  subsets: ['latin'],
  weight: '400',
  preload: true,
})
const montserrat = Montserrat({
  subsets: ['latin']
})

const DESTINOS = [
  <div className="bg-red-300 p-8 rounded-4xl text-center w-[100vw] h-[40vh] relative"
       style={{
          backgroundImage:'url("/SantoDomingoBG.png")',
          backgroundSize:'cover'
        }}
  >
    <h1 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold heading"
    >Santo Domingo</h1>
  </div>,
  <div className="bg-blue-300 p-8 rounded-4xl text-center w-[100vw] h-[40vh] relative"
        style={{
          backgroundImage:'url("/BuggiesBG.png")',
          backgroundSize:'cover'
        }}
  >
    
    <h1 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold heading"
    >Buggies</h1>
  </div>,
  <div className="bg-green-300 p-8 rounded-4xl text-center w-[100vw] h-[40vh] relative"
        style={{
          backgroundImage:'url("/PuntaCanaBG.png")',
          backgroundSize:'cover'
        }}
  >
    <h1 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold heading shadow-2xl"
    >Punta Cana</h1>
  </div>,
  <div className="altos bg-green-300 p-8 rounded-4xl text-center w-[100vw] h-[40vh] relative"
        style={{
          backgroundImage:'url("/AltosDeChavonBG.webp")',
          backgroundSize:'cover'
        }}
        >
    <h1 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold heading shadow-2xl"
    >Altos de Chavon</h1>
  </div>,
  <div className="speed bg-green-300 p-8 rounded-4xl text-center w-[100vw] h-[40vh] relative"
        style={{
          backgroundImage:'url("/SpeedBoatBG.jpg")',
          backgroundSize:'cover'
        }}
        >
    <h1 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold heading shadow-2xl"
    >Speed Boat</h1>
  </div>,
  <div className="samana bg-green-300 p-8 rounded-4xl text-center w-[100vw] h-[40vh] relative"
        style={{
          backgroundImage:'url("/SamanaBG.jpeg")',
          backgroundSize:'cover'
        }}
        >
    <h1 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold heading shadow-2xl"
    >Samana</h1>
  </div>,
  <div className="bg-green-300 p-8 rounded-4xl text-center w-[100vw] h-[40vh] relative"
        style={{
          backgroundImage:'url("/IslaSaonaBG.jpg")',
          backgroundSize:'cover'
        }}
        >
    <h1 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold heading shadow-2xl"
    >Isla Saona</h1>
  </div>,
  
  <div className="bg-green-300 p-8 rounded-4xl text-center w-[100vw] h-[40vh] relative"
        style={{
          backgroundImage:'url("/IslaCatalinaBG.jpg")',
          backgroundSize:'cover'
        }}
        >
    <h1 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold heading shadow-2xl"
    >Isla Catalina</h1>
  </div>,
  <div className="samana bg-green-300 p-8 rounded-4xl text-center w-[100vw] h-[40vh] relative"
        style={{
          backgroundImage:'url("/MontanaRedondaBG.jpg")',
          backgroundSize:'cover'
        }}
        >
    <h1 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold heading shadow-2xl"
    >Montana Redonda</h1>
  </div>
];

export default function LadingPage() {
  return (
    <main className="Landing-Page mt-[6%]"
    >
      <div style={{position: 'relative', height: '180px'}}>
        <TextPressure
          className='heading'
          text="BIENVENIDOS-A-LA-DIVERSIÓN"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#fff"
          strokeColor="#ff0000"
          minFontSize={0}
        />
      </div>
          {/*Destinos Turisticos*/}
      <section className="Destinos-Turisticos w-full flex flex-col justify-center p-[2%]"
      >
        <SplitText
          className={`${lexend.className} heading text-center mb-[5%]`}
          text="DESTINOS TURISTICOS"
          splitType="chars"
        />
        <EmblaCarousel slides={DESTINOS} options={{align: 'start', loop: true, draggable: true}}/>
      </section>

        {/*Que piensa la gente*/}

      <section className="Que-Piensan-De-Nosotros w-full flex flex-col justify-center"
      >
        <SplitText
          className={`${lexend.className} heading text-center`}
          text="QUE PIENSAN DE NOSOTROS 🤔"
          splitType="chars"
        />
          <div className="piensan w-full flex flex-wrap justify-center items-center py-[2%] px-[4%] gap-10 gap-y-10"
          >
            <Card className={''}
                  persona={'Perensejo'}
                  fecha={'06/07/2025'}
                  personaStyle={'text-black'}
                  contenido={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima repudiandae tenetur quidem harum at provident illo quaerat vitae, esse, nostrum nulla libero cum dolores laborum tempore ducimus delectus ea natus!'}
            />
            <Card className={''}
                  persona={'Zutanejo'}
                  fecha={'02/12/2015'}
                  personaStyle={'text-black'}
                  contenido={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima repudiandae tenetur quidem harum at provident illo quaerat vitae, esse, nostrum nulla libero cum dolores laborum tempore ducimus delectus ea natus!'}
            />
            <Card className={''}
                  persona={'Fulano'}
                  fecha={'23/01/2005'}
                  personaStyle={'text-black'}
                  contenido={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima repudiandae tenetur quidem harum at provident illo quaerat vitae, esse, nostrum nulla libero cum dolores laborum tempore ducimus delectus ea natus!'}
            />
          </div>
      </section>

        {/*Acerca de Nosotros*/}
        <section className="Acerca-De-Nosotros h-[30vh] flex flex-col justify-center items-center"
                 style={{
                  backgroundColor: 'color-mix(in srgb, #333 30%, transparent 70%)',
                 }}
        >
          <SplitText
            className={`${lexend.className} heading text-center`}
            text="ACERCA DE NOSOTROS"
            splitType="chars"
          />

          <div className="flex flex-col p-0 items-center"
          >
          <ScrambledText
            className="paragraf text-justify p-[2%]"
            radius={70}
            duration={1.2}
            speed={0.5}
            scrambleChars={'.:'}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, temporibus? Eaque, sint nulla vel id corporis aut fugiat ut, explicabo aspernatur eveniet accusamus et, ipsa cumque velit tenetur quisquam accusantium?
          </ScrambledText>
          <Link href={'./Acerca-De-Nosotros'}
                className="paragraf text-amber-300 border-2 p-[1%] rounded-3xl font-bold hover:scale-110 transition-transform duration-200"
          >
          Leer Mas
          </Link>
          </div>
        </section>

        {/*Contacto*/}
        <section className="Contacto flex flex-col justify-center items-center"
        >
          <SplitText
            className={`${lexend.className} heading text-center`}
            text="Contacto 📠"
          />
          <div className="Contactanos"
          >
          </div>
        </section>
    </main>
  );
}