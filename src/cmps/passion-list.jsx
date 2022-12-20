import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { addPassion, removePassion } from '../store/user.actions'

export function PassionList() {

    const { user } = useSelector((state) => state.userModule)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    let passionList = [
        'Healthy eating',
        'Walking, hiking, or trekking',
        'Running',
        'Biking',
        'Swimming',
        'Self-defense',
        'Sports',
        'Yoga',
        'Meditation',
        'Self-care',
        'Knowledge',
        'Practicing',
        'Journaling',
        'Wisdom',
        'Personal finance',
        'Business and entrepreneurship',
        'Leadership',
        'Coaching',
        'Training or teaching',
        'Donating',
        'Volunteering',
        'Writing',
        'Painting, sketching',
        'Designing',
        'Creating or Editing',
        'Singing',
        'Dancing',
        'Makeup',
        'Comedy',
        'Photography',
        'Programming',
        'Playing or gaming',
        'Cooking',
        'Gardening',
        'Nature',
        'Travel',
        'Adventure sports',
        'Bike riding',
        'Martial arts',
        'Cardio',
        'Golfing',
        'Bodybuilding',
        'Hiking',
        'Tennis',
        'Basketball',
        'Weight training',
        'Eating healthy',
        'Competing in sports',
        'Quiet time',
        'Time away',
        'Reading',
        'Learning new things',
        'Night with friends',
        'Vacation',
        'Weekend away',
        'Road trip',
    ]

    const onAddPassion = (ev) => {
        const value = ev.target.innerText
        const isExist = user?.passions?.find(passion => passion === value)
        if (isExist) {
            dispatch(removePassion(value))
            return
        }
        if (user?.passions?.length === 5) return
        dispatch(addPassion(value))
    }

    const isPassionExist = (currPassion) => {
        const isExist = user?.passions?.find(passion => passion === currPassion)
        return isExist
    }

    const onGoToProfileEdit = () => {
        navigate('/profile/edit')
    }

    return (
        <div className="my-card-container">
            <div className="swipe">
                <div className="details-container">
                    <div className="title">
                        <p className="edit-title">Edit Passions</p>
                        <p onClick={() => onGoToProfileEdit()} className="done">Done</p>
                    </div>
                    <div className="instructions">
                        <p>Select passions that you’d like to share with the people you connect with. Choose a minimum of 3.</p>
                        <div>
                            <p>PASSIONS</p>
                            <p>{user?.passions?.length}/5</p>
                        </div>
                    </div>
                    <ul className="passion-list">
                        {passionList.map(passion => {
                            return <li
                                key={passion}
                                onClick={(ev) =>
                                onAddPassion(ev)}
                                value={passion}
                                className={isPassionExist(passion) ? 'passion-highlight' : ''}
                            >{passion}</li>
                        })}
                    </ul>
                </div>
            </div>

        </div>
    )
}