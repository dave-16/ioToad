
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";

export const PageBackground = () => {
    
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
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
        background: {
          color: {
            value: "#020221",
          },
        },
        fpsLimit: 120,
        interactivity: {
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
            value: ["#4285f4", "#34A853", "#FBBC05", "#EA4335"],
          },
          links: {
            color: "random",
            distance: 400,
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
            direction: "none",
            enable: true,
            outModes: "none",
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
              height: 100,
              replaceColor: true,
              src: "./SquareGrid.svg",
              width: 100
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
              x: -10,
              y: -10
            },
            inlineArrangement: "equidistant",
            scale: 15,
            type: "inline",
            url: "./SquareGrid.svg",
        },
        detectRetina: true,
      }}
    />
  );
};
