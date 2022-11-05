import { Avatar } from "../interfaces/Interface"
import { AvatarContext } from "./AvatarContext"
import { cosmeticDefault } from "../helper/images"
import { useReducer } from "react"
import { avatarReducer } from "./AvatarReducer"
const initial_state: Avatar = {
    nacionality: 'ARG',
    flag: cosmeticDefault.Arg,
    skin: cosmeticDefault.SkinB,
    hair: cosmeticDefault.BlackHair,
    eyes: cosmeticDefault.BrownEyes
}


interface props {
    children: JSX.Element | JSX.Element[]
}

export const AvatarProvider = ({ children }: props) => {

    const [ avatarState, dispatch] = useReducer(avatarReducer, initial_state)

    return (
        <AvatarContext.Provider value={{
            avatarState
        }}>
            {children}
        </AvatarContext.Provider>
    )
}