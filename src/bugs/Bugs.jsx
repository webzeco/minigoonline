import React from 'react'
import { Provider } from 'react-redux';
import storeConfigure from '../store/configureStore'
import BugsList from './BugsList'

export default function Bugs() {
const store=storeConfigure();
    return (
        <Provider store={store}>
            <BugsList/>
        </Provider>
    )
}
