import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import { authMiddleware } from './middlewares/authMiddleWare';
import { cardMiddleware } from './middlewares/cardMiddleWare';

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(authMiddleware, cardMiddleware)));