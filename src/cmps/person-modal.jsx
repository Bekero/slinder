
import HeartSvg from './svg/heart-svg'
import XSvg from './svg/x-svg'
import StarSvg from './svg/star-svg'
import CircleSvg from './svg/circle-svg'
import { useSelector } from 'react-redux'
import { SlArrowDownCircle } from "react-icons/sl";

export function PersonModal({ currPerson, onGoToProfile, modalOpen, onCloseModal, onUnLikedPerson, onLikedPerson, onStarPerson, onUnStarPerson }) {

    const user = useSelector((state) => state.userModule.user)
    const isStarred = user?.starredPeople?.find(star => star._id === currPerson._id)

    const closeModal = (diff) => {
        onCloseModal(diff)
    }

    return (
        <>
            <div className="details-container" style={{ backgroundImage: `url(${currPerson.img})` }} >
                <div className="circle">
                    <SlArrowDownCircle onClick={() => closeModal()} className="arrow-down-btn" />
                </div>

            </div>
            <div className="new-about">
                <h1>{currPerson.name}, {currPerson.age}</h1>
                <h4>Lives in</h4>
                <h4>Gender</h4>
                <h4>Location</h4>
                <h4>Location</h4>
                <h4>Location</h4>
                <h4>Location</h4>
                <h4>Location</h4>
                <h4>Location</h4>
                <h4>Location</h4>
                <h4>Location</h4>
                <hr />

                <ul className="passions-list">
                    {currPerson.passions.map(passion => {
                        return <li key={passion}>{passion}</li>
                    })}
                </ul>
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
        // <div className="person-modal">
        //     <button onClick={() => closeModal()}>Close</button>
        //     <div className="img-container">
        //         <img src={person.img} alt="" />
        //     </div>
        //     <span className="mark-white">{person.name}, {person.age}</span>
        //     <div>Location Away</div>
        //     <div><span className="mark-white">About</span> <br></br>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, corrupti explicabo. Dolore, nulla quam! Fuga beatae ullam cum quisquam itaque maxime similique necessitatibus impedit illo.</div>
        //     <span className="mark-white">More Photos</span>
        //     <div>You can find {person.name} At : </div>
        // </div>