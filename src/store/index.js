import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers'
import rootSaga from './sagas'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import { whitelist } from './persist-keys'
import { loadState, saveState } from './localStorage'

const persistConfig = {
    key: 'root',
    storage,
    whitelist,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
// const preloadedState = loadState()
const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))
// store.subscribe(() => {
//   saveState(store.getState().Login.authUser || undefined)
// })
export default store
export const persistor = persistStore(store)
sagaMiddleware.run(rootSaga)