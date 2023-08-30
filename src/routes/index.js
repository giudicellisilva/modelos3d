import Modelo from "components/Modelo";
import Home from "pages/Home";
import OsteologiaEquina from "pages/OsteologiaEquina";
import EsqueletoAxial from "pages/OsteologiaEquina/EsqueletoAxial";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="osteologia-equina" element={<OsteologiaEquina />}></Route>
                <Route path="osteologia-equina/esqueleto-axial" element={<EsqueletoAxial />} />
                <Route path="osteologia-equina/esqueleto-axial/:id" element={<Modelo />}></Route>
                {/* <Route path="osteologia-equina/esqueleto-axial/cranio" element={<Cranio />}></Route>
                <Route path="osteologia-equina/esqueleto-axial/mandibula" element={<Mandibula />}></Route>
                <Route path="osteologia-equina/esqueleto-axial/Atlas" element={<Atlas />}></Route> */}
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;