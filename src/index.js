import React from 'react';
import { render } from 'react-dom';
import Root from './Root';
import * as serviceWorker from './serviceWorker';
import configureStore from './configureStore';


const store = configureStore();

render(<Root store={store} />, document.getElementById('root'));
serviceWorker.unregister();
