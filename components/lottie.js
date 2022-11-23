import Lottie from 'react-lottie';
import testAnimation from '../public/lottie/test.json'
import design from '../public/lottie/design.json'
import grid from '../public/lottie/grid.json'
import logo from '../public/lottie/iotoadlogo.json'

export const LottieViewer = ({choice, width, height, loop}) => {
    var animationData = null;
    switch (choice) {
        case 'test':
            animationData = testAnimation;
            break;
        case 'design':
            animationData = design;
            break;
        case 'grid':
            animationData = grid;
            break;
        case 'logo':
            animationData = logo;
            break;
        default:
            console.log('Lottie not found!')
            break;
    }
    // console.log(choice, animationData); 

    if (choice != 'grid' && choice != 'logo') {
      for (let i = 0; i < animationData.layers.length; i++) {
          if (animationData.layers[i].shapes[0].it[1].c) {
              animationData.layers[i].shapes[0].it[1].c.k = [Math.random(),Math.random(),Math.random(),1];
          } else if (animationData.layers[i].shapes[0].it[2].c) {
              animationData.layers[i].shapes[0].it[2].c.k = [Math.random(),Math.random(),Math.random(),1];
          } else {
              console.log('missed color id: ', i);
          }
      }
    }

    const defaultOptions = {
        loop: loop,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        },
      };
    
    return (
      <div>
        <Lottie 
          options={defaultOptions}
          height={height}
          width={width}
        />
      </div>
    );
  }