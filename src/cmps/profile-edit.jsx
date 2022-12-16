import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useForm } from "../hooks/useForm"
import { useNavigate } from "react-router-dom"

export function ProfileEdit() {

    const { user } = useSelector(state => state.userModule)

    const [newDetails, handleChange, setDetails] = useForm({
        description: '',
    })
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const onSaveDetails = async (ev) => {
        console.log('newDetails :', newDetails)
        // ev.preventDefault()
        // await dispatch(updateStation({ ...newStation }))
        // onEditStation(newStation)
        // // await dispatch(updateStation(newStation))
        // updateLocalStation(newStation)
    }

    const onGoAddPassions = () => {
        console.log('Adding passions ')
        navigate('/profile/edit/passions')
    }

    return (
        <div className="edit-container">

            <div className="swipe">
                <div className="details-container">
                    <div className="about">
                        <h1>{user?.username}, {user?.age}</h1>
                        <h3>About {user?.username}</h3>
                        <textarea
                            name="description"
                            value={user?.description}
                            id="" cols="30" rows="10"
                            onChange={handleChange}
                        ></textarea>

                        <h2>* Passions</h2>
                        <div onClick={() => onGoAddPassions()}>Add Passions</div>
                    </div>
                </div>
            </div>
        </div>
    )
}