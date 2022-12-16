
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addLikedPerson, addUnLikedPerson, addStarredPerson, removeStarredPerson } from '../store/user.actions'
import girlsDemo from '../data/usersDemo.json'
import { PersonModal } from './person-modal'
import { PersonCard } from './person-card'
import TinderCard from 'react-tinder-card'
import { useSelector } from 'react-redux'

export function MainCard() {

    const dispatch = useDispatch()

    let [people, setPeople] = useState([])
    let [myProfile, setMyProfile] = useState(null)
    let [idxOfPerson, setIdxOfPerson] = useState(0)
    let [modalOpen, setModalOpen] = useState(null)
    let [currPerson, setCurrPerson] = useState(null)
    const user = useSelector((state) => state.userModule.user)

    const componentDidMount = () => {
    }

    useEffect(() => {
        // setUser(userService.getLoggedInUser())
        setPeople(girlsDemo)
    }, [])

    useEffect(() => {
        if (!people.length) return
        setCurrPerson(people[0])
    }, [people])

    useEffect(() => {
        console.log('modalOpen :', modalOpen)
    }, [modalOpen])

    const onGoToProfile = () => {
        setModalOpen(true)
    }

    const onLikedPerson = (swiped) => {
        console.log('Liked')
        if (checkIfExist(currPerson._id, true)) return
        if (!swiped) {
            let newPeople = people.filter(person => person._id !== currPerson._id)
            setPeople(newPeople)
        }
        changeCurrPersonIdx(currPerson._id)
        dispatch(addLikedPerson(currPerson))
    }

    const onUnLikedPerson = (swiped) => {
        if (checkIfExist(currPerson._id, false)) return
        if (!swiped) {
            let newPeople = people.filter(person => person._id !== currPerson._id)
            setPeople(newPeople)
        }
        changeCurrPersonIdx(currPerson._id)
        dispatch(addUnLikedPerson(currPerson))
    }

    const checkIfExist = (id, isLike) => {
        let isPersonExist = null
        if (isLike) isPersonExist = user.likedPeople.find(person => person._id === id)
        else isPersonExist = user.unLikedPeople.find(person => person._id === id)
        return isPersonExist
    }

    const onStarPerson = () => {
        dispatch(addStarredPerson(currPerson))
    }

    const onUnStarPerson = () => {
        console.log('Cannot unStar anyone except this Shula Zaken')
        dispatch(removeStarredPerson(currPerson))
    }

    const onCloseModal = (diff) => {
        setModalOpen(diff)
    }

    const onSwipe = (direction) => {
        // if (direction === 'right') onLikedPerson(true)
        // else if (direction === 'left') onUnLikedPerson(true)
    }

    const changeCurrPersonIdx = (id) => {
        const idx = people.findIndex(person => person._id === id)
        setCurrPerson(people[idx + 1])
        setModalOpen(false)
    }

    const swipe = (dir, name, index) => {
        // if (dir === 'right') onLikedPerson(true)
        // else if (dir === 'left') onUnLikedPerson(true)
    }

    const outOfFrame = (dir, name, index) => {
        if (!name) return
        if (dir === 'right') onLikedPerson(true)
        else if (dir === 'left') onUnLikedPerson(true)
    }

    if (!currPerson) return <div>no Current Person</div>
    if (!people || people.length === 0) return <div>No People</div>
    return (
        <>
            {
                !modalOpen ?
                    <div className="card-container">
                        {people.map((person, index) => {
                            return <TinderCard
                                onSwipe={(dir) => swipe(dir, person, index)}
                                onCardLeftScreen={(dir) => outOfFrame(dir, person.name, index)}
                                preventSwipe={['up', 'down']}
                                key={person._id}
                                className="swipe"
                            >
                                <PersonCard
                                    key={person._id}
                                    person={person}
                                    currPerson={currPerson}
                                    onGoToProfile={onGoToProfile}
                                    onLikedPerson={onLikedPerson}
                                    onUnLikedPerson={onUnLikedPerson}
                                    onStarPerson={onStarPerson}
                                    onUnStarPerson={onUnStarPerson}
                                />
                            </TinderCard>
                        })}
                    </div>
                    :
                    <div className="modal-container">
                        <div className="swipe">
                            <PersonModal
                                key={currPerson._id}
                                person={currPerson}
                                onCloseModal={onCloseModal}
                                currPerson={currPerson}
                                onGoToProfile={onGoToProfile}
                                onLikedPerson={onLikedPerson}
                                onUnLikedPerson={onUnLikedPerson}
                                onStarPerson={onStarPerson}
                                onUnStarPerson={onUnStarPerson}
                            />
                        </div>
                    </div>
            }
        </>

    )
}