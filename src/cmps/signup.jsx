import { AllCountries } from "./countries";
import uploadImgSvg from '../cmps/svg/upload-img'
import { useEffect, useState } from "react";

export function Signup({ credentials, handleChange, onUploadImg, }) {

    const [imgLink, setImgLink] = useState(null)
    useEffect(() => {
        setImgLink(credentials.img)
    }, [onUploadImg])

    const removeImg = () => {
        setImgLink(null)
        console.log('imgLink :', imgLink)
    }

    return (
        <>
            <input
                type='text'
                name='fullname'
                value={credentials.fullname}
                placeholder='Fullname'
                onChange={handleChange}
                required
            />
            <label htmlFor="gender">Whats your gender? &nbsp;
                <select onChange={handleChange} name="gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </label>
            <label htmlFor="lookingFor">I want to see &nbsp;
                <select onChange={handleChange} name="lookingFor">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="both">Both</option>
                </select>
            </label>
            {/* <uploadImgSvg /> */}
            <div className="img-container">
                {
                    imgLink ?
                        <div className="curr-img">
                            <div onClick={() => removeImg()} className="remove-img">
                                X
                            </div>
                            <img src={credentials.img} alt="" />
                            <div className="choose-another-img">
                                <label>
                                    <input type="file" onInput={onUploadImg} />
                                    <p>
                                        Choose new image...
                                    </p>
                                </label>
                            </div>
                        </div>
                        :
                        <div className="no-img">
                            <p>
                                Upload image
                            </p>
                            <label>
                                <input type="file" onInput={onUploadImg} />
                            </label>
                        </div>
                }
            </div>
            <input
                type='date'
                name='age'
                value={credentials.age}
                placeholder='Whats your age?'
                // onSubmit={() => submitBday()}
                onChange={handleChange}
                // required
            />
            <p>{credentials.age}</p>
            <AllCountries handleChange={handleChange} /><br></br>
            <textarea
                style={{ resize: "none" }}
                className="text-area-description"
                placeholder="Little bit about you..."
                name="description"
                onChange={handleChange}
                cols="30"
                rows="10"></textarea>
        </>
    )
}
