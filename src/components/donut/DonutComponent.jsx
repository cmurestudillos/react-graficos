import { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import Button from 'react-bootstrap/Button';
import datosDonut from './ConfiguracionDonut';

const DonutComponent = () => {
    const [datos, setDatos] = useState(datosDonut);

    useEffect(() => {
        if(datos !== datosDonut){
            setDatos(datosDonut);
        }
    }, [datos]);

    const randomize = () => {
        const datosGrafica = datos.datasets[0];
        for (let i = 0; i < datosGrafica.data.length; i++) {
            datosGrafica.data[i] = generateNumber(i);
            setDatos(datos.datasets[0].data[i] + datosGrafica)
        }  
    };   

    const generateNumber = (i) => {
        return Math.round(Math.random() * (100));
    };  

    return ( 
        <div className="container">
            <h3 className="m-3">Grafico de Donut</h3>
            <hr></hr>
            <Doughnut id="doughnut-chart" width={400} height={400} data={datosDonut} options={datosDonut.options} redraw />
            <Button className="btn btn-4 btn-block mx-auto w-25" onClick={randomize}>Aleatorio</Button>                
        </div>
     );
}
 
export default DonutComponent;