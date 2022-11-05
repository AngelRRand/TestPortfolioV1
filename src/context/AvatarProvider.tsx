import { Avatar } from "../interfaces/Interface"
import { AvatarContext } from "./AvatarContext"
import { cosmeticDefault } from "../helper/images"
const initial_state: Avatar = {
    avatar: {
        Nacionality: 'ARG',
        Flag: cosmeticDefault.Arg,
        Skin: cosmeticDefault.SkinB,
        Hair: cosmeticDefault.BlackHair,
        Eyes: cosmeticDefault.BrownEyes
    }
}


interface props {
    children:JSX.Element | JSX.Element[]
}

export const AvatarProvider = ({ children }:props) => {
  return (
    <AvatarContext.Provider value={{}}>
        {children}
    </AvatarContext.Provider>
  )
}
