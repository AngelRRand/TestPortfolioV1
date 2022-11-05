import { Avatar } from "../interfaces/Interface"
import { AvatarContext } from "./AvatarContext"
import { cosmeticDefault } from "../helper/images"
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
    return (
        <AvatarContext.Provider value={{}}>
            {children}
        </AvatarContext.Provider>
    )
}
