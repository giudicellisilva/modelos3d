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
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;