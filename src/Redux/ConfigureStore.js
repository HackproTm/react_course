import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import { products } from './Products'

export const configureStore = () => {
    const store = createStore(
        combineReducers({
            products
        }),
        applyMiddleware(thunk, logger)
    )

    return store
}
