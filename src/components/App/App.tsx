import React, { useState } from 'react';
import TypingPractice from '../TypingPractice/TypingPractice'
import appConfig from '../../config/app';
import './App.less'
import { Language } from '../../common/types/words';

const App: React.FC = () => {
  const [rounds, setRounds] = useState(appConfig.DEFAULT_ROUNDS);
  const [wordsCount, setWordsCount] = useState(appConfig.DEFAULT_WORDS_COUNT);
  
  return (
    <div className="app">
      <TypingPractice rounds={rounds} wordsCount={wordsCount} language={Language.English} translationLanguage={Language.Hebrew} />
    </div>
  )
}

export default App
