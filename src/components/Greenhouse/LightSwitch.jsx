import './LightSwitch.css';
import { useTheme } from "../../context/ThemeContext";

function LightSwitch() {


  const { themeName, setThemeName } = useTheme();

  function handleClick(e) {
    if(themeName === 'day') {
      setThemeName('night')
    } else {
      setThemeName('day')
    }
  }

  return (
    <div className={`light-switch ${themeName}`}>
      <div onClick={handleClick} className="on">
        DAY
      </div>
      <div onClick={handleClick} className="off">
        NIGHT
      </div>
    </div>
  );
}

export default LightSwitch;
