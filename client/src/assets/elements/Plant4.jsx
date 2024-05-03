import PropTypes from 'prop-types';

const Plant4 = ({ color, size, rotation, x, y, opacity, reflection, id }) => (
<g style={{ opacity: opacity, filter: "drop-shadow(0px 0px 10px rgba(0,0,0,1))" }}>
    <defs>
    <style>
    {`
      .fourth-plant-cls-1-${id} {
        fill: ${color};
        stroke: #000;
        stroke-miterlimit: 10;
        stroke-width: 4px;
      }

      .fourth-plant-cls-2-${id} {
        stroke-width: 0px;
      }
      `}
    </style>
  </defs>
  <g style={{transform: `translate(${x}, ${y}) scaleX(${reflection})` }}>  
  <g style={{ transform: `scale(${size}) rotate(${rotation}deg)`}}>
  <g style={{transform: `translate(-90.205px, -388.58px)` }}>  
    <path className={`fourth-plant-cls-1-${id}`} d="m23.44,386.58S-20.89,220.99,17.94,74.46s66.38-28.81,67.63-8.77,11.27,147.79,6.26,182.86-44.22,138.04-44.22,138.04h-24.17Z"/>
    <path className={`fourth-plant-cls-2-${id}`} d="m35.6,386.32c12.88-106.48,18.19-214.17,16.53-321.43-.08-7.16-.22-14.32-.25-21.49.65,10.26,1.27,21.85,1.79,32.2,2.77,75.09.22,150.74-5.51,225.62-2.21,28.16-5.05,57.62-8.6,85.63,0,0-3.96-.53-3.96-.53h0Z"/>
    <path className={`fourth-plant-cls-1-${id}`} d="m37.59,386.58s-7.72-151.74,69.44-248.83,70.73-43.08,71.37-36.65-30.22,178.74-110.59,285.48h-30.22Z"/>
    <path className={`fourth-plant-cls-2-${id}`} d="m49.92,386.18c9.4-43.75,21.51-86.88,36.25-129.13,11.19-31.61,23.62-62.96,40.04-92.26,5.48-9.75,11.4-19.27,17.99-28.29-29.01,47.71-48.24,100.48-64.69,153.61-9.78,31.94-18.38,64.33-25.68,96.9,0,0-3.92-.82-3.92-.82h0Z"/>
  </g>
  </g>
  </g>
</g>);

Plant4.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  rotation: PropTypes.number.isRequired,
  x: PropTypes.string.isRequired,
  y: PropTypes.string.isRequired,
  opacity: PropTypes.number.isRequired,
  reflection: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default Plant4;