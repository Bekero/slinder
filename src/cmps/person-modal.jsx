


export function PersonModal({ person, onCloseModal }) {

    const closeModal = (diff) => {
        onCloseModal(diff)
    }
    return (
        <div className="person-modal">
            <button onClick={() => closeModal()}>Close</button>
            <div className="img-container">
                <img src={person.img} alt="" />
            </div>
            <span className="mark-white">{person.name}, {person.age}</span>
            <div>Location Away</div>
            <div><span className="mark-white">About</span> <br></br>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, corrupti explicabo. Dolore, nulla quam! Fuga beatae ullam cum quisquam itaque maxime similique necessitatibus impedit illo.</div>
            <span className="mark-white">More Photos</span>
            <div>You can find {person.name} At : </div>
        </div>
    )
}