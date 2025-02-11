import './profile.scss'
import User from '../../components/user/User'
import Stats from '../../components/stats/Stats'
import Objective from '../../components/objective/Objective'
import Activity from '../../components/activity/Activity'
import Average from '../../components/average/Average'
import Performance from '../../components/performance/Performance'

export default function Profile() {
    return (
        <div className='profile'>
            <div className='user'>
                <User />
            </div>
            <div className='activity'>
                <Activity />
            </div>
            <div className='details'>
                <Average />
                <Performance />
                <Objective />
            </div>
            <div className='sidebar-user'>
                <Stats />
            </div>
        </div>
    )
}