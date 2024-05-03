import PropTypes from 'prop-types';

const Plant6 = ({ color, size, rotation, x, y, opacity, reflection, id }) => (
<g style={{ opacity: opacity, filter: "drop-shadow(0px 0px 10px rgba(0,0,0,1))" }}>
    <defs>
    <style>
    {`
      .sixth-plant-cls-1-${id} {
        fill: ${color};
      }

      .sixth-plant-cls-1-${id}, .sixth-plant-cls-2-${id} {
        stroke: #000;
        stroke-miterlimit: 10;
        stroke-width: 4px;
      }

      .sixth-plant-cls-2-${id} {
        fill: none;
      }

      .sixth-plant-cls-3-${id} {
        stroke-width: 0px;
      }
      `}
    </style>
  </defs>
  <g style={{transform: `translate(${x}, ${y}) scaleX(${reflection})` }}>  
  <g style={{ transform: `scale(${size}) rotate(${rotation}deg)`}}>
  <g style={{transform: `translate(-152.16px, -465.86px)` }}>  
    <path className={`sixth-plant-cls-1-${id}`} d="m89.65,463.86s-171.2-29.35-35.06-266.55c0,0,85.97-170.67,85.97-192.45,0,0,57.52,58.04,121.76,183.37,40.41,78.83,78.92,148.63-37.96,275.63H89.65Z"/>
    <path className={`sixth-plant-cls-2-${id}`} d="m152.16,463.86s34.94-255.21-11.6-459"/>
    <polygon className={`sixth-plant-cls-3-${id}`} points="240.43 420.71 155.43 443.55 154.27 438.69 240.43 420.71 240.43 420.71"/>
    <polygon className={`sixth-plant-cls-3-${id}`} points="262.66 362.5 159.59 401.9 157.91 397.19 262.66 362.5 262.66 362.5"/>
    <polygon className={`sixth-plant-cls-3-${id}`} points="266.02 305.87 163.06 353.03 161.08 348.44 266.02 305.87 266.02 305.87"/>
    <polygon className={`sixth-plant-cls-3-${id}`} points="256.07 250.72 165.95 303.29 163.54 298.91 256.07 250.72 256.07 250.72"/>
    <polygon className={`sixth-plant-cls-3-${id}`} points="236.87 209.59 165.98 252.89 163.5 248.55 236.87 209.59 236.87 209.59"/>
    <polygon className={`sixth-plant-cls-3-${id}`} points="218.38 163.35 165.23 202.41 162.42 198.27 218.38 163.35 218.38 163.35"/>
    <polygon className={`sixth-plant-cls-3-${id}`} points="197.64 125.28 163.49 152.03 160.64 147.92 197.64 125.28 197.64 125.28"/>
    <polygon className={`sixth-plant-cls-3-${id}`} points="183.55 92.52 159.49 114.93 156.37 111.03 183.55 92.52 183.55 92.52"/>
    <polygon className={`sixth-plant-cls-3-${id}`} points="170.74 56.32 155.17 76.88 151.5 73.49 170.74 56.32 170.74 56.32"/>
    <polygon className={`sixth-plant-cls-3-${id}`} points="156.45 423.17 39.91 399.55 157.35 418.25 156.45 423.17 156.45 423.17"/>
    <polygon className={`sixth-plant-cls-3-${id}`} points="160.15 376.72 39.91 350.74 161.11 371.81 160.15 376.72 160.15 376.72"/>
    <polygon className={`sixth-plant-cls-3-${id}`} points="162.68 327.12 46.99 294.8 163.92 322.28 162.68 327.12 162.68 327.12"/>
    <polygon className={`sixth-plant-cls-3-${id}`} points="163.65 272.83 65.88 246 164.85 267.97 163.65 272.83 163.65 272.83"/>
    <polygon className={`sixth-plant-cls-3-${id}`} points="163.67 221.28 86.35 200.34 164.83 216.41 163.67 221.28 163.67 221.28"/>
    <polygon className={`sixth-plant-cls-3-${id}`} points="162.33 179.03 100.27 149.97 164.28 174.43 162.33 179.03 162.33 179.03"/>
    <polygon className={`sixth-plant-cls-3-${id}`} points="159.58 133.74 120.98 112.98 161.69 129.21 159.58 133.74 159.58 133.74"/>
    <polygon className={`sixth-plant-cls-3-${id}`} points="154.78 94.68 131.79 78.35 157.31 90.36 154.78 94.68 154.78 94.68"/>
    <polygon className={`sixth-plant-cls-3-${id}`} points="148.01 51.46 137.36 41.75 150.69 47.24 148.01 51.46 148.01 51.46"/>
    <polygon className={`sixth-plant-cls-3-${id}`} points="152.57 459.93 74.52 444.61 153.38 455 152.57 459.93 152.57 459.93"/>
  </g>
  </g>
  </g>
</g>);

Plant6.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  rotation: PropTypes.number.isRequired,
  x: PropTypes.string.isRequired,
  y: PropTypes.string.isRequired,
  opacity: PropTypes.number.isRequired,
  reflection: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default Plant6;