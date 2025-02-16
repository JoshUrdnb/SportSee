import './activity.scss'
import PropTypes from 'prop-types'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`${payload[0].value}`}Kg</p>
                <p className="label-2">{`${payload[1].value}`}Kcal</p>
            </div>
        )
    }
    return null
}

CustomTooltip.propTypes = { active: PropTypes.bool, payload: PropTypes.array }

const Activity = ({ activityData }) => {

    return (
        <section className='activity-container'>
            <p className='activity-title'>Activité quotidienne</p>
            <ResponsiveContainer width="100%" height={280}>
                <BarChart
                    data={activityData.sessions}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    barGap={10}
                    barCategoryGap={15}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis 
                        dataKey="day" 
                        tickFormatter={(day) => day.slice(9)} 
                        tickLine={false} 
                        stroke="#9B9EAC" 
                    />
                    <YAxis 
                        yAxisId="kilogram" 
                        orientation="right" 
                        domain={['dataMin - 2', 'dataMax + 1']} 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{ fill: "#9B9EAC" }} 
                        tickCount={3} 
                    />
                    <YAxis yAxisId="calories" orientation="left" hide tickCount={3} />
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(196, 196, 196, 0.5)" }} />
                    <Legend align="right" verticalAlign="top" iconType="circle" wrapperStyle={{ lineHeight: '24px', fontSize: 14 }} iconSize="10" height={60} />
                    <Bar yAxisId="kilogram" dataKey="kilogram" fill="#282D30" name="Poids (kg)" radius={[10, 10, 0, 0]} barSize={7} />
                    <Bar yAxisId="calories" dataKey="calories" fill="#E60000" name="Calories brûlées (kCal)" radius={[10, 10, 0, 0]} barSize={7} />
                </BarChart>
            </ResponsiveContainer>
        </section>
    )
}

Activity.propTypes = {
    activityData: PropTypes.shape({
        sessions: PropTypes.arrayOf(
            PropTypes.shape({
                day: PropTypes.string.isRequired,
                kilogram: PropTypes.number.isRequired,
                calories: PropTypes.number.isRequired
            })
        ).isRequired
    }).isRequired
}

export default Activity