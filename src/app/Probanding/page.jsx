'use client'
import ScrambledText from '../Components/ScrambleText';
import SplitText from "../Components/SplitText";
import CircularText from "../Components/CircularText";
import TextPressure from '../Components/TextPressure';
import Card from '../Components/Card';

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
                
                <EmblaCarousel slides={SLIDES} options={OPTIONS} />
                <div style={{position: 'relative', height: '300px'}}>
                  <TextPressure
                    className='heading'
                    text="BIENVENIDOS-A-LA-DIVERSION"
                    flex={true}
                    alpha={false}
                    stroke={false}
                    width={true}
                    weight={true}
                    italic={true}
                    textColor="#ffffff"
                    strokeColor="#ff0000"
                    minFontSize={130}
                  />
                </div>
                
                <div className='flex justify-between p-[4%]'
                >
                  <Card className={""}
                        personaStyle={"text-black"}
                        persona={'Francisco Alberto'}
                        contenido={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima architecto ducimus sed pariatur tempora, enim, itaque dolores natus vel laudantium omnis voluptatem ipsam nostrum nobis aperiam repudiandae, voluptates labore dignissimos.'}
                  />
                  <Card className={""}
                        personaStyle={"text-black"}
                        persona={'Juanito Alimana'}
                        contenido={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima architecto ducimus sed pariatur tempora, enim, itaque dolores natus vel laudantium omnis voluptatem ipsam nostrum nobis aperiam repudiandae, voluptates labore dignissimos.'}
                  />
                  <Card className={""}
                        personaStyle={"text-black"}
                        persona={'Bob-Patino'}
                        contenido={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima architecto ducimus sed pariatur tempora, enim, itaque dolores natus vel laudantium omnis voluptatem ipsam nostrum nobis aperiam repudiandae, voluptates labore dignissimos.'}
                  />
                </div>                  
            </div>
         </div>
} 