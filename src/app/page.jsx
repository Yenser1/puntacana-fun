import Image from "next/image";
import { Roboto, Lexend_Giga } from "next/font/google";
import EmblaCarousel from './Components/EmblaCarousel';
import './Styles/base.css'
import './Styles/embla.css'

const roboto = Roboto ({
  subsets: ['latin']
})
const lexend = Lexend_Giga({
  subsets: ['latin'],
  weight: '400'
})

const OPTIONS = { align: 'start', loop: true, draggable: true}
const SLIDE_COUNT = 8
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function LadingPage() {
  return (
    <main className="Landing-Page"
    >
      <section className="Destinos-Turisticos w-full"
      >
        <h1 className={`${lexend.className} heading text-center`}
        >
          DESTINOS TURISTICOS
        </h1>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </section>
      <section className="Que-Piensa-Lagente"
      >
        <h1 className=""
        >Lo que la gente Opina
        </h1>

        <div className="Piensa-Carousel"
        >

        </div>
      </section>
        <section className="Acerca-De-Nosotros"
        >
          <h1 className=""
          >
            Acerca de Nosotros
          </h1>
          <p className=""
          >
            el parrafo
          </p>
        </section>
        <section className="Contacto"
        >
          <h1 className=""
          >
            Contactanos
          </h1>
          <div className="Contactanos"
          >

          </div>
        </section>
    </main>
  );
}