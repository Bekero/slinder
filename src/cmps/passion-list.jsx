import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addPassion, removePassion } from '../store/user.actions'

export function PassionList() {

    const [credentials, setCredentials] = useState([]);
    const { user } = useSelector((state) => state.userModule)
    const dispatch = useDispatch()
    useEffect(() => {
        console.log('user :', user)
    }, [])

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
        const isExist = credentials.find(passion => passion === value)
        if (isExist) {
            const newPassions = credentials.filter(passion => passion !== value)
            // setCredentials(newPassions)
            dispatch(removePassion(value))
            return
        }
        if (credentials.length === 5) return
        dispatch(addPassion(value))
        // setCredentials(credentials => [...credentials, value])
    }

    const isPassionExist = (currPassion) => {
        let isExist = credentials.find(passion => passion === currPassion)
        console.log('isExist :', isExist)
        return isExist
    }

    return (
        <div className="my-card-container">
            <div className="swipe">
                <div className="details-container">
                    <div>
                        <p>Edit Passions</p>
                    </div>
                    <p>Select passions that you’d like to share with the people you connect with. Choose a minimum of 3.</p>
                    <h3>PASSIONS  {credentials.length}/5</h3>
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