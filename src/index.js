import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter } from 'react-router-dom'
import './i18n'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { persistor} from './store'
import store from './store'
const app = (
    <Provider store={ store }>
        <BrowserRouter>
            <PersistGate loading={null} persistor={ persistor }>
                <App/>
            </PersistGate>
        </BrowserRouter>
    </Provider>

)

ReactDOM.render(app, document.getElementById('root'))
serviceWorker.unregister()
