import {Component} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavbarComponent from '../components/shared/navbar/NavbarComponent.jsx';
import FooterComponent from "../components/shared/footer/FooterComponent.jsx";
import LineaComponent from '../components/linea/LineaComponent.jsx';
import BarraComponent from '../components/barra/BarraComponent.jsx';
import DonutComponent from '../components/donut/DonutComponent.jsx';
import RadarComponent from '../components/radar/RadarComponent.jsx';

class Router extends Component{
    render(){
        return(
            <BrowserRouter>
                <NavbarComponent />
                <Routes>
                    <Route exact path="/" element={<LineaComponent/>} />
                    <Route exact path="/linea" element={<LineaComponent/>} />
                    <Route exact path="/barra" element={<BarraComponent/>} />
                    <Route exact path="/donut" element={<DonutComponent/>} />
                    <Route exact path="/radar" element={<RadarComponent/>} />
                </Routes>
                <FooterComponent />
            </BrowserRouter>
        );
    }
}

export default Router;