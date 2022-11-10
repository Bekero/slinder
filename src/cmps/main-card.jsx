
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addLikedPerson, addUnLikedPerson, addStarredPerson } from '../store/user.actions'
import girlsDemo from '../data/usersDemo.json'
import { userService } from '../services/user.service'

export function MainCard() {

    const dispatch = useDispatch()

    let [idxOfPerson, setIdxOfPerson] = useState(0)
    let [people, setPeople] = useState(null)
    // let [user, setUser] = useState(null)
    const user = useSelector((state) => state.userModule.user)

    useEffect(() => {
        // setUser(userService.getLoggedInUser())
        setPeople(girlsDemo)
    }, [])

    const onLikedPerson = (likedPerson) => {
        dispatch(addLikedPerson(likedPerson))
        setIdxOfPerson(idxOfPerson + 1)
    }

    const onUnLikedPerson = (unLikedPerson) => {
        dispatch(addUnLikedPerson(unLikedPerson))
        setIdxOfPerson(idxOfPerson + 1)
    }

    const onStarPerson = (starredPerson) => {
        dispatch(addStarredPerson(starredPerson))
        // setIdxOfPerson(idxOfPerson + 1)
    }

    if (!people || idxOfPerson === people.length) return <div>Banana</div>
    return (
        <div className="main-card flex">
            
            <div className="main-actions">
                <button>Profile</button>
                <button>Home</button>
                <button>Msgs</button>
            </div>

            <img src={people[idxOfPerson].img} alt="" />
            <h6>{people[idxOfPerson].name}</h6>


            <div className="actions">
                <button>Back</button>
                <button onClick={() => { onUnLikedPerson(people[idxOfPerson]) }}>UnLike</button>
                <button>Lightning</button>
                <button onClick={() => onLikedPerson(people[idxOfPerson])}>Like</button>
                <button onClick={() => onStarPerson(people[idxOfPerson])}>Star</button>
            </div>
        </div >

    )
}