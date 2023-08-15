import Home from "pages/Home";
import OsteologiaEquina from "pages/OsteologiaEquina";
import EsqueletoAxial from "pages/OsteologiaEquina/EsqueletoAxial";
import Cranio from "pages/OsteologiaEquina/EsqueletoAxial/Cranio";
import Mandibula from "pages/OsteologiaEquina/EsqueletoAxial/Mandibula";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="osteologia-equina" element={<OsteologiaEquina />}></Route>
                <Route path="osteologia-equina/esqueleto-axial" element={<EsqueletoAxial />} />
                <Route path="osteologia-equina/esqueleto-axial/cranio" element={<Cranio />}></Route>
                <Route path="osteologia-equina/esqueleto-axial/mandibula" element={<Mandibula />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;