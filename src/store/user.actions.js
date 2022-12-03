import {
    userService
} from '../services/user.service'

export function addLikedPerson(likedPerson) {
    return (dispatch) => {
        try {
            const action = {
                type: 'ADD_LIKED_PERSON',
                likedPerson
            }
            dispatch(action)
        } catch (err) {
            console.log('Cannot Like Person :', err)
        }
    }
}

export function addUnLikedPerson(unLikedPerson) {
    return (dispatch) => {
        try {
            const action = {
                type: 'ADD_UN_LIKED_PERSON',
                unLikedPerson
            }
            dispatch(action)
        } catch (err) {
            console.log('Cannot Unlike Person :', err)
        }
    }
}

export function addStarredPerson(starredPerson) {
    return (dispatch, getState) => {
        try {
            const {
                starredPeople
            } = getState().userModule.user
            const res = starredPeople?.find(person => person._id === starredPerson._id)
            if (res) return
            const action = {
                type: 'ADD_STARRED_PERSON',
                starredPerson
            }
            dispatch(action)
        } catch (err) {
            console.log('Cannot Like Person :', err)
        }
    }
}

export function removeStarredPerson(starredPerson) {
    return (dispatch, getState) => {
        try {
            const {
                starredPeople
            } = getState().userModule.user
            console.log('starredPeople :', starredPeople)
            const idx = starredPeople?.findIndex(person => person._id === starredPerson._id)
            const newStarredPeople = structuredClone(starredPeople.filter(person => person._id !== starredPerson._id))
            const action = {
                type: 'REMOVE_STARRED_PERSON',
                newStarredPeople
            }
            dispatch(action)
        } catch (err) {
            console.log('Cannot Like Person :', err)
        }
    }
}

export function loadUsers() {
    return async dispatch => {
        try {
            dispatch({
                type: 'LOADING_START'
            })
            const users = await userService.getUsers()
            dispatch({
                type: 'SET_USERS',
                users
            })
        } catch (err) {
            console.log('UserActions: err in loadUsers', err)
        } finally {
            dispatch({
                type: 'LOADING_DONE'
            })
        }
    }
}

export function removeUser(userId) {
    return async dispatch => {
        try {
            await userService.remove(userId)
            dispatch({
                type: 'REMOVE_USER',
                userId
            })
        } catch (err) {
            console.log('UserActions: err in removeUser', err)
        }
    }
}

export function onLogin(credentials) {
    return async (dispatch) => {
        try {
            const user = await userService.login(credentials)
            dispatch({
                type: 'SET_USER',
                user
            })
        } catch (err) {
            // showErrorMsg('Cannot login')
            console.log('Cannot login', err)
            throw err
        }
    }
}

export function onLogout() {
    return async (dispatch) => {
        try {
            await userService.logout()
            dispatch({
                type: 'SET_USER',
                user: null
            })
        } catch (err) {
            console.log('Cannot logout', err)
        }
    }
}

export function onSignup(credentials) {
    return async (dispatch) => {
        try {
            const user = await userService.signup(credentials)
            console.log('user :', user)
            dispatch({
                type: 'SET_USER',
                user
            })
        } catch (err) {
            // showErrorMsg('Cannot signup')
            console.log('Cannot signup', err)
        }

    }
}