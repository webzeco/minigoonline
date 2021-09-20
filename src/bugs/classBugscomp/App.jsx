import React, { Component } from 'react'
import { Provider } from 'react-redux'
import storeConfigure from '../../storemini/configureStore'
import ClassBugs from './ClassBugs'
const store=storeConfigure();
export default class App extends Component {
    render() {
        return (
            <Provider store={store} >
                <ClassBugs/>
            </Provider>
        )
    }
}
