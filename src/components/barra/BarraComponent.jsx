import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import Button from 'react-bootstrap/Button';
import datosBarra from './ConfiguracionBarra';

const BarraComponent = () => {
    const [datos, setDatos] = useState(datosBarra);
    useEffect(() => {
        if(datos !== datosBarra){
            setDatos(datosBarra);
        }
    }, [datos]);

    const randomize = () =>  {
        const datosCholate = datos.datasets[0];
        const datosAzucar = datos.datasets[1];

        for (let i = 0; i < datosCholate.data.length; i++) {
            datosCholate.data[i] = generateNumber(i);
            setDatos(datos.datasets[0].data + datosCholate)
        }  

        for (let j = 0; j < datosAzucar.data.length; j++) {
            datosAzucar.data[j] = generateNumber(j);
            setDatos(datos.datasets[1].data + datosAzucar)
        }  

    }; 

    const generateNumber = (i) => {
        return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
    };  

    return ( 
        <div className="container">
            <h3 className="m-3">Grafico de Barras</h3>
            <hr></hr>
            <Bar id="bar-chart" width={400} height={400} data={datosBarra} options={datosBarra.options} redraw />
            <Button className="btn btn-4 btn-block mx-auto w-25" onClick={randomize}>Aleatorio</Button>
        </div>        
     );
}
 
export default BarraComponent;