import ReactSlider from 'react-slider';
import './Thermometer.css';
import { useClimateTheme } from '../../context/ClimateContext';



function Thermometer() {
  let {temperature, setTemperature} = useClimateTheme()
  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {"x"}°F</div>
      <ReactSlider
        value={temperature}
        onAfterChange={(val) => {setTemperature(val)}}
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Thermometer;
