import { createContext } from "react";
import { Avatar } from "../interfaces/Interface";

export type AvatarContextProps = {
    avatarState: Avatar
}

export const AvatarContext = createContext<AvatarContextProps>({} as AvatarContextProps)