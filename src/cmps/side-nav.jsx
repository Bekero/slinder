
import { AuthUser } from './auth-user';
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';

export function SideNav() {

    const { user } = useSelector(state => state.userModule)

    if (!user) return
    return (
        <div className="side-nav">
            <div className="top-side-nav">
                <AuthUser />
            </div>
            <h2>Star List :</h2>
            <ul>
                {user?.starredPeople?.map(person => {
                    { if (!person) return }
                    return <li key={person._id}><h4>{person.name}, {person.age}</h4></li>
                })}
            </ul><br></br>
            <h2>Liked List :</h2>
            <ul>
                {user?.likedPeople?.map(person => {
                    { if (!person) return }
                    return <li key={person._id}><h4>{person.name}, {person.age}</h4></li>
                })}
            </ul><br></br>
            <h2>UnLiked List :</h2>
            <ul>
                {user?.unLikedPeople?.map(person => {
                    { if (!person) return }
                    return <li key={person._id}><h4>{person.name}, {person.age}</h4></li>
                })}
            </ul>
        </div>
    )
}