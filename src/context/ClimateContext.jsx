// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%

import { createContext, useContext, useEffect, useState } from "react";

export const ClimateContext = createContext();
export const useClimateTheme = () => useContext(ClimateContext);

export default function ClimateThemeProvider({ children }) {
    const [temperature, setTemperature] = useState(50);
    const [desiredTemperature, setDesiredTemperature] = useState(50);
    const [humidity, setHumidity] = useState(50);
    const [desiredHumidity, setDesiredHumidity] = useState(50);


    useEffect(() => {
    let timer;
      if (temperature < desiredTemperature) {
        timer = setTimeout(() => {
          setTemperature(temperature + 1);
        }, 1000);
      } else if (temperature > desiredTemperature) {
        timer = setTimeout(() => {
          setTemperature(temperature - 1);
        }, 1000);
      }
      console.log('hello')

      return () => clearTimeout(timer)
      
    }, [temperature, desiredTemperature]);



    return (
        <ClimateContext.Provider value={{temperature, setTemperature, humidity, setHumidity, desiredTemperature, setDesiredTemperature, desiredHumidity, setDesiredHumidity}}>
            {children}
        </ClimateContext.Provider>
    );
};