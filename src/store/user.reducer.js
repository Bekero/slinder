import {
    userService
} from '../services/user.service.js'
import {
    addLikedPerson
} from './user.actions.js';

const initialState = {
    user: userService.getLoggedInUser(),
    users: [],
}

export function userReducer(state = initialState, action) {
    let newState = state

    switch (action.type) {
        case 'SET_USER':
            newState = {
                ...state,
                user: action.user
            }
            break;

        case 'ADD_LIKED_PERSON':
            newState = {
                ...state,
                user: {
                    ...state.user,
                    likedPeople: [...state.user.likedPeople, action.likedPerson]
                },
            }
            break;

        case 'ADD_UN_LIKED_PERSON':
            newState = {
                ...state,
                user: {
                    ...state.user,
                    unLikedPeople: [...state.user.unLikedPeople, action.unLikedPerson]
                },
            }
            break;

        case 'ADD_STARRED_PERSON':
            newState = {
                ...state,
                user: {
                    ...state.user,
                    starredPeople: [...state.user.starredPeople, action.starredPerson]
                }
            }
            break;
            
        case 'REMOVE_STARRED_PERSON':
            console.log('newState.user.starredPeople :', newState.user.starredPeople)
            newState = {
                ...state,
                user: {
                    ...state.user,
                    starredPeople: action.newStarredPeople
                },
            }
            console.log('newState.user.starredPeople :', newState.user.starredPeople)
            break;
        default:
    }
    return newState;
}