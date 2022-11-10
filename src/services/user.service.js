import {
    storageService
} from '../services/async-storage.service'

const STORAGE_KEY = 'user'
const STORAGE_KEY_LOGGEDIN_USER = "loggedinUser";

export const userService = {
    loadUserDetails,
    getLoggedInUser,
    signup,
    login,
    logout
}

function loadUserDetails() {
    return {
        _id: 1312433,
        likedPeople: [],
        starredPeople: [],
        unLikedPeople: [],
        name: "or beker",
        age: 22,
        gender: "male",
        loc: {
            lag: 33.31,
            lng: 32.34,
            country: '',
            city: '',
        },
        img: "imgLink",
    }
}

function getLoggedInUser() {
    return loadUserDetails()
}


async function signup(userCred) {
    const users = await storageService.query(STORAGE_KEY)
    const user = users.find(user =>
        user.username === userCred.username)
    if (user) return console.log('Username Already Exists')

    const newUser = await storageService.post(STORAGE_KEY, userCred)
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(newUser))
    return newUser

    // const users = await storageService.get('user')
    // const isUser = users?.find((user) => user.username === userCred.username);
    // if (isUser) {
    //     return Promise.reject("username is already taken");
    // }

    // const user = await storageService.post('auth/signup', userCred)
    // return saveLocalUser(user);
}

async function login(userCred) {
    const users = await storageService.query(STORAGE_KEY)
    const user = users.find(user =>
        user.username === userCred.username &&
        user.password === userCred.password)
    if (user) sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

async function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER, null);
    return await storageService.post('auth/logout')
}

function saveLocalUser(user) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user));
    return user;
}