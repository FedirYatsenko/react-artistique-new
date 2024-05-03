import PropTypes from 'prop-types';

const Plant5 = ({ color, size, rotation, x, y, opacity, reflection, id }) => (
<g style={{ opacity: opacity, filter: "drop-shadow(0px 0px 10px rgba(0,0,0,1))" }}>
    <defs>
    <style>
    {`
      .fifth-plant-cls-1-${id} {
        fill: none;
        stroke: #000;
        stroke-miterlimit: 10;
        stroke-width: 4px;
      }

      .fifth-plant-cls-2-${id} {
        fill: ${color};
        stroke-width: 0px;
      }
      `}
    </style>
  </defs>
  <g style={{transform: `translate(${x}, ${y}) scaleX(${reflection})` }}>  
  <g style={{ transform: `scale(${size}) rotate(${rotation}deg)`}}>
  <g style={{transform: `translate(-166.09px, -443.19px)` }}>  
    <g>
      <path className={`fifth-plant-cls-2-${id}`} d="m198.78,73.85l17.96,30.46c10.08-28.57-17.96-30.46-17.96-30.46Z"/>
      <path className={`fifth-plant-cls-2-${id}`} d="m319.89,324.06c22.75-25.21,0-46.98,0-46.98,17.24-28.92-5.46-46.98-5.46-46.98,9.81-37.74-21.92-35.18-21.92-35.18,10.31-39.47-24.21-34.37-24.21-34.37,7.34-36.86-23.64-31.24-23.64-31.24,2.58-35.05-27.91-24.99-27.91-24.99l-17.06-28.93-.91-1.52h0s10.6-7.59-6.92-25.84S148.55,5.06,148.55,5.06c2.19,28.47-16.25,35.19-22.03,55.19-6.2,21.45,5.86,23.36,5.86,23.36,0,0-41.34,7.41-16.4,37.88-38.41-3.53-28.9,27.93-28.9,27.93-37.37,10.93-21.87,38.46-21.87,38.46-32.29-3.01-29.68,27.34-29.68,27.34-39.52,9.36-17.96,32.02-17.96,32.02-34.04,27.48,0,42.96,0,42.96-35.03,22.21,0,40.62,0,40.62,0,0-33.69,23.07,4.69,42.36,0,0-83.75,31.55,136.06,68.01l.02-.02s0,.01.01.01c3.25-.4,208.07-25.72,161.54-71.24,0,0,23.14-20.35,0-45.89Z"/>
    </g>
    <path className={`fifth-plant-cls-1-${id}`} d="m164.97,67.42c23.66,149.77-4.65,367.33-6.64,373.74,0,.02.01.03.03.03,3.25-.4,208.07-25.72,161.54-71.24"/>
    <path className={`fifth-plant-cls-1-${id}`} d="m319.89,324.06c22.75-25.21,0-46.98,0-46.98l-150.48,59.02-151.84-45.89s-34.04-15.48,0-42.96"/>
    <path className={`fifth-plant-cls-1-${id}`} d="m319.89,277.08c17.24-28.92-5.46-46.98-5.46-46.98l-142.47,65.59L17.57,247.25s-21.55-22.67,17.96-32.02"/>
    <path className={`fifth-plant-cls-1-${id}`} d="m314.43,230.1c9.81-37.74-21.92-35.18-21.92-35.18l-118.84,59.38-138.13-39.07s-2.61-30.35,29.68-27.34"/>
    <path className={`fifth-plant-cls-1-${id}`} d="m292.51,194.92c10.31-39.47-24.21-34.37-24.21-34.37l-93.94,54.68-109.14-27.34s-15.5-27.53,21.87-38.46"/>
    <path className={`fifth-plant-cls-1-${id}`} d="m268.3,160.55c7.34-36.86-23.64-31.24-23.64-31.24l-70.88,40.24-86.69-20.12s-9.51-31.46,28.9-27.93"/>
    <path className={`fifth-plant-cls-1-${id}`} d="m216.74,104.31c10.09-28.57-17.96-30.46-17.96-30.46l-4.58,3.05-24.79,16.48-37.02-9.76s-12.06-1.9-5.86-23.36c5.78-20,24.22-26.72,22.03-55.19,0,0,25.79,24.7,43.31,42.95s6.92,25.83,6.92,25.83"/>
    <path className={`fifth-plant-cls-1-${id}`} d="m132.39,83.62s-41.34,7.41-16.4,37.88l55.98,10.4,44.78-27.58s30.49-10.06,27.91,24.99"/>
    <path className={`fifth-plant-cls-1-${id}`} d="m17.57,330.83s-33.69,23.07,4.69,42.36l140.23,37.31,157.4-40.54s23.14-20.35,0-45.89l-153.56,49.13-148.77-42.36s-35.03-18.41,0-40.62"/>
    <path className={`fifth-plant-cls-1-${id}`} d="m22.25,373.18s-83.75,31.55,136.06,68.01"/>
  </g>
  </g>
  </g>
</g>);

Plant5.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  rotation: PropTypes.number.isRequired,
  x: PropTypes.string.isRequired,
  y: PropTypes.string.isRequired,
  opacity: PropTypes.number.isRequired,
  reflection: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default Plant5;