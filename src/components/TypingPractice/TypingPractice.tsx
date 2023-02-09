import React, { Suspense, useEffect, useMemo, useState } from 'react';
import { getProgrammingWords } from '../../api/words';
import { pickRandomItems } from '../../common/utils/collections';
import { PuffLoader } from 'react-spinners';
import { PracticeWord } from '../../common/types/words';
// import './TypingPractice.css'

interface ITypingPracticeProps {
  numOfRounds: number;
}

const TypingPractice: React.FC<ITypingPracticeProps> = ({ numOfRounds }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [words, setWords] = useState<PracticeWord[]>([]);

  useEffect(() => {
    setIsLoading(true);

    getProgrammingWords()
      .then((words) => setWords(words))
      .finally(() => setIsLoading(false));
  }, []);

  return isLoading ? (<PuffLoader />) : (
      <div className="typing-practice">
        {pickRandomItems(words, numOfRounds).map(word => (
          <p>{word.eng} ({word.heb})</p>
        ))}
      </div>
  )
}

export default TypingPractice
