import './ShinyText.css';

interface shinyProps{
    text : string,
    disabled : boolean,
    speed : number,
    className : string
}


const ShinyText = ({ text, disabled = false, speed = 5, className = '' } : shinyProps) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`}
      style={{ animationDuration }}
    >
      {text}
    </div>
  );
};

export default ShinyText;
