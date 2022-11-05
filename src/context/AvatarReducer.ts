import { Avatar } from "../interfaces/Interface"

type AvatarActions = 
    | { type: 'addAvatar', payload:Avatar  }



export const avatarReducer = (state:Avatar, action:AvatarActions) => {
    switch(action.type){
        case 'addAvatar':
            return{
                ...state,
                avatar: action.payload
            }
        
            default:
                return state
    }
}