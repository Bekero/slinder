

import { useSelector } from 'react-redux'
import HeartSvg from './svg/heart-svg'
import XSvg from './svg/x-svg'
import StarSvg from './svg/star-svg'
import { Draggable } from "react-beautiful-dnd"
import { useEffect } from 'react'

export function PersonCard({ person, setCurrPerson, onGoToProfile, onUnLikedPerson, onLikedPerson, onStarPerson, onUnStarPerson }) {

    const { user } = useSelector(state => state.userModule)
    const isStarred = user?.starredPeople?.find(star => star._id === person._id)

    useEffect(() => {
        // if(!person) {
            // setCurrPerson(person)
        // }
    }, [])

    return (
        <>
            <div
                className="details-container"
                style={{ backgroundImage: `url(${person.img})` }}
            >
                {/* <div style={{backgroundImage: `url(${person.img})`}} className="details-container"> */}
                {/* <img onClick={() => onGoToProfile(person)} src={person.img} alt="" /> */}
                <div className="about">
                    <h1>{person.name}, {person.age}</h1>
                    <h4>Calc loc kilometers Away</h4>
                    <ul className="passions-list">
                        {person.passions.map(passion => {
                            return <li key={passion}>{passion}</li>
                        })}
                    </ul>
                </div>
            </div>
            <div className="actions">
                {/* <button>Back</button> */}
                <button className="un-like-person-btn" onClick={() => onUnLikedPerson(person)}><XSvg /></button>
                {/* <button>Lightning</button> */}
                <button className="like-person-btn" onClick={() => onLikedPerson()}><HeartSvg /></button>
                {isStarred ?
                    <button className="un-star-person" onClick={() => onUnStarPerson()}>Remove star</button>
                    :
                    <button className="star-person" onClick={() => onStarPerson()}><StarSvg /></button>}
            </div>
        </>
    )
}