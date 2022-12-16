import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
export function MyCard({ user }) {

    // const { user } = useSelector(state => state.userModule)
    const [personalCard, setPersonalCard] = useState(null)
    const navigate = useNavigate();

    const path = window.location.pathname
    const params = useParams()


    useEffect(() => {
        console.log('path :', path)
        console.log('params :', params)
    }, [])


    useEffect(() => {
        setPersonalCard(user)
        console.log('personalCard :', personalCard)
    }, [])

    const onGoToEditInfo = () => {
        navigate('/profile/edit')
    }

    if (!personalCard) return <div>You must login to enter</div>
    return (
        <>
            {/* <div className="swipe"> */}

            <div
                className="details-container"
                style={{ backgroundImage: `url(${personalCard?.img})` }}
            >
                <div className="about">
                    <h1>{personalCard?.username}, {personalCard?.age}</h1>
                    <p>{personalCard.description}</p>
                    <div className="button-container">
                        <button onClick={() => onGoToEditInfo()}>Edit Info</button>
                    </div>
                    {/* <ul className="passions-list">
                            {personalCard?.passions?.map(passion => {
                                return <li key={passion}>{passion}</li>
                            })}
                        </ul> */}
                </div>
            </div>
            {/* </div> */}
            {/* </> */}
        </>
    )
}
