import { Outlet } from 'react-router-dom'
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar.jsx'

export default function Layout() {
    return (
        <div>
            <Header />
            <Sidebar />
            <main>
                <Outlet />
            </main>
        </div>
    )
}