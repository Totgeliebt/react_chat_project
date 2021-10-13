import {combineReducers, configureStore} from '@reduxjs/toolkit'
import userData from '../features/userDataSlice/userDataSlice'
import chat from "../features/ChatSlice/ChatSlice";
import currentUserData from "../features/CurrentUserDataSlice/CurrentUserDataSlice";
import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import {logger} from 'redux-logger'

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}
const rootReducer = combineReducers({
    userData: userData,
    chat: chat,
    currentUserData: currentUserData,

})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware:
        (getDefaultMiddleware) => getDefaultMiddleware({
        serializedCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }).concat(logger)
})
const persistor = persistStore(store)


export {persistor, store}