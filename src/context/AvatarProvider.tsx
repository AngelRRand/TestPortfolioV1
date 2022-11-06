import { useReducer } from "react"
import { avatarReducer } from "./AvatarReducer"
import { AvatarContext } from "./AvatarContext"
import { Avatar } from "../interfaces/Interface"
import { cosmeticDefault } from "../helper/images"


const initial_state: Avatar = {
    nacionality: 'default',
    flag: cosmeticDefault.Arg,
    skin: cosmeticDefault.SkinB,
    hair: cosmeticDefault.BlackHair,
    eyes: cosmeticDefault.BrownEyes
}


interface props {
    children: JSX.Element | JSX.Element[]
}

export const AvatarProvider = ({ children }: props) => {

    const [ avatarState ] = useReducer(avatarReducer, initial_state)

    return (
        <AvatarContext.Provider value={{
            avatarState
        }}>
            {children}
        </AvatarContext.Provider>
    )
}
