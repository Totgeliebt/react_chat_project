import {combineReducers, configureStore} from '@reduxjs/toolkit'
import SliceNameReducer from '../features/slice'
import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}
const rootReducer = combineReducers({
    sliceName: SliceNameReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware:
        (getDefaultMiddleware) => getDefaultMiddleware({
        serializedCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
})
let persistor = persistStore(store)


export {persistor, store}