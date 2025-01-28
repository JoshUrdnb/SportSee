import './profile.scss'
import Stats from '../../components/stats/Stats'
import Activity from '../../components/activity/Activity'

export default function Profile() {
    return (
        <div className='profile'>
            <Stats />
            <Activity />
        </div>
    )
}