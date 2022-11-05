import { Avatar } from "../interfaces/Interface"
import { AvatarContext } from "./AvatarContext"
import { cosmeticDefault } from "../helper/images"
const initial_state: Avatar = {
    avatar: {
        Nacionality: 'ARG',
        Body: cosmeticDefault.Arg,
        Hair: cosmeticDefault.BlackHair,
        
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
