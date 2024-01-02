import ReactSlider from 'react-slider';
import './Hygrometer.css';
import { useClimateTheme } from '../../context/ClimateContext';
import { useEffect } from 'react';

function Hygrometer() {
  let { humidity, setHumidity, desiredHumidity, setDesiredHumidity} = useClimateTheme();
  let timer;
  useEffect(() => {
      if (humidity < desiredHumidity) {
      timer = setTimeout(() => {
          setHumidity(humidity + 1);
      }, 1000);
      } else if (humidity > desiredHumidity) {
      timer = setTimeout(() => {
          setHumidity(humidity - 1);
      }, 1000);
      }

        return () => clearTimeout(timer);
    
  }, [humidity, desiredHumidity]);

  return (
    <section>
      <h2>Hygrometer</h2>
      <div className="actual-humid">Actual Humidity: {humidity}%</div>
      <ReactSlider
        value={desiredHumidity}
        onAfterChange={(val) => {
          setDesiredHumidity(val);
        }}
        className="hygrometer-slider"
        thumbClassName="hygrometer-thumb"
        trackClassName="hygrometer-track"
        ariaLabel={"Hygrometer"}
        orientation="vertical"
        min={0}
        max={100}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Hygrometer;
