import React, { useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import reducer from '../reducers'
import { AppContext } from '../contexts/AppContext'
import { EventForm } from './EventForm'
import { Events } from './Events'

console.log({AppContext})

export const App = () => {
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <AppContext.Provider value={'Hello I am a Provider.'}>
      <div className="container-fluid">
        <EventForm state={state} dispatch={dispatch} />
        <Events state={state} dispatch={dispatch} />
      </div>
    </AppContext.Provider>
  );
}
