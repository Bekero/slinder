import { useSelector } from "react-redux";
import { MyCard } from "./my-card";



export function Profile() {

    const { user } = useSelector(state => state.userModule)

    if (!user) return <div>Cannot find user</div>
    return <>
        <div className="card-container-my-profile">
            <div className="swipe">
                {user && <MyCard user={user} />}
                {/* <MyCard /> */}
            </div>
        </div>
    </>

}
