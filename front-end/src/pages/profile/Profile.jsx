import './profile.scss'
import Stats from '../../components/stats/Stats'
import Activity from '../../components/activity/Activity'
import Average from '../../components/average/Average'
import Performance from '../../components/performance/Performance'

export default function Profile() {
    return (
        <div className='profile'>
            <Stats />
            <Activity />
            <Average />
            <Performance />
        </div>
    )
}