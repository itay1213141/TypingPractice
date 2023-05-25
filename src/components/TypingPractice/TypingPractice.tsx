import React, { useEffect, useMemo, useState } from 'react';
import { getProgrammingWords } from '../../api/words';
import { pickRandomItems, range } from '../../common/utils/collections';
import { PuffLoader } from 'react-spinners';
import { Language, PracticeWord } from '../../common/types/words';
import './TypingPractice.less'
import PartialWord from '../PartialWord/PartialWord';
import { Status } from '../../common/types/status';
import { useEventListener } from 'usehooks-ts';
import appConfig from '../../config/app';

interface ITypingPracticeProps {
  rounds?: number;
  wordsCount: number;
  language: Language;
  translationLanguage?: Language;
}

const TypingPractice: React.FC<ITypingPracticeProps> = ({ rounds = appConfig.DEFAULT_ROUNDS, wordsCount, language, translationLanguage }) => {
  const [status, setStatus] = useState<Status>(Status.Loading);
  const [words, setWords] = useState<PracticeWord[][]>([]);

  const [currentRoundIndex, setCurrentRoundIndex] = useState<number>(0);
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [correctLetterIndex, setCorrectLetterIndex] = useState<number>(0);
  
  const currentRoundNumber: number = useMemo(() => currentRoundIndex + 1, [currentRoundIndex]);
  const currentWordNumber: number = useMemo(() => currentWordIndex + 1, [currentWordIndex]);
  const currentWord: PracticeWord | undefined = useMemo(() => 
    status !== Status.Loading ? words[currentRoundIndex][currentWordIndex] : undefined, [status, words, currentRoundIndex, currentWordIndex]);

  useEventListener('keydown', (event: KeyboardEvent) => {    
    if (status === Status.Ready && !event.key.match(/F\d+/)) {
      setStatus(Status.Active);
      return;
    }
    
    const { key } = event;
    
    if (currentWord && currentWord.value[language][correctLetterIndex] === key) {
      progress();
    }
  });

  useEffect(() => {
    getProgrammingWords().then((programmingWords: PracticeWord[]) => {
      console.log(programmingWords);
      
      const randomWordsPerRound = range(rounds).map(_ => pickRandomItems(programmingWords, wordsCount));
      setWords(randomWordsPerRound);
      
      setStatus(Status.Ready);
    });
  }, []);

  const progress = () => {
    

    if (currentWord && correctLetterIndex + 1 === currentWord.value[language].length) {
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
              { translationLanguage && <p>({currentWord.value[translationLanguage]})</p>}
              <PartialWord word={currentWord.value[language]} currentIndex={correctLetterIndex} />
            </div>
            )}
        </div>
        <div className="footer">
          { translationLanguage && status === Status.Active && (
            <div className="meaning">
            { currentWord && currentWord.meaning && <div className="meaning">{ currentWord.meaning[translationLanguage] }</div> }
          </div>
          )}
        </div>
        </>
      ) : (
        <div className="results">
          results will be here
        </div>
      )
  )}</div>);
}

export default TypingPractice;
