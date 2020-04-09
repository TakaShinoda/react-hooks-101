import React, { useEffect, useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import reducer from '../reducers/'
import { AppContext } from '../contexts/AppContext'
import { EventForm } from './EventForm'
import { Events } from './Events'
import { OperationLogs } from './OperationLogs'

const APP_KEY = 'appWithRedux'

export const App = () => {
  const appState = localStorage.getItem(APP_KEY)
  const InitialState = appState ? JSON.parse(appState) : {
    events: [],
    operationLogs: []
  }
  const [state, dispatch] = useReducer(reducer, InitialState)

  useEffect(() => {
    localStorage.setItem(APP_KEY, JSON.stringify(state))
  },[state])

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <EventForm />
        <Events />
        <OperationLogs />
      </div>
    </AppContext.Provider>
  );
}
