import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import Button from 'react-bootstrap/Button';
import datosLinea from './ConfiguracionLinea';

const LineaComponent = () => {
    const [datos, setDatos] = useState(datosLinea);
    
    useEffect(() => {
        if(datos !== datosLinea){
            setDatos(datosLinea);
        }
    }, [datos]);

    const randomize = () => {
        const datosPizza = datos.datasets[0];
        const datosSpagueti = datos.datasets[1];
        const datosMacarrones = datos.datasets[2];

        for (let i = 0; i < datosPizza.data.length; i++) {
            datosPizza.data[i] = generateNumber(i);
            setDatos(datos.datasets[0].data[i] + datosPizza.data[i])
        }  

        for (let j = 0; j < datosSpagueti.data.length; j++) {
            datosSpagueti.data[j] = generateNumber(j);
            setDatos(datos.datasets[1].data[j] + datosSpagueti.data[j])
        }  

        for (let k = 0; k < datosMacarrones.data.length; k++) {
            datosMacarrones.data[k] = generateNumber(k);
            setDatos(datos.datasets[2].data[k] + datosMacarrones.data[k])
        }  
    }; 

    const generateNumber = (i) => {
        return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
    };

    return ( 
        <div className="container">
            <h3 className="m-3">Grafico de Lineas</h3>
            <hr></hr>
            <Line id="line-chart" width={400} height={400} data={datosLinea} options={datosLinea.options} redraw />
            <Button className="btn btn-4 btn-block mx-auto w-25" onClick={randomize}>Aleatorio</Button>
        </div>
     );
}
 
export default LineaComponent;