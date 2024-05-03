import PropTypes from 'prop-types';
import { Plant1, Plant2, Plant3, Plant4, Plant5, Plant6, Plant7, Plant8, Wood1, Wood2, Wood3 } from '../assets/elements';

const Drawing = ({ elements, plantElements, season, woodIncluded, colorVariability, size, colorRandoms, xPositions, reflectionRandoms, sizeRandoms, id }) => {
  
  const numberOfLines = 5;
  let basicColor = 'rgb(129, 189, 125)';
  let opacity = 1;
  let colors = [];
  
  
  const initialElements = [Plant1, Plant2, Plant3, Plant4, Plant5, Plant6, Plant7, Plant8, Wood1, Wood2, Wood3];
  const totalElements = initialElements.length * numberOfLines;
  
  const elementMap = {
    'Plant1': Plant1,
    'Plant2': Plant2,
    'Plant3': Plant3,
    'Plant4': Plant4,
    'Plant5': Plant5,
    'Plant6': Plant6,
    'Plant7': Plant7,
    'Plant8': Plant8,
    'Wood1': Wood1,
    'Wood2': Wood2,
    'Wood3': Wood3,
  };
  
  const realElements = elements.map(element => {
    return elementMap[element];
  });
  const realPlantElements = plantElements.map(element => {
    return elementMap[element];
  });
  
  
  let finalElements = [];
  
  if (woodIncluded) {
    finalElements = realElements;
  } else {
    finalElements = realPlantElements;
  }
  
  
  if (season === 'spring') {
    basicColor = 'rgb(186, 255, 188)';
    opacity = 1;
  } else if (season === 'summer') {
    basicColor = 'rgb(129, 189, 125)';
    opacity = 1;
  } else if (season === 'autumn') {
    basicColor = 'rgb(255, 154, 87)';
    opacity = 1;
  } else if (season === 'winter') {
    basicColor = 'rgb(219, 244, 255)';
    opacity = 0;
  }

  
  
  let adjustedRed;
  let adjustedGreen;
  let adjustedBlue;
  
  const slicedColor = basicColor.slice(4, -1).split(',').map(Number);
  
  colors = Array.from({ length: totalElements }, (_, i) => {
    if(season !== 'winter') {
      adjustedRed = Math.floor(slicedColor[0] + (colorRandoms[i].red * colorVariability / 3));
      adjustedGreen = Math.floor(slicedColor[1] + (colorRandoms[i].green * colorVariability / 3));
      adjustedBlue = Math.floor(slicedColor[2] + (colorRandoms[i].blue * colorVariability / 3));
    } 
    else {
      adjustedRed = Math.floor(slicedColor[0]);
      adjustedGreen = Math.floor(slicedColor[1]);
      adjustedBlue = Math.floor(slicedColor[2]);
    }
    return `rgb(${adjustedRed},${adjustedGreen},${adjustedBlue})`;
  });

  return (
    <svg width="100vw" height="100vh">
    <rect cx="0" cy="0" width="100vw" height="100vh" fill={colors[1]} />
    {finalElements.map((Element, index) => {
      return (
        <Element
        key={index}
        color={Element.name.startsWith('Plant') ? colors[index] : '#9e8e6a'}          
        size={size/10 + sizeRandoms[index]}
        x={`${xPositions[index]}vw`}
        y={`${Math.floor(index / initialElements.length) * 25 + size*2}vh`}
        rotation={0}
        opacity={opacity}
        reflection={reflectionRandoms[index]}
        id={id}
        />);
      })}
      </svg>
      );
    };
    
    Drawing.propTypes = {
      elements: PropTypes.array.isRequired,
      plantElements: PropTypes.array.isRequired,
      season: PropTypes.string.isRequired,
      woodIncluded: PropTypes.bool.isRequired,
      colorVariability: PropTypes.number.isRequired,
      size: PropTypes.number.isRequired,
      colorRandoms: PropTypes.array.isRequired,
      xPositions: PropTypes.array.isRequired,
      reflectionRandoms: PropTypes.array.isRequired,
      sizeRandoms: PropTypes.array.isRequired,
      id: PropTypes.number.isRequired,
    };
    
    export default Drawing;
    