import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./layout/Layout.jsx"
import Home from "./pages/home/Home.jsx"
// import './styles/App.scss'

const AppRoutes = () => (

    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
            </Route>
        </Routes>
    </BrowserRouter>
)

export default AppRoutes