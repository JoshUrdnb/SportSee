import './home.scss'
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className='homepage'>
            <Link to="/profile/12">Utilisateur 12</Link>
            <Link to="/profile/18">Utilisateur 18</Link>
        </div>
    )
}