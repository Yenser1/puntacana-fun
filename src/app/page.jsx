import Image from "next/image";
import { Lexend_Giga } from "next/font/google";
import EmblaCarousel from './Components/EmblaCarousel';
import './Styles/base.css'
import './Styles/embla.css'
import SplitText from "./Components/SplitText";
import TextPressure from "./Components/TextPressure";

const lexend = Lexend_Giga({
  subsets: ['latin'],
  weight: '400'
})

const DESTINOS = [
  <div className="bg-red-300 p-8 rounded-4xl text-center w-[100vw] h-[40vh] relative">
    <Image src={'/SantoDomingoBG.png'}
           fill
           className="rounded-4xl"
    />
    <h1 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold heading"
    >Santo Domingo</h1>
  </div>,
  <div className="bg-blue-300 p-8 rounded-4xl text-center w-[100vw] h-[40vh] relative">
    <Image src={'/BuggiesBG.png'}
           fill
           className="rounded-4xl"
    />
    <h1 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold heading"
    >Buggies</h1>
  </div>,
  <div className="bg-green-300 p-8 rounded-4xl text-center w-[100vw] h-[40vh] relative">
    <Image src={'/PuntaCanaBG.png'}
           fill
           className="rounded-4xl"
    />
    <h1 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold heading shadow-2xl"
    >Punta Cana</h1>
  </div>,
  <div className="bg-green-300 p-8 rounded-4xl text-center w-[100vw] h-[40vh] relative">
    <Image src={'/AltosDeChavonBG.webp'}
           fill
           className="rounded-4xl"
    />
    <h1 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold heading shadow-2xl"
    >Altos de Chavon</h1>
  </div>,
  <div className="bg-green-300 p-8 rounded-4xl text-center w-[100vw] h-[40vh] relative">
    <Image src={'/SpeedBoatBG.jpg'}
           fill
           className="rounded-4xl"
    />
    <h1 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold heading shadow-2xl"
    >Speed Boat</h1>
  </div>,
  <div className="bg-green-300 p-8 rounded-4xl text-center w-[100vw] h-[40vh] relative">
    <Image src={'/SamanaBG.jpeg'}
           fill
           className="rounded-4xl"
    />
    <h1 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold heading shadow-2xl"
    >Samana</h1>
  </div>,
  <div className="bg-green-300 p-8 rounded-4xl text-center w-[100vw] h-[40vh] relative">
    <Image src={'/MontanaRedondaBG.jpg'}
           fill
           className="rounded-4xl"
    />
    <h1 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold heading shadow-2xl"
    >Montana Redonda</h1>
  </div>,
  <div className="bg-green-300 p-8 rounded-4xl text-center w-[100vw] h-[40vh] relative">
    <Image src={'/AltosDeChavonBG.webp'}
           fill
           className="rounded-4xl"
    />
    <h1 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold heading shadow-2xl"
    >Altos de Chavon</h1>
  </div>
];

export default function LadingPage() {
  return (
    <main className="Landing-Page mt-[6%]"
    >
      <div style={{position: 'relative', height: '180px'}}>
        <TextPressure
          className='heading'
          text="BIENVENIDOS-A-LA-DIVERSION"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="white"
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
          splitType="words"
        />
        <EmblaCarousel slides={DESTINOS} options={{align: 'start', loop: true, draggable: true}}/>
      </section>

        {/*Que piensa la gente*/}

      <section className="Que-Piensan-De-Nosotros w-full flex flex-col justify-center"
      >
        <SplitText
          className={`${lexend.className} heading text-center`}
          text="QUE PIENSAN DE NOSOTROS"
          splitType="words"
        />
          <div className="piensan w-full flex flex-wrap justify-between items-center "
          >
            <div className="persona1 w-1/4 min-w-[300px] p-[2%] flex justify-center items-center"
            >
              <h1>Pedro Navaja</h1>

            </div>
            <div className="persona1 w-1/4 min-w-[300px] p-[2%] flex justify-center items-center"
            >
              <h1>Juan Cordones</h1>

            </div>
            <div className="persona1 w-1/4 min-w-[300px] p-[2%] flex justify-center items-center"
            >
              <h1>Anita Languardina</h1>

            </div>
          </div>
      </section>

        {/*Acerca de Nosotros*/}
        <section className="Acerca-De-Nosotros h-[30vh] flex flex-col justify-center items-center"
        >
          <SplitText
            className={`${lexend.className} heading text-center`}
            text="ACERCA DE NOSOTROS"
            splitType="words"
          />
          <p className="text-center paragraf"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab incidunt cum unde, ratione ut dolorum alias a officia consequuntur nulla sapiente ipsum neque totam eius sint libero minima, tempora atque.
          </p>
        </section>

        {/*Contacto*/}
        <section className="Contacto flex flex-col justify-center items-center"
        >
          <SplitText
            className={`${lexend.className} heading text-center`}
            text="Contacto"
          />
          <div className="Contactanos"
          >
          </div>
        </section>
    </main>
  );
}