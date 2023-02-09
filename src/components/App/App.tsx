import React, { useState } from 'react';
import TypingPractice from '../TypingPractice/TypingPractice'
import appConfig from '../../config/app';
import './App.css'

const App = () => {
  const [rounds, setRounds] = useState(appConfig.DEFAULT_ROUNDS);

  return (
    <div className="app">
      <TypingPractice numOfRounds={rounds} />
    </div>
  )
}

export default App
