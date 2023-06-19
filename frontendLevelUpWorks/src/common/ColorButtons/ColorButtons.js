import './ColorButtons.css';
// Colored buttons component that can be used everywhere there's the colored buttons (pink, yellow, blue)

export default function ColorButtons({ buttonColor, buttonText, buttonWidth }) {
  return (
    <div>
      <button
        className='colorButton'
        // width: likely 175px 200px or 220px
        // color: YELLOW - var(--warningMain); PINK - var(--secondaryMain); BLUE - var(--primaryMain);
        style={{ backgroundColor: buttonColor, width: buttonWidth }}
      >
        {buttonText}
      </button>
    </div>
  );
}
