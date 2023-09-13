import Modelo from "components/Modelo";
import Home from "pages/Home";
import OsteologiaEquina from "pages/OsteologiaEquina";
import EsqueletoApendicularPelvico from "pages/OsteologiaEquina/EsqueletoApendicularPelvico";
import EsqueletoApendicularToracico from "pages/OsteologiaEquina/EsqueletoApendicularToracico";
import EsqueletoAxial from "pages/OsteologiaEquina/EsqueletoAxial";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="osteologia-equina" element={<OsteologiaEquina />}></Route>
                <Route path="osteologia-equina/esqueleto-axial" element={<EsqueletoAxial />} />
                <Route path="osteologia-equina/esqueleto-apendicular-toracico" element={<EsqueletoApendicularToracico />} />
                <Route path="osteologia-equina/esqueleto-apendicular-pelvico" element={<EsqueletoApendicularPelvico />} />
                <Route path="osteologia-equina/esqueleto-axial/:id" element={<Modelo />}></Route>
                <Route path="osteologia-equina/esqueleto-apendicular-toracico/:id" element={<Modelo />}></Route>
                <Route path="osteologia-equina/esqueleto-apendicular-pelvico/:id" element={<Modelo />}></Route>
                {/* <Route path="osteologia-equina/esqueleto-axial/cranio" element={<Cranio />}></Route>
                <Route path="osteologia-equina/esqueleto-axial/mandibula" element={<Mandibula />}></Route>
                <Route path="osteologia-equina/esqueleto-axial/Atlas" element={<Atlas />}></Route> */}
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;