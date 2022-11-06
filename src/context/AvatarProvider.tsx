import { useReducer } from "react"
import { avatarReducer } from "./AvatarReducer"
import { AvatarContext } from "./AvatarContext"
import { Avatar } from "../interfaces/Interface"
import { cosmeticDefault } from "../helper/images"


const initial_state: Avatar = {
    nacionality: 'default',
    flag: cosmeticDefault.Arg.image,
    skin: cosmeticDefault.SkinB.image,
    hair: cosmeticDefault.BlackHair.image,
    eyes: cosmeticDefault.BrownEyes.image
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
