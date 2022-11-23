import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";

export const PageBackground = () => {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };
  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fps_limit: 60,
        background: {
          color: {
            value: "#020221",
          },
        },
        fpsLimit: 120,
        interactivity: {
          detect_on: "canvas",
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "grab",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 1,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: ["#393982", "#2c2c82", "#19196c", "#0a0a6a"],
          },
          links: {
            color: "random",
            distance: 250,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            attract: {
              enable: false,
              rotate: {
                x: 600,
                y: 1200
              }
            },
            direction: "outside",
            enable: true,
            outModes: "bounce",
            random: false,
            speed: 0.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            limit: 0,
            value: 40,
          },
          opacity: {
            animation: {
              enable: true,
              minimumValue: 0.3,
              speed: 2,
              sync: false
            },
            random: false,
            value: 0.8
          },
          shape: {
            character: {
              fill: false,
              font: "Verdana",
              style: "",
              value: "*",
              weight: "400"
            },
            image: {
              replaceColor: true,
              src: "./SquareGrid.svg",
              height: 115,
              width: 264
            },
            polygon: {
              sides: 5
            },
            stroke: {
              color: "#000000",
              width: 0
            },
            type: "circle",
          },
          size: {
            animation: {
              enable: false,
              minimumValue: 0.1,
              speed: 40,
              sync: false
            },
            random: true,
            value: 1
          },
        },
        polygon: {
            draw: {
                enable: false,
                lineColor: "rgba(255,255,255,0.2)",
                lineWidth: 0.5,
                // stroke: {
                //     color: "#666685",
                // }
            },
            enable: true,
            move: {
                radius: 5,
            },
            position: {
              x: -35,
              y: 0
            },
            inlineArrangement: "equidistant",
            scale: 10,
            type: "inline",
            url: "./SquareGrid.svg",
        },
        detectRetina: true,
      }}
    />
  );
};