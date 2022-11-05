import { Avatar } from "../interfaces/Interface"
import { AvatarContext } from "./AvatarContext"

const initial_state: Avatar = {
    avatar: {}
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
