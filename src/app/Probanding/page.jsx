import React from "react";
import AnimatedContent from "@/app/Components/AnimatedContent";

function Page() {
  return (
    <div style={{ height: '200vh', padding: '50px' }}>
      <h1>Mi página de prueba</h1>

      <AnimatedContent
        distance={150}
        direction="horizontal"
        reverse={false}
        duration={1.2}
        ease="bounce.out"
        initialOpacity={0.2}
        animateOpacity
        scale={1.1}
        threshold={0.2}
        delay={0.3}
      >
        <div style={{ background: '#eee', padding: '30px', textAlign: 'center' }}>
          <h2>Este contenido se anima al hacer scroll</h2>
          <p>Prueba bajando con el scroll para ver la animación.</p>
        </div>
      </AnimatedContent>
    </div>
  );
}

export default Page;
