import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./layout/Layout.jsx"
import Home from "./pages/home/Home.jsx"
import Profile from "./pages/profile/Profile.jsx"
import Settings from "./pages/settings/Settings.jsx"
import Community from "./pages/community/Community.jsx"
// import './styles/App.scss'

const AppRoutes = () => (

    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route path="/home" element={<Home />} />
                <Route path="/profile/:userId" element={<Profile />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/community" element={<Community />} />
            </Route>
        </Routes>
    </BrowserRouter>
)

export default AppRoutes