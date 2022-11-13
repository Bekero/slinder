
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addLikedPerson, addUnLikedPerson, addStarredPerson, removeStarredPerson } from '../store/user.actions'
import girlsDemo from '../data/usersDemo.json'
import { userService } from '../services/user.service'
import { PersonModal } from './person-modal'
import { PersonCard } from './person-card'

export function MainCard() {

    const dispatch = useDispatch()

    let [idxOfPerson, setIdxOfPerson] = useState(0)
    let [modalOpen, setModalOpen] = useState(null)
    let [people, setPeople] = useState(null)
    const user = useSelector((state) => state.userModule.user)

    useEffect(() => {
        // setUser(userService.getLoggedInUser())
        setPeople(girlsDemo)
    }, [])

    const onGoToProfile = (person) => {
        setModalOpen(true)
    }

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
    }

    const onCloseModal = (diff) => {
        setModalOpen(diff)
    }

    const onUnStarPerson = (starredPerson) => {
        dispatch(removeStarredPerson(starredPerson))
    }
    if (!people || idxOfPerson === people.length) return <div>Banana</div>
    return (
        <>
            {
                !modalOpen ?
                    <div className="main-card flex">
                        <PersonCard
                            person={people[idxOfPerson]}
                            onGoToProfile={onGoToProfile}
                            onLikedPerson={onLikedPerson}
                            onUnLikedPerson={onUnLikedPerson}
                            onStarPerson={onStarPerson}
                            onUnStarPerson={onUnStarPerson}
                        />
                    </div >
                    :
                    <PersonModal
                        person={people[idxOfPerson]}
                        onCloseModal={onCloseModal}
                    />
            }
        </>

    )
}
            {/* {modalOpen && <PersonModal
            person={people[idxOfPerson]}
            onCloseModal={onCloseModal}
        />} */}
            {/* <div className="main-actions">
            <button onClick={() => onGoToProfile(people[idxOfPerson])}>Profile</button>
                <button>Home</button>
                <button>Msgs</button>
            </div> */}