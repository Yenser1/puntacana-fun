import SplitText from "../Components/SplitText";
import CircularText from "../Components/CircularText";

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

export default function paprobar(){
  return <div className="p-0 m-0">
            <div className="h-screen w-screen flex flex-col justify-center items-center p-0 m-0">
                <SplitText 
                  text='Hola perdida' 
                  className="text-[10vw]"
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
            </div>
         </div>
}