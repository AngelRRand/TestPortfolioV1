import avatar from './avatarStore'

import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
    reducer: {
        avatar
    }
})