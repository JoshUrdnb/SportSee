import './profile.scss'
import Stats from '../../components/stats/Stats'
import Activity from '../../components/activity/Activity'
import Average from '../../components/average/Average'
import Performance from '../../components/performance/Performance'

export default function Profile() {
    return (
        <div className='profile'>
                <div className='profile-main'>
                    <div className='activity'>
                        <Activity />
                    </div>
                    <div className='details'>
                        <Average />
                        <Performance />
                    </div>
                </div>
                <div className='profile-sidebar'>
                    <Stats />
                </div>
        </div>
    )
}