import { Outlet } from 'react-router-dom'
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar.jsx'

export default function Layout() {
    return (
        <div className="layout">
            <Header />
            <div className="layout-main">
                <Sidebar />
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}