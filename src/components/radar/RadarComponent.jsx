import { useState, useEffect } from 'react';
import { Radar } from 'react-chartjs-2';
import Button from 'react-bootstrap/Button';
import datosRadar from './ConfiguracionRadar';

const RadarComponent = () => {
    const [datos, setDatos] = useState(datosRadar);

    useEffect(() => {
        if(datos !== datosRadar){
            setDatos(datosRadar);
        }
    }, [datos]);

    const randomize = () => {
        const datosHombre = datos.datasets[0];
        const datosMujer = datos.datasets[1];

        for (let i = 0; i < datosHombre.data.length; i++) {
            datosHombre.data[i] = generateNumber(i);
            setDatos(datos.datasets[0].data[i] + datosHombre)
        }  

        for (let j = 0; j < datosMujer.data.length; j++) {
            datosMujer.data[j] = generateNumber(j);
            setDatos(datos.datasets[1].data[j] + datosMujer)
        }          

    };

    const generateNumber = (i) => {
        return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
    };

    return ( 
        <div className="container">
            <h3 className="m-3">Grafico de Radar</h3>
            <hr></hr>
            <Radar id="radar-chart" width={400} height={400} data={datosRadar} options={datosRadar.options} redraw />
            <Button className="btn btn-4 btn-block mx-auto w-25" onClick={randomize}>Aleatorio</Button>                
        </div>
     );
}
 
export default RadarComponent;