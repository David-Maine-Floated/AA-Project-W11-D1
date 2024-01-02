import ReactSlider from 'react-slider';
import './Thermometer.css';
import { useClimateTheme } from '../../context/ClimateContext';



function Thermometer() {
  let {temperature, setTemperature, desiredTemperature, setDesiredTemperature} = useClimateTheme()
  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {temperature}°F</div>
      <ReactSlider
        value={desiredTemperature}
        onAfterChange={(val) => {setDesiredTemperature(val)}}
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
