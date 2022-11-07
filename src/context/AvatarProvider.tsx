import { useReducer } from "react"
import { avatarReducer } from "./AvatarReducer"
import { AvatarContext } from "./AvatarContext"
import { Avatar } from "../interfaces/Interface"
import { cosmeticDefault } from "../helper/images"


const initial_state: any = {
    avatar:{
        nacionality: 'default',
        flag: cosmeticDefault.Arg.image,
        skin: cosmeticDefault.SkinB.image,
        hair: cosmeticDefault.BlackHair.image,
        eyes: cosmeticDefault.BrownEyes.image
    }
}


interface props {
    children: JSX.Element | JSX.Element[]
}

export const AvatarProvider = ({ children }: props) => {

    const [ avatarState, dispatch ] = useReducer(avatarReducer, initial_state)

    const newAvatar = (avatar: Avatar) => {
        dispatch({type: 'addAvatar', payload: avatar})
    }
    return (
        <AvatarContext.Provider value={{
            avatarState,
            newAvatar
        }}>
            {children}
        </AvatarContext.Provider>
    )
}
