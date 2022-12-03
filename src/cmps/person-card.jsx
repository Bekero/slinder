

import { useSelector } from 'react-redux'
import HeartSvg from './svg/heart-svg'
import XSvg from './svg/x-svg'
import StarSvg from './svg/star-svg'
import CircleSvg from './svg/circle-svg'
import { Draggable } from "react-beautiful-dnd"
import { useEffect } from 'react'

export function PersonCard({ currPerson, onGoToProfile, modalOpen, onUnLikedPerson, onLikedPerson, onStarPerson, onUnStarPerson }) {

    const { user } = useSelector(state => state.userModule)
    const isStarred = user?.starredPeople?.find(star => star._id === currPerson._id)

    return (
        <>
            <div
                className="details-container"
                style={{ backgroundImage: `url(${currPerson.img})` }}
            >
                <div onClick={() => onGoToProfile()} className="about">
                    <h1>{currPerson.name}, {currPerson.age}</h1>
                    <h4>Calc loc kilometers Away</h4>
                    <ul className="passions-list">
                        {currPerson.passions.map(passion => {
                            return <li key={passion}>{passion}</li>
                        })}
                    </ul>
                </div>
            </div>
            <div className="actions">
                {/* <button>Back</button> */}
                <button className="un-like-person-btn" onClick={() => onUnLikedPerson()}><XSvg /></button>
                {/* <button>Lightning</button> */}
                <button className="like-person-btn" onClick={() => onLikedPerson()}><HeartSvg /></button>
                {isStarred ?
                    <button className="un-star-person" onClick={() => onUnStarPerson()}><XSvg /></button>
                    :
                    <button className="star-person" onClick={() => onStarPerson()}><StarSvg /></button>
                }
            </div>
        </>
    )
}
