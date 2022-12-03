import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Signup } from "../cmps/signup";
import { userService } from "../services/user.service";
import { onLogin, onSignup } from "../store/user.actions";
import { uploadService } from "../services/upload.service";

export const LoginSignup = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    fullname: "",
    gender: "",
    lookingFor: "",
    age: "",
    isAboveAge: null,
    description: "",
    country: "",
    likedPeople: [],
    starredPeople: [],
    unLikedPeople: [],
    img: ""

  });
  const [isSignup, setIsSignup] = useState(false);
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onGoBack = () => {
    navigate("/")
  }

  const getUsers = () => {
    // const users = userService.getUsers();
    // setUsers(users);
  };

  const clearState = () => {
    setCredentials({ username: "", password: "", fullname: "", age: 0, description: "" });
    setIsSignup(false);
  };

  const handleChange = (ev) => {
    const field = ev.target.name;
    const value = ev.target.value;
    if (field === 'age') {
      // submitBday(value)
      console.log(' ((Date.now() - +new Date(value)) / (31557600000)) > 18 :', ((Date.now() - +new Date(value)) / (31557600000)) > 18)
      setCredentials(credentials.isAboveAge = ((Date.now() - +new Date(value)) / (31557600000)) > 18)
      console.log('credentials :', credentials)
    }
    setCredentials({ ...credentials, [field]: value });
  };

  const login = async (ev) => {
    ev.preventDefault()
    ev.stopPropagation()
    if (!credentials.username) return;
    try {
      await dispatch(onLogin(credentials));
      navigate("/");
      console.log("success");
    } catch (err) {
      console.log("errorrrr", err);
    }
    clearState();
  };

  const signup = async (ev) => {
    ev.preventDefault()
    ev.stopPropagation()
    if (!credentials.username || !credentials.password || !credentials.fullname)
      return;
    console.log('credentials :', credentials)
    try {
      await dispatch(onSignup(credentials));
      navigate("/");
      console.log("success");
    } catch (err) {
      console.log("errorrrr", err);
    }
    clearState();
  };

  const toggleSignup = () => {
    setIsSignup(!isSignup);
  };

  const submitBday = (val) => {
    // var Bday = +new Date(val);
    val = ~~((Date.now() - +new Date(val)) / (31557600000))
    console.log('val :', val)
    return val
  }

  const onUploadImg = async (ev) => {
    if (!ev.target.value) return
    const { url } = await uploadService.uploadImg(ev)
    credentials.img = url
    console.log('credentials :', credentials)
    // const newStation = { ...station, createdBy: { ...station.createdBy, imgUrl: url } }
    // await dispatch(updateStation(newStation))
    // updateLocalStation(newStation)
  }

  let diffSubmit = isSignup ? 'signup' : 'login'

  // return (
  //   <div className='login-page'>
  //     <button onClick={() => onGoBack()}>Back</button>
  //     <div className='login-container'>
  //       <div className='login-signup'>
  //         <p>
  //           <button className='btn-link' onClick={toggleSignup}>
  //             {!isSignup ? "Create a new user" : "Already have a user"}
  //           </button>
  //         </p>
  //         <h1>Slinder</h1>
  //         <h2>Login to continue.</h2>
  //         {!isSignup && (
  //           <form className='login-form' onSubmit={diffLogin}>
  //             <input
  //               type='text'
  //               name='username'
  //               value={credentials.username}
  //               placeholder='Username'
  //               onChange={handleChange}
  //               required
  //               autoFocus
  //             />
  //             <input
  //               type='password'
  //               name='password'
  //               value={credentials.password}
  //               placeholder='Password'
  //               onChange={handleChange}
  //               required
  //             />
  //             <button>Login!</button>
  //           </form>
  //         )}
  //         {isSignup && (
  //           <form className='signup-form' onSubmit={diffLogin}>
  //             <input
  //               type='text'
  //               name='fullname'
  //               value={credentials.fullname}
  //               placeholder='Fullname'
  //               onChange={handleChange}
  //               required
  //             />
  //             <input
  //               type='text'
  //               name='username'
  //               value={credentials.username}
  //               placeholder='Username'
  //               onChange={handleChange}
  //               required
  //             />
  //             <input
  //               type='password'
  //               name='password'
  //               value={credentials.password}
  //               placeholder='Password'
  //               onChange={handleChange}
  //               required
  //             />
  //             <button>Sign Up!</button>
  //           </form>
  //         )}
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div className='login-page'>
      <button onClick={() => onGoBack()}>Back</button>
      <div className='login-container'>
        <div className='login-signup'>
          <p>
            <button className='btn-link' onClick={toggleSignup}>
              {!isSignup ? "Create a new user" : "Already have a user"}
            </button>
          </p>
          <h1>Slinder</h1>
          {isSignup ? <h2>Signup to continue.</h2> : <h2>Login to continue.</h2>}

          <form className={isSignup ? 'signup-form' : 'login-form'} onSubmit={isSignup ? signup : login}>
            <input
              type='text'
              name='username'
              value={credentials.username}
              placeholder='Username'
              onChange={handleChange}
              required
            />
            <input
              type='password'
              name='password'
              value={credentials.password}
              placeholder='Password'
              onChange={handleChange}
              required
            />
            {isSignup && <Signup
              credentials={credentials}
              handleChange={handleChange}
              onUploadImg={onUploadImg}
            />
            }
            {isSignup ? <button>Sign Up!</button> : <button>Login!</button>}
          </form>

        </div>
      </div>
    </div>
  );
};
