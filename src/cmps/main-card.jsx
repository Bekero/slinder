
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

    let [idxOfPerson, setIdxOfPerson] = useState(0)
    let [modalOpen, setModalOpen] = useState(null)
    let [currPerson, setCurrPerson] = useState(null)
    let [people, setPeople] = useState([])
    const user = useSelector((state) => state.userModule.user)

    useEffect(() => {
        // setUser(userService.getLoggedInUser())
        setPeople(girlsDemo)
    }, [])

    useEffect(() => {
        if (!currPerson) {
            setCurrPerson(people[0])
            console.log('currPerson :', currPerson)
        }
    }, [people])

    const onGoToProfile = (person) => {
        setModalOpen(true)
    }

    const onLikedPerson = (swiped) => {
        console.log('currPerson :', currPerson)
        if (checkIfExist(currPerson._id, true)) return
        if (!swiped) {
            const idx = people.findIndex(person => person._id === currPerson._id)
            let newPeople = people.splice(idx, 1)
            setPeople(newPeople)
        }
        // changeCurrPersonIdx(currPerson._id)
        dispatch(addLikedPerson(currPerson))
    }

    const onUnLikedPerson = (swiped) => {
        if (checkIfExist(currPerson._id, false)) return
        if (!swiped) {
            const idx = people.findIndex(person => person._id === currPerson._id)
            setPeople(people.splice(idx, 1))
        }
        // changeCurrPersonIdx(currPerson._id)
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

    const onCloseModal = (diff) => {
        setModalOpen(diff)
    }

    const onSwipe = (direction) => {
        // if (direction === 'right') onLikedPerson(true)
        // else if (direction === 'left') onUnLikedPerson(true)
    }

    const onUnStarPerson = () => {
        dispatch(removeStarredPerson(currPerson))
    }

    const changeCurrPersonIdx = (id) => {
        console.log('id :', id)
        const idx = people.findIndex(person => {
            console.log('person :', person)
            return person._id === id
        })
        console.log('people[idx + 1] :', people[idx + 1])
        console.log('idx :', idx)
        setCurrPerson(people[idx + 1])
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

    if (!people || people.length === 0) return <div>Banana</div>
    return (
        <>
            {
                !modalOpen ?
                    <div className="card-container">
                        {people.map((person, index) => {
                            return <TinderCard
                                // onSwipe={onSwipe}
                                onSwipe={(dir) => swipe(dir, person, index)}
                                onCardLeftScreen={(dir) => outOfFrame(dir, person.name, index)}
                                preventSwipe={['up', 'down']}
                                key={person._id}
                                className="swipe"
                            >
                                <PersonCard
                                    key={person._id}
                                    person={person}
                                    // setCurrPerson={setCurrPerson}
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
                    <PersonModal
                        person={people[idxOfPerson]}
                        onCloseModal={onCloseModal}
                    />
            }
        </>

    )
}
