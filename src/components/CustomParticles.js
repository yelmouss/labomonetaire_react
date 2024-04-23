import React, { useCallback } from 'react';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';

function CustomParticles() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
    style={{zIndex : -1}}
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 50,
        particles: {
          color: {
            value: '#ffffff',
          },
          collisions: {
            enable: true,
          },
          move: {
            directions: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: true,
            speed: 1,
            straight: true,
          },
          number: {
            density: {
              enable: true,
              area: 500,
            },
            value: 10,
          },
          opacity: {
            value: 0.8,
          },
          shape: {
            type: "char",
            character: [
              { value: "💵", density: 10 }, // Dollar Bill
              { value: "💶", density: 10 }, // Euro Banknote
              { value: "💷", density: 10 }, // Pound Banknote          
              { value: "💰", density: 10 }, // Yen Banknote
              { value: "💸", density: 10 }, // Yen Banknote
              { value: "💲", density: 10 }, // Yen Banknote
              { value: "💳", density: 10 }, // Yen Banknote
            
              // Vous pouvez ajouter plus d'emojis de billets si nécessaire
            ],
          },
          size: {
            value: { min: 5, max: 10 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default CustomParticles;
