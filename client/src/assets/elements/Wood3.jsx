import PropTypes from 'prop-types';

const Wood3 = ({ color, size, rotation, x, y, reflection }) => (
<g style={{ filter: "drop-shadow(0px 0px 10px rgba(0,0,0,1))" }}>
    <defs>
    <style>
    {`
      .third-wood-cls-1 {
        fill: none;
        stroke-width: 3px;
      }

      .third-wood-cls-1, .third-wood-cls-2 {
        stroke: #000;
        stroke-miterlimit: 10;
      }

      .third-wood-cls-2 {
        fill: ${color};
        stroke-width: 4px;
      }

      .third-wood-cls-3 {
        stroke-width: 0px;
      }
      `}
    </style>
  </defs>
  <g style={{transform: `translate(${x}, ${y}) scaleX(${reflection})` }}>  
  <g style={{ transform: `scale(${size}) rotate(${rotation}deg)`}}>
  <g style={{transform: `translate(-130.125px, -502.7px)` }}>  
    <path className="third-wood-cls-2" d="m140.56,162.21S42.84,120.79,5.51,61.3c-2.03-3.24-3.35-6.91-3.49-10.73-.18-4.66,1.17-10.53,7.33-15.24,4.4-3.36,10.66-2.72,14.36,1.4,15.14,16.91,61.61,64.28,119.78,80.02l-2.93,45.46Z"/>
    <path className="third-wood-cls-3" d="m141.23,151.76c-18.79-14.65-39.08-27.47-60.62-37.65-16.47-7.2-32.8-15.06-47.79-25.08-5.02-3.3-9.94-6.77-14.57-10.59,17.61,10.38,37.12,20.15,55.49,29.13,24.61,10.99,48.71,24.56,67.49,44.18h0Z"/>
    <path className="third-wood-cls-3" d="m141.14,129.91c-.07.36.17.88.36,1.06,0,0-.1-.07-.1-.07-1.38-.97-3.97-2.47-5.45-3.36-11.06-6.36-22.14-12.9-33.72-18.26-20.66-8.26-40.67-18.06-60.23-28.65,17.47,6.72,34.47,14.58,51.68,21.88,4.34,1.95,8.82,3.16,13.09,5.25,11.62,5.74,22.84,12.09,33.81,18.94.67.44,2.02,1.31,2.66,1.82.48.33.95.93.89,1.59,0,0-2.99-.19-2.99-.19h0Z"/>
    <path className="third-wood-cls-2" d="m248.67,489.89c-1.38-17.21-23.54-302.42,9.11-457.36.91-4.34.52-8.89-1.42-12.88-3.81-7.82-14.4-17.22-43.21-17.64-27.23-.39-42.21,5.02-50.18,9.98-5.05,3.14-8.52,8.28-9.62,14.13-6.4,34.03-34.56,205.1-10.15,468.18.34,3.62,3.38,6.4,7.02,6.4h92.04c4.78,0,8.18-4.66,6.71-9.22h0c-.17-.52-.27-1.05-.32-1.6Z"/>
    <path className="third-wood-cls-1" d="m154.88,21.26s11.09,24,54.6,21.79c43.51-2.21,44.92-5.59,48.76-15.59"/>
    <path className="third-wood-cls-3" d="m202.12,22.5c10.94-1.85,22.44-4.05,33.45-1.26,3.24.86,5.61,3.55,3.18,6.8-2.86,3.37-7.28,4.13-11.25,5.08-13.58,2.43-27.52,2.32-41.15.38-3.91-.8-13.5-2-13.84-7.24-.22-2.25.54-4.66,1.96-6.39,4.9-5.55,12.73-6.65,19.57-7.83,10.2-1.65,20.57-.79,30.75.24-1.7.12-3.4.21-5.1.35-8.42.59-16.85,1.45-25.22,2.38-6.16,1.02-19.83,3.05-18.93,11.38.3.71,1.09,1.15,1.93,1.6,2.76,1.32,6.11,2,9.37,2.55,9.94,1.52,20.14,1.69,30.15.96,4.96-.42,9.96-1.02,14.67-2.55,1.82-.66,3.55-1.32,4.67-2.68.24-.33.46-.71.4-1-.87-1.13-2.9-1.39-4.35-1.71-3.19-.55-6.56-.62-9.91-.65-6.72-.44-13.53-.46-20.35-.42h0Z"/>
    <path className="third-wood-cls-3" d="m171.42,36.3c7.03,14.29,11.87,29.76,16.12,45.09,26.23,109.84,8.22,231.33-28.96,336.68-5.5,14.51-11.91,30.13-18.12,44.31,0,0,9.22-25.73,9.22-25.73,4.22-12.6,8.6-26.4,12.7-38.92,31.64-98.88,46-206.63,23.91-309.03-3.54-17.79-8.02-35.55-14.86-52.39h0Z"/>
    <path className="third-wood-cls-3" d="m150.4,43.19c17.48,42.54,25.42,88.41,29.12,134.07,4.56,60.94-1.63,123.49-23.15,180.94,0,0-4.44,10.6-4.44,10.6-2.81,5.81-6.94,15.02-10.12,20.61,0,0-5.48,10.07-5.48,10.07s4.72-10.44,4.72-10.44c2.8-5.77,6.31-15.07,8.76-21.1,0,0,3.74-10.79,3.74-10.79,37.58-100.71,27.81-212.81-3.16-313.96h0Z"/>
    <path className="third-wood-cls-3" d="m133.42,305.3c5.32-10.99,8.18-22.81,11.4-34.48,0,0,1.82-7.03,1.82-7.03.86-4.3,2.17-10.01,2.91-14.24,1.87-11.11,3.72-24.79,4.34-36.09,2-26.62.91-53.44-1.41-80-2.1-19.01-4.78-38.95-6.7-57.99,2.24,10.71,5.08,21.4,6.69,32.25.25,2.22,1.02,8.55,1.3,10.91.49,4.32,1.33,10.3,1.69,14.55,3.52,38.79,3.81,78.42-2.96,116.9-.73,4.28-2.09,10.1-2.94,14.39-.56,2.08-2.22,8.6-2.75,10.68-3.19,10.52-7.52,20.86-13.39,30.14h0Z"/>
    <path className="third-wood-cls-3" d="m204.02,43.19c1.41,2.89,2.56,5.87,3.68,8.87.5,2.33,1.44,6.98,1.88,9.31,2.32,12.46,3.97,25.04,4.68,37.71.22,4.61.68,9.74-.36,14.27-.27,1.58-.56,3.15-.88,4.72-.39-2.27-.75-4.8-1.05-7.09,0,0-.39-2.35-.39-2.35l-.09-4.69-.23-4.69c-.7-12.52-2.34-24.99-4.63-37.32-.6-3.08-1.19-6.16-1.89-9.22-.24-3.16-.52-6.32-.72-9.52h0Z"/>
    <path className="third-wood-cls-3" d="m241.25,40.13c.91,2.12,1.59,4.29,2.24,6.47.17,2.23.36,4.45.5,6.68.28,4.45.42,8.92.44,13.38.03,4.46-.1,8.93-.37,13.39l-.22,3.35c-.05,3.45-1.31,6.63-2.59,9.8-.4-3.4-.93-6.67-.41-10.04,0,0,.22-3.29.22-3.29.27-4.39.4-8.79.36-13.2-.02-4.4-.15-8.81-.43-13.21-.15-2.2-.29-4.4-.52-6.59.24-2.23.45-4.47.78-6.75h0Z"/>
    <path className="third-wood-cls-3" d="m227.17,43.19c2.84,26.9,3.91,54,2.57,81.03-1.28,27.06-3.96,54.14-10.43,80.51-12.35,52.46-10.47,107.36-4.69,160.59,3.52,12.33,8.76,26.91,13.36,39.74,4.87,13.19,10.36,26.19,17.53,38.33-4.01-5.81-7.56-11.93-10.83-18.2-9.83-18.86-17.14-38.84-22.99-59.26-3.3-26.98-4.64-54.11-4.43-81.26.41-27.09,2.65-54.28,9.15-80.67,3.22-13.03,5.41-26.31,7.12-39.66,2.53-21.72,3.7-43.63,3.81-65.51.3-18.55.58-37.08-.17-55.65h0Z"/>
    <path className="third-wood-cls-3" d="m241.12,208.54c-3.01,6.33-4.9,13.09-6.5,19.88-5.89,20.08-7.53,41.18-7.2,62.07.36,23.56,3.1,47.1,9.68,69.73,1.31,4.11,2.69,8.38,5,12.05-2.93-3.28-4.93-7.42-6.8-11.38-4.16-8.86-5.82-18.63-7.46-28.19-2.13-13.98-3.14-28.06-3.42-42.16-.2-25.63,1.69-60.56,16.7-82h0Z"/>
    <path className="third-wood-cls-3" d="m242.27,500.7c-3.71-5.71-7.12-11.6-10.45-17.53-2.91-6.13-5.78-12.29-8.52-18.5-5.5-12.42-10.67-24.99-15.33-37.76-6.94-19.17-13.03-38.79-16.25-58.99-.12-1.25-.32-3.85-.37-5.12-.21-3.41-.28-6.83-.26-10.24,0,0,.23-5.1.23-5.1,3.41,26.82,10.06,53.07,19.47,78.42,6.97,19.04,14.98,37.71,23.76,55.99,2.53,6.29,5.12,12.55,7.73,18.84h0Z"/>
    <path className="third-wood-cls-3" d="m220.33,500.7c-2.79-1.84-5.39-3.93-7.95-6.06-2.21-2.46-4.39-4.93-6.5-7.47-4.22-5.08-8.22-10.35-11.9-15.86-3.67-5.5-7.03-11.25-9.84-17.28-1.38-3.03-2.67-6.11-3.71-9.29-.6-3.32-1.01-6.67-.97-10,1.15,3.13,2.39,6.15,3.82,9.06,5.23,15.37,14.64,28.98,24.9,41.45,2.09,2.5,4.21,4.97,6.43,7.35,0,0,5.71,8.1,5.71,8.1h0Z"/>
    <path className="third-wood-cls-3" d="m4.41,42.27c8.38,9.19,18.79,16.91,30.24,21.85,3.81,1.81,7.81,3.1,11.88,4.64-12.08-.15-23.47-5.81-32.9-13.04-4.29-3.41-8.27-7.16-11.59-11.62,0,0,2.38-1.83,2.38-1.83h0Z"/>
    <path className="third-wood-cls-3" d="m10.76,34.83c1.93,4.24,5.88,7.26,9.81,9.63,1.42.85,2.87,1.64,4.3,2.51-1.67-.26-3.31-.68-4.9-1.28-3.19-1.28-6.24-2.99-8.76-5.39-1.34-1.32-2.51-2.68-3.29-4.47,0,0,2.83-1,2.83-1h0Z"/>
  </g>
  </g>
  </g>
</g>);

Wood3.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  rotation: PropTypes.number.isRequired,
  x: PropTypes.string.isRequired,
  y: PropTypes.string.isRequired,
  reflection: PropTypes.number.isRequired
};

export default Wood3;