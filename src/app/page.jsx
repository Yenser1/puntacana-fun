import Image from "next/image";
import EmblaCarousel from './Components/EmblaCarousel';
import './Styles/base.css'
import './Styles/embla.css'

const OPTIONS = { align: 'start' }
const SLIDE_COUNT = 10
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function LadingPage() {
  return (
    <main className="Landing-Page"
    >
      <section className="Destinos-Turisticos"
      >
        <h1 className=""
        >
          Destinos Turistics
        </h1>
        <div className="Destinos-Carousel"
        >
        </div>
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
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </main>
  );
}