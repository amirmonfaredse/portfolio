import { Suspense, useContext, useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { particlesOptions } from "../../../../constants/particles.options";
import { loadFull } from "tsparticles";
import Context from "../../../../context/context";
import Loading from "../../../utils/Loading";

const ParticlesContainer = () => {
  const { init, setInit, setSlide } = useContext(Context);

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
        <Suspense fallback={<Loading />}>
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={particlesOptions}
          />
        </Suspense>
      )}
    </>
  );
};
export default ParticlesContainer;
