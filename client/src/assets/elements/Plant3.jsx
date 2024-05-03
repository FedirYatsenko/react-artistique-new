import PropTypes from 'prop-types';

const Plant3 = ({ color, size, rotation, x, y, opacity, reflection, id }) => (
<g style={{ opacity: opacity, filter: "drop-shadow(0px 0px 10px rgba(0,0,0,1))" }}>
    <defs>
    <style>
    {`
      .third-plant-cls-1-${id} {
        fill: ${color};
      }

      .third-plant-cls-1-${id}, .third-plant-cls-2-${id} {
        stroke: #000;
        stroke-miterlimit: 10;
        stroke-width: 4px;
      }

      .third-plant-cls-2-${id} {
        fill: none;
      }

      .third-plant-cls-3-${id} {
        stroke-width: 0px;
      }
      `}
    </style>
  </defs>
  <g style={{transform: `translate(${x}, ${y}) scaleX(${reflection})` }}>  
  <g style={{ transform: `scale(${size}) rotate(${rotation}deg)`}}>
  <g style={{transform: `translate(-72.375px, -439.34px)` }}>  
    <path className={`third-plant-cls-1-${id}`} d="m142.73,435.14l-3.19-359.45s.73-68.75-49.99-73.46C61.02-.42,44.96,20.58,36.37,39.46c-5.53,12.16-8.66,25.4-9.58,38.83L2.14,437.31l140.59-2.16Z"/>
    <line className={`third-plant-cls-2-${id}`} x1="74.36" y1="436.2" x2="85.56" y2="9.91"/>
    <path className={`third-plant-cls-2-${id}`} d="m84.87,36.08s22.54-.96,40.93-11.58"/>
    <path className={`third-plant-cls-2-${id}`} d="m84.29,58.19s-41.11-.68-50.29-13.08"/>
    <path className={`third-plant-cls-2-${id}`} d="m83.56,86.05s44.49-3.47,55.74-16.28"/>
    <path className={`third-plant-cls-2-${id}`} d="m82.77,116.36s-39.88,5.14-57.68-13.3"/>
    <path className={`third-plant-cls-2-${id}`} d="m81.95,147.22s47.18,2.74,58.1-13.19"/>
    <path className={`third-plant-cls-2-${id}`} d="m81.15,177.89s-34.47,11.44-60.49-10.34"/>
    <path className={`third-plant-cls-2-${id}`} d="m80.25,212.07s44.84,3.89,60.4-10.7"/>
    <path className={`third-plant-cls-2-${id}`} d="m79.05,257.96s-48.87,6.24-63.56-15.1"/>
    <path className={`third-plant-cls-2-${id}`} d="m78.02,297.05s46.92.15,63.31-20.29"/>
    <path className={`third-plant-cls-2-${id}`} d="m77.03,334.56s-60.64,2.15-66.53-19.05"/>
    <path className={`third-plant-cls-2-${id}`} d="m76.1,370.18s53.62.39,65.87-21.46"/>
    <path className={`third-plant-cls-2-${id}`} d="m75.16,406.02s-55.29,9.71-69.73-16.53"/>
    <path className={`third-plant-cls-3-${id}`} d="m100.89,49.76c4.92-4.34,11.94-6.5,18.45-5.61-4.91,4.36-11.94,6.48-18.45,5.61h0Z"/>
    <path className={`third-plant-cls-3-${id}`} d="m99,64.64c3.8-2.79,8.04-4.49,12.45-5.89,4.44-1.31,8.9-2.27,13.62-2.06-3.8,2.8-8.04,4.5-12.45,5.89-4.44,1.3-8.9,2.26-13.62,2.06h0Z"/>
    <path className={`third-plant-cls-3-${id}`} d="m74,40.25c-8.23-.88-16.32-3.24-22.87-8.47,7.36-.3,17.79,2.99,22.87,8.47h0Z"/>
    <path className={`third-plant-cls-3-${id}`} d="m75.74,26.52c-4.65.51-9.17-1.97-11.18-6.2,4.66-.53,9.15,1.98,11.18,6.2h0Z"/>
    <path className={`third-plant-cls-3-${id}`} d="m73.76,70.65c-5.42.89-10.77.6-16.15-.04-5.37-.73-10.62-1.78-15.64-4.01,5.42-.9,10.77-.6,16.15.04,5.37.73,10.62,1.78,15.64,4.01h0Z"/>
    <path className={`third-plant-cls-3-${id}`} d="m67.37,92.32c-4.93.4-9.66-.36-14.38-1.47-4.71-1.2-9.25-2.71-13.43-5.35,4.93-.41,9.66.35,14.38,1.47,4.7,1.2,9.25,2.71,13.43,5.35h0Z"/>
    <path className={`third-plant-cls-3-${id}`} d="m99.59,96.41c6.09-3.62,13.94-4.76,20.81-2.97-6.08,3.64-13.94,4.74-20.81,2.97h0Z"/>
    <path className={`third-plant-cls-3-${id}`} d="m102.94,112.97c3.13-3.84,8.29-5.51,13.06-4.16-3.12,3.86-8.29,5.49-13.06,4.16h0Z"/>
    <path className={`third-plant-cls-3-${id}`} d="m100.5,132.11c4.2-2.21,8.67-3.26,13.27-4,4.61-.65,9.19-.94,13.85-.04-4.2,2.21-8.67,3.27-13.27,4-4.61.64-9.19.93-13.85.04h0Z"/>
    <path className={`third-plant-cls-3-${id}`} d="m102.51,165.61c5.92-4.02,13.86-5.7,20.89-4.37-5.92,4.04-13.86,5.68-20.89,4.37h0Z"/>
    <path className={`third-plant-cls-3-${id}`} d="m100.4,182.17c4.42-1.73,8.96-2.28,13.61-2.5,4.65-.13,9.22.09,13.75,1.5-4.41,1.73-8.96,2.29-13.61,2.5-4.65.12-9.22-.1-13.75-1.5h0Z"/>
    <path className={`third-plant-cls-3-${id}`} d="m104.81,196.81c2.42-3.09,6.72-3.78,9.96-1.55-2.41,3.11-6.72,3.76-9.96,1.55h0Z"/>
    <path className={`third-plant-cls-3-${id}`} d="m65.52,135.39c-5.17-.07-10.05-1.28-14.89-2.84-4.81-1.64-9.45-3.59-13.63-6.64,5.17.06,10.05,1.28,14.89,2.84,4.81,1.65,9.45,3.59,13.63,6.64h0Z"/>
    <path className={`third-plant-cls-3-${id}`} d="m60.4,147.15c-4.39,1.01-8.72.86-13.09.35-4.37-.6-8.6-1.53-12.59-3.62,4.39-1.02,8.72-.87,13.09-.35,4.36.6,8.6,1.54,12.59,3.62h0Z"/>
    <path className={`third-plant-cls-3-${id}`} d="m60.22,163.51c-6.66,1.9-14.38.93-20.35-2.59,6.66-1.92,14.38-.92,20.35,2.59h0Z"/>
    <path className={`third-plant-cls-3-${id}`} d="m99.07,234.47c3.28-2.49,6.96-3.89,10.83-4.98,3.89-1,7.77-1.64,11.86-1.12-3.28,2.5-6.96,3.9-10.83,4.98-3.89,1-7.77,1.63-11.86,1.12h0Z"/>
    <path className={`third-plant-cls-3-${id}`} d="m96.66,260.85c3.72-3.13,7.95-5.2,12.38-6.98,4.46-1.7,8.97-3.05,13.83-3.26-3.72,3.14-7.95,5.21-12.38,6.98-4.46,1.69-8.97,3.04-13.83,3.26h0Z"/>
    <path className={`third-plant-cls-3-${id}`} d="m104.81,275.47c4.37-3.14,10.2-3.72,15.08-1.43-4.37,3.16-10.2,3.7-15.08,1.43h0Z"/>
    <path className={`third-plant-cls-3-${id}`} d="m61.33,200.48c-5.51-.36-10.68-1.87-15.81-3.71-5.09-1.93-10-4.14-14.42-7.46,5.51.35,10.69,1.86,15.81,3.71,5.09,1.93,10,4.15,14.42,7.46h0Z"/>
    <path className={`third-plant-cls-3-${id}`} d="m63.03,225.39c-7.92-1.55-16.03-2.7-22.87-7.4,6.61-1.09,19,1.6,22.87,7.4h0Z"/>
    <path className={`third-plant-cls-3-${id}`} d="m56.67,237.04c-4.45,1.01-8.84.84-13.28.33-4.43-.6-8.72-1.54-12.78-3.64,4.45-1.02,8.84-.85,13.28-.33,4.43.61,8.72,1.55,12.78,3.64h0Z"/>
    <path className={`third-plant-cls-3-${id}`} d="m59.66,273.94c-4.6.99-9.14.8-13.72.27-4.57-.62-9.01-1.58-13.21-3.7,4.6-1,9.14-.81,13.72-.27,4.57.63,9.01,1.59,13.21,3.7h0Z"/>
    <path className={`third-plant-cls-3-${id}`} d="m53.91,297.09c-5.92-.28-11.54-1.71-17.12-3.47-5.55-1.85-10.94-4-15.88-7.28,5.92.27,11.54,1.7,17.12,3.47,5.55,1.86,10.93,4.01,15.88,7.28h0Z"/>
    <path className={`third-plant-cls-3-${id}`} d="m58.05,310.72c-3.93,1.73-8.01,2.31-12.2,2.54-4.19.14-8.31-.07-12.38-1.45,3.93-1.74,8.01-2.31,12.2-2.54,4.19-.14,8.31.07,12.38,1.45h0Z"/>
    <path className={`third-plant-cls-3-${id}`} d="m97.45,312.46c4.51-2.99,9.45-4.87,14.54-6.46,5.12-1.5,10.27-2.65,15.69-2.63-4.51,3-9.44,4.88-14.54,6.46-5.13,1.49-10.28,2.64-15.69,2.63h0Z"/>
    <path className={`third-plant-cls-3-${id}`} d="m97.49,333.05c4.67-2.01,9.54-2.85,14.51-3.36,4.98-.42,9.92-.5,14.88.62-4.67,2.02-9.54,2.86-14.51,3.36-4.98.42-9.92.49-14.88-.62h0Z"/>
    <path className={`third-plant-cls-3-${id}`} d="m106.57,347.8c1.18-2.86,4.4-3.4,6.43-1.05-1.18,2.88-4.4,3.39-6.43,1.05h0Z"/>
    <path className={`third-plant-cls-3-${id}`} d="m92.75,389.58c4.09-2.77,8.59-4.43,13.25-5.79,4.69-1.27,9.39-2.19,14.33-1.94-4.09,2.78-8.59,4.44-13.25,5.79-4.69,1.26-9.39,2.18-14.33,1.94h0Z"/>
    <path className={`third-plant-cls-3-${id}`} d="m94.34,407.43c5.46-2.42,11.18-3.68,17-4.62,5.84-.85,11.67-1.36,17.61-.67-5.46,2.43-11.17,3.69-17,4.62-5.84.84-11.67,1.35-17.61.67h0Z"/>
    <path className={`third-plant-cls-3-${id}`} d="m100.61,425.7c5.37-2.61,11.03-4.06,16.81-5.2,5.8-1.05,11.6-1.76,17.55-1.27-5.36,2.62-11.02,4.07-16.81,5.2-5.8,1.04-11.6,1.75-17.55,1.27h0Z"/>
    <path className={`third-plant-cls-3-${id}`} d="m58.87,353.07c-6.15-.24-12.02-1.65-17.86-3.38-5.81-1.82-11.46-3.95-16.69-7.21,6.16.23,12.03,1.64,17.86,3.38,5.81,1.83,11.46,3.96,16.69,7.21h0Z"/>
    <path className={`third-plant-cls-3-${id}`} d="m54.62,373.5c-5.4.19-10.57-.79-15.72-2.11-5.13-1.41-10.11-3.12-14.7-5.97,5.4-.2,10.57.78,15.72,2.11,5.13,1.41,10.1,3.13,14.7,5.97h0Z"/>
    <path className={`third-plant-cls-3-${id}`} d="m58,387.04c-6.89,2.72-15.23,2.74-22.12,0,6.88-2.74,15.23-2.72,22.12,0h0Z"/>
    <path className={`third-plant-cls-3-${id}`} d="m48.3,423.26c-6.93,2.71-15.41,2.72-22.34-.03,6.93-2.73,15.41-2.7,22.34.03h0Z"/>
  </g>
  </g>
  </g>
</g>);

Plant3.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  rotation: PropTypes.number.isRequired,
  x: PropTypes.string.isRequired,
  y: PropTypes.string.isRequired,
  opacity: PropTypes.number.isRequired,
  reflection: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default Plant3;

