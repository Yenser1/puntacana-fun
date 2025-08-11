import { Lexend_Giga } from "next/font/google";
import EmblaCarousel from "./Components/EmblaCarousel";
import "./Styles/base.css";
import "./Styles/embla.css";
import SplitText from "./Components/SplitText";
import Link from "next/link";
import ScrambledText from "./Components/ScrambleText";
import Card from "./Components/Card";
import Destino from "./Components/Destinos";

const lexend = Lexend_Giga({
    subsets: ["latin"],
    weight: "400",
    preload: true,
});

const DESTINOS = [
    <Destino url={"SantoDomingoBG.png"} name={"Santo Domingo"} />,
    <Destino url={"BuggiesBG.png"} name={"Buggies"} />,
    <Destino url={"AltosDeChavonBG.webp"} name={"Altos De Chavon"} />,
    <Destino url={"IslaCatalinaBG.jpg"} name={"Isla Catalina"} />,
    <Destino url={"IslaSaonaBG.jpg"} name={"Isla Saona"} />,
    <Destino url={"ParasailingBG.jpg"} name={"Parasailing"} />,
    <Destino url={"SamanaBG.jpeg"} name={"Samana"} />,
    <Destino url={"SpeedBoatBG.jpg"} name={"Speed Boat"} />,
    <Destino url={"MontanaRedondaBG.jpg"} name={"Montana Redonda"} />,
];

export default function LadingPage() {
    return (
        <main className="Landing-Page m-0 p-0">
            {/*Destinos Turisticos*/}
            <section className="Destinos-Turisticos w-full flex flex-col justify-center p-[2%]">
                <SplitText className={`${lexend.className} heading text-center mb-[5%]`} text="DESTINOS TURISTICOS" splitType="chars" />
                <EmblaCarousel slides={DESTINOS} options={{ align: "start", loop: true, draggable: true, dragFree: true }} />
            </section>

            {/*Que piensa la gente*/}

            <section className="Que-Piensan-De-Nosotros w-full flex flex-col justify-center">
                <h1 className={`${lexend.className} heading text-center`}>QUE PIENSAN DE NOSOTROS 🤔</h1>
                <div className="piensan w-full flex flex-wrap justify-center items-center py-[2%] px-[4%] gap-10 gap-y-10">
                    <Card
                        className={""}
                        persona={"Perensejo"}
                        fecha={"06/07/2025"}
                        personaStyle={"text-black"}
                        contenido={
                            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima repudiandae tenetur quidem harum at provident illo quaerat vitae, esse, nostrum nulla libero cum dolores laborum tempore ducimus delectus ea natus!"
                        }
                    />
                    <Card
                        className={""}
                        persona={"Zutanejo"}
                        fecha={"02/12/2015"}
                        personaStyle={"text-black"}
                        contenido={
                            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima repudiandae tenetur quidem harum at provident illo quaerat vitae, esse, nostrum nulla libero cum dolores laborum tempore ducimus delectus ea natus!"
                        }
                    />
                    <Card
                        className={""}
                        persona={"Fulano"}
                        fecha={"23/01/2005"}
                        personaStyle={"text-black"}
                        contenido={
                            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima repudiandae tenetur quidem harum at provident illo quaerat vitae, esse, nostrum nulla libero cum dolores laborum tempore ducimus delectus ea natus!"
                        }
                    />
                </div>
            </section>

            {/*Acerca de Nosotros*/}
            <section
                className="Acerca-De-Nosotros h-[30vh] min-h-96 flex flex-col justify-center items-center"
                style={{
                    backgroundColor: "color-mix(in srgb, #333 30%, transparent 70%)",
                }}
            >
                <h1 className={`${lexend.className} heading text-center`}>Acerca de Nosotros</h1>

                <div className="flex flex-col p-0 items-center">
                    <ScrambledText className="paragraf text-justify p-[2%]" radius={70} duration={1.2} speed={0.5} scrambleChars={".:"}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, temporibus? Eaque, sint nulla vel id corporis aut fugiat ut, explicabo aspernatur eveniet accusamus et, ipsa
                        cumque velit tenetur quisquam accusantium?
                    </ScrambledText>
                    <Link href={"./Acerca-De-Nosotros"} className="paragraf text-amber-300 border-2 p-[1%] rounded-3xl font-bold hover:scale-110 transition-transform duration-200">
                        Leer Mas
                    </Link>
                </div>
            </section>

            {/*Contacto*/}
            <section className="Contacto flex flex-col justify-center items-center">
                <h1 className={`${lexend.className} heading text-center`}>Contacto 📠</h1>

                <div className="Contactanos"></div>
            </section>
        </main>
    );
}
