import Image from "next/image";
import { Lexend_Giga } from "next/font/google";
import EmblaCarousel from './Components/EmblaCarousel';
import './Styles/base.css'
import './Styles/embla.css'
import SplitText from "./Components/SplitText";

const lexend = Lexend_Giga({
  subsets: ['latin'],
  weight: '400'
})

const OPTIONS = { align: 'start', loop: true, draggable: true}
const destinostur = 8
const quepiensan = 6
const DESTINOS = Array.from(Array(destinostur).keys())
const PIENSAN = Array.from(Array(quepiensan).keys())

export default function LadingPage() {
  return (
    <main className="Landing-Page mt-[6%]"
    >
          {/*Destinos Turisticos*/}
      <section className="Destinos-Turisticos w-full flex flex-col justify-center"
      >
        <SplitText
          className={`${lexend.className} heading text-center`}
          text="DESTINOS TURISTICOS"
        />
        <EmblaCarousel slides={DESTINOS} options={OPTIONS} />
      </section>

        {/*Que piensa la gente*/}

      <section className="Que-Piensan-De-Nosotros w-full flex flex-col justify-center"
      >
        <SplitText
          className={`${lexend.className} heading text-center`}
          text="QUE PIENSAN DE NOSOTROS"
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