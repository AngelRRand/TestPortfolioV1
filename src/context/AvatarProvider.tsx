import { AvatarContext } from "./AvatarContext"

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
