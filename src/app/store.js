import {combineReducers, configureStore} from '@reduxjs/toolkit'
import userDataSlice from '../features/userDataSlice/userDataSlice'
import chatSlice from "../features/ChatSlice/ChatSlice";
import currentUserDataSlice from "../features/CurrentUserDataSlice/CurrentUserDataSlice";
import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import {logger} from 'redux-logger'

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}
const rootReducer = combineReducers({
    userDataSlice: userDataSlice,
    chatSlice: chatSlice,
    currentUserDataSlice: currentUserDataSlice
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