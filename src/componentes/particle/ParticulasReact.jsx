import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export function ParticulasReact() {
  async function LoadParticles(main) {
    await loadFull(main);
  }

  return (
    <>
      <Particles
        id="tsparticles"
        init={LoadParticles}
        options={{
          fullScreen: {
            enable: true,
            zIndex: 1,
          },
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#f5f5f5",
            },
            shape: {
              type: "star",

              options: {
                sides: 5,
              },
            },
            opacity: {
              value: 0.8,
              random: true,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 2,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          retina_detect: true,
          background: {
            color: "#111",
          },
        }}
      />
    </>
  );
}
