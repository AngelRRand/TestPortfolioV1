import { createContext } from "react";
import { Avatar } from "../interfaces/Interface";

export type AvatarContextProps = {
    avatarState: Avatar,
    newAvatar: (avatar: Avatar) => void
}

export const AvatarContext = createContext<AvatarContextProps>({} as AvatarContextProps)