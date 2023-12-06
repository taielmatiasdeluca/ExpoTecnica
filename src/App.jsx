import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import { WavyContainer, WavyLink } from "react-wavy-transitions";
import { Galeria } from "./assets/componentes/Galeria";
import Expo from "./assets/componentes/Expo";
import { Footer } from "./assets/componentes/footer/footer";
import '../src/assets/componentes/header/header.css'
import logoExpo from '../src/assets/imgs/logoexpoblanco.svg'
import logotexto from '../src/assets/imgs/logoexpotextoblanco.svg'


function App() {
  return (
    <BrowserRouter>
      <WavyContainer />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <header>
                <div>
                <WavyLink to="/" color="#3586ff">
                  <img className="hover animado" src={logoExpo} alt="" height={45} to="/expotecnica23"/>
                  </WavyLink>
                  <img className="hover ocultomobile" src={logotexto} alt="" height={30} />
                </div>
                <nav className='unica link'>
                  <WavyLink to="/" color="#3586ff">
                    <div className="link">Proyectos</div>
                  </WavyLink>
                  <WavyLink direction="up" to="/galeria" color="#3586ff">
                    <div className="link">Galería</div>
                  </WavyLink>
                  {/* <WavyLink duration={1000} to="/contact" color="#2f44fd">
                    Contact
                  </WavyLink> */}
                </nav>
                <div className="fecha unica white ocultomobile">
                  28.10.23 | 10hs a 16hs
                </div>
              </header>
              <Outlet />
              <Footer />
            </>
          }
        >
          <Route index path="/" element={<Expo />} />
          <Route path="galeria" element={<Galeria />} />
          <Route path="pimba" element={<Expo />} />
          <Route path="*" element={<div className="container unica"><br /><h2><center>404 - LA RUTA DESEADA NO ESTÁ DISPONIBLE <br /> <WavyLink to="/" color="#3586ff">
                    <div className="link">Volver</div>
                  </WavyLink></center></h2></div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;