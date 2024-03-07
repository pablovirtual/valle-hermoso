import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './proyecto/Navbar.js';
import Inicio from './proyecto/Inicio.js';
import Pago from './proyecto/Pago.js';
import Cuenta from './proyecto/Cuenta.js';
import Contactanos from './proyecto/Contacto.js';
import Facebook from './proyecto/Facebook.js';
import Direccion from './proyecto/Direccion.js'
import Email from './proyecto/Email.js'
import './proyecto/style/Estilos.module.css';

function App() {
    return (
        <div className="App">
            <div className="container">
                <div className="col-12 text-center">
                    <BrowserRouter>
                        <Navbar />
                        <Routes>
                            <Route path='/Inicio' element={<Inicio/>}></Route>
                            <Route path='/Pago' element={<Pago/>}></Route>
                            <Route path='/Cuenta' element={<Cuenta/>}></Route>
                            <Route path='/Contactanos' element={<Contactanos/>}></Route>
                            <Route path='/Facebook' element={<Facebook/>}></Route>
                            <Route path='/Direccion' element={<Direccion/>}></Route>
                            <Route path='/Email' element={<Email/>}></Route>
                        </Routes>
                    </BrowserRouter><br></br>
                </div>
            </div>
        </div>
    );
}

export default App;
