

import { useSelector } from 'react-redux'

export function PersonCard({ person, onGoToProfile, onUnLikedPerson, onLikedPerson, onStarPerson, onUnStarPerson }) {

    const { user } = useSelector(state => state.userModule)
    const isStarred = user?.starredPeople?.find(star => star._id === person._id)
    console.log('isStarred :', isStarred)
    
    return (
        <>
            <div>
                <img onClick={() => onGoToProfile(person)} src={person.img} alt="" />
                <h6>{person.name}</h6>
            </div>
            <div className="actions">
                {/* <button>Back</button> */}
                <button onClick={() => { onUnLikedPerson(person) }}>UnLike</button>
                {/* <button>Lightning</button> */}
                <button onClick={() => onLikedPerson(person)}>Like</button>
                {isStarred ?
                    <button onClick={() => onUnStarPerson(person)}>Remove star</button>
                    :
                    <button onClick={() => onStarPerson(person)}>Star</button>}

            </div>
        </>
    )
}