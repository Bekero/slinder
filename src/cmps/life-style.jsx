import { useSelector } from "react-redux";
import { MyCard } from "./my-card";



export function LifeStyle() {

    const { user } = useSelector(state => state.userModule)
    let lifeStyleList = ['Pets', 'Drinking', 'Smoking', 'Workout', 'Social Media']


    const onEditActivity = (ev) => {
        const lifeStyle = ev.target.innerText
        console.log('lifeStyle :', lifeStyle)
    }

    if (!user) return <div>Cannot find user</div>
    return <ul className="life-style-container">
        {lifeStyleList.map(activity => {
            return <li
                onClick={(ev) => onEditActivity(ev)}
                className="activity"
                value={activity}>
                    <p>{activity}</p> <p>🠲</p>
                    </li>
        })}
    </ul>

}
