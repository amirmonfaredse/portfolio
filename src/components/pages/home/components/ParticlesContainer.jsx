import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { particlesOptions } from "../../../../constants/particles.options";
import { loadFull } from "tsparticles";

const ParticlesContainer = () => {
  const [init, setInit] = useState(false);
  const [slide, setSlide] = useState(false);
  const particlesLoaded = async (container) => {
    console.log(container);
  };

  useEffect(() => {
    try {
      initParticlesEngine(async (engine) => {
        await loadFull(engine);
      })
        .then(() => {
          setInit(true);
        })
        .then(() => {
          setTimeout(() => {
            setSlide(true);
          }, 1000);
        });

      return () => {
        setSlide(false);
      };
    } catch (err) {
      console.log(err.message);
    }
  }, []);
  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={particlesOptions}
        />
      )}
    </>
  );
};
export default ParticlesContainer;
