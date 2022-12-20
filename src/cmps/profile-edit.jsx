import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useForm } from "../hooks/useForm"
import { useNavigate } from "react-router-dom"
import { LifeStyle } from "./life-style"

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
                <h5 className="title-container">Edit</h5>
                <div className="details-container">
                    <div className="about">
                        <h3  className="edit-title">ABOUT {user?.username}</h3>
                        <textarea
                            name="description"
                            value={user?.description}
                            id="" 
                            cols="30" 
                            rows="10"
                            maxlength="250"
                            onChange={handleChange}
                        ></textarea>

                        <div className="edit-title">PASSIONS</div>
                        <div 
                        className="add-passions" 
                        onClick={() => onGoAddPassions()}><p>Add Passions</p> <p>➡</p>
                        </div>
                        <div className="edit-title">LIFESTYLE</div>
                        <div><LifeStyle /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}