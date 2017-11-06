import React from 'react';
import ReduxPromise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

// Components
import Main from './components/Main/Main';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

export const makeMainRoutes = () => {
   return (
      <Provider store={createStoreWithMiddleware(reducers) }>
         <div>
            <Main />
         </div>
      </Provider>
   )
}