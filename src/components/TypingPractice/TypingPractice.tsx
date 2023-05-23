import React, { Suspense, useCallback, useEffect, useMemo, useState } from 'react';
import { getProgrammingWords } from '../../api/words';
import { pickRandomItems, range } from '../../common/utils/collections';
import { PuffLoader } from 'react-spinners';
import { Language, PracticeWord } from '../../common/types/words';
import './TypingPractice.less'
import PartialWord from '../PartialWord/PartialWord';
import { Status } from '../../common/types/status';
interface ITypingPracticeProps {
  rounds: number;
  wordsCount: number;
  language: Language;
  translationLanguage?: Language;
}

const TypingPractice: React.FC<ITypingPracticeProps> = ({ rounds, wordsCount, language, translationLanguage }) => {
  const [status, setStatus] = useState<Status>(Status.Loading);
  const [words, setWords] = useState<PracticeWord[][]>([]);

  const [currentRoundIndex, setCurrentRoundIndex] = useState<number>(0);
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [correctLetterIndex, setCorrectLetterIndex] = useState<number>(0);
  
  const currentRoundNumber: number = currentRoundIndex + 1;
  const currentWordNumber: number = currentWordIndex + 1;
  const currentWord: PracticeWord | undefined =
    status !== Status.Loading ? words[currentRoundIndex][currentWordIndex] : undefined;

  const onKeyPressed = useCallback((event: KeyboardEvent) => {    
    if (status === Status.Ready) {
      setStatus(Status.Active);
      return;
    }
    
    const { key } = event;
    
    if (currentWord && currentWord[language][correctLetterIndex] === key) {
      progress();
    }
  }, [words, status, currentRoundIndex, currentWordIndex, correctLetterIndex]);

  useEffect(() => {
    window.addEventListener('keydown', onKeyPressed);
    return () => window.removeEventListener('keydown', onKeyPressed);
  }, [words, status, currentRoundIndex, currentWordIndex, correctLetterIndex]);

  useEffect(() => {
    getProgrammingWords().then((programmingWords: PracticeWord[]) => {
      const randomWordsPerRound = range(rounds).map(_ => pickRandomItems(programmingWords, wordsCount));
      setWords(randomWordsPerRound);
      
      setStatus(Status.Ready);
    });
  }, []);

  const progress = () => {
    if (currentWord && correctLetterIndex + 1 === currentWord[language].length) {
      if (currentWordIndex + 1 === wordsCount) {
        if (currentRoundIndex + 1 === rounds) {
          setStatus(Status.Finished);
        } else {
          setCurrentRoundIndex(index => index + 1);
        }

        setCurrentWordIndex(0);
      } else {
        setCurrentWordIndex(index => index + 1);
      }      

      setCorrectLetterIndex(0);
    } else {
      setCorrectLetterIndex(index => index + 1);
    }
  };
  
  console.log(correctLetterIndex)
  return (
    <div className="typing-practice">
      {
        status === Status.Loading ? (<PuffLoader />) :
      (status !== Status.Finished ? (
        <>
        <div className="header">
          <div className="counters">
            <p className="round-number">Round {currentRoundNumber}/{rounds}</p>
            <p className="word-number">Word {currentWordNumber}/{wordsCount}</p>
          </div>
          <div className="stats"></div>
          <div className="time"></div>
        </div>
        <div className="content">
          { status === Status.Ready ? (
            <div className="ready-message">Press any key to start</div>
          ) : currentWord && (
            <div className='current-word'>
              { translationLanguage && <p>({currentWord[translationLanguage]})</p>}
              <PartialWord word={currentWord[language]} currentIndex={correctLetterIndex} />
            </div>
            )}
        </div>
        <div className="footer"></div>
        </>
      ) : (
        <div className="results">
          results will be here
        </div>
      )
  )}</div>);
}

export default TypingPractice;
