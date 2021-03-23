import "./Header.css";
const Header = ({ wpm, countDown }) => {
  return (
    <div className="header">
      <div className="wpm">
        <span>WPM</span>
        {wpm}
      </div>
      <div className="second">
        <span>Seconds</span>
        {countDown}
      </div>
    </div>
  );
};

export default Header;
