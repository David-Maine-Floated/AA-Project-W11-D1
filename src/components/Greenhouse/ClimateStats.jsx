import { useClimateTheme } from '../../context/ClimateContext';
import { useTheme } from '../../context/ThemeContext';
import './ClimateStats.css';

function ClimateStats() {
  let {temperature, humidity} = useClimateTheme();
  // let {humidity} = useClimateTheme();
  console.log(temperature, humidity)

  return (
    <div className="climate-stats">
      <div className="temperature">
        Temperature {temperature}°F
      </div>
      <div className="humidity">
        Humidity {humidity}%
      </div>
    </div>
  )
}

export default ClimateStats;
