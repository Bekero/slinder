
import { AuthUser } from './auth-user';
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';

export function SideNav() {

    const { user } = useSelector(state => state.userModule)

    return (
        <div className="side-nav">
            <AuthUser />
            <h2>Star List :</h2>
            <ul>
                {user.starredPeople.map(person => {
                    return <li key={person._id}><h4>{person.name}, {person.age}</h4></li>
                })}
            </ul>
        </div>
    )
}