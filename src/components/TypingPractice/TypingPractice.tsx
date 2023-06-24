import React, { useCallback, useEffect, useMemo, useState } from "react";
import { getProgrammingWords } from "../../api/words";
import { pickRandomItems, range } from "../../common/utils/collections";
import { PuffLoader } from "react-spinners";
import { Language, PracticeWord } from "../../common/types/words";
import "./TypingPractice.less";
import PartialWord from "../PartialWord/PartialWord";
import { Status } from "../../common/types/status";
import { useEventListener } from "usehooks-ts";
import appConfig from "../../config/app";
import { useStopwatch } from "react-use-precision-timer";
import Results from "../Results/Results";

interface ITypingPracticeProps {
  rounds?: number;
  wordsCount: number;
  language: Language;
  translationLanguage?: Language;
}

const TypingPractice: React.FC<ITypingPracticeProps> = ({
  rounds = appConfig.DEFAULT_ROUNDS,
  wordsCount,
  language,
  translationLanguage,
}) => {
  const [status, setStatus] = useState<Status>(Status.Loading);
  const [words, setWords] = useState<PracticeWord[][]>([]);
  const [times, setTimes] = useState<number[][]>(
    range(rounds).map((_) => range(wordsCount).map((_) => 0))
  );
  const [mistakes, setMistakes] = useState<number[][]>(
    range(rounds).map((_) => range(wordsCount).map((_) => 0))
  );

  const [currentRoundIndex, setCurrentRoundIndex] = useState<number>(0);
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [correctLetterIndex, setCorrectLetterIndex] = useState<number>(0);

  const currentRoundNumber: number = useMemo(
    () => currentRoundIndex + 1,
    [currentRoundIndex]
  );
  const currentWordNumber: number = useMemo(
    () => currentWordIndex + 1,
    [currentWordIndex]
  );
  const currentWord: PracticeWord | undefined = useMemo(
    () =>
      status !== Status.Loading
        ? words[currentRoundIndex][currentWordIndex]
        : undefined,
    [status, words, currentRoundIndex, currentWordIndex]
  );
  const currentMeaning: string | undefined = useMemo(
    () => translationLanguage && currentWord?.meaning?.[translationLanguage],
    [currentWord]
  );

  const stopwatch = useStopwatch();

  useEffect(() => {
    if (status === Status.Loading) {
      getProgrammingWords().then((programmingWords: PracticeWord[]) => {
        const randomWordsPerRound = range(rounds).map((_) =>
          pickRandomItems(programmingWords, wordsCount)
        );

        setWords(randomWordsPerRound);
        setStatus(Status.Ready);
      });
    }
  }, [status]);

  const nextRound = useCallback(() => {
    if (currentRoundNumber === rounds) {
      setStatus(Status.Finished);
      stopwatch.stop();

      return false;
    } else {
      setCurrentRoundIndex((index) => index + 1);
    }

    return true;
  }, [currentRoundIndex]);

  const nextWord = useCallback(() => {
    let hasEnded = false;

    if (currentWordNumber === wordsCount) {
      hasEnded = !nextRound();
      setCurrentWordIndex(0);
    } else {
      setCurrentWordIndex((index) => index + 1);
    }

    if (!hasEnded) {
      const timesCopy = times.map((roundTimes) => [...roundTimes]);
      timesCopy[currentRoundIndex][currentWordIndex] =
        stopwatch.getElapsedRunningTime();
      setTimes(timesCopy);

      stopwatch.start();
    }
  }, [currentWordIndex]);

  const progress = useCallback(
    (key: string) => {
      if (currentWord) {
        if (
          currentWord.value[language][correctLetterIndex].toUpperCase() ===
          key.toUpperCase()
        ) {
          if (correctLetterIndex + 1 === currentWord.value[language].length) {
            const mistakesCopy = mistakes.map((roundMistakes) => [
              ...roundMistakes,
            ]);

            // calculate percentage of correct letters
            mistakesCopy[currentRoundIndex][currentWordIndex] =
              mistakesCopy[currentRoundIndex][currentWordIndex] /
              currentWord.value[language].length;
            setMistakes(mistakesCopy);

            nextWord();
            setCorrectLetterIndex(0);
          } else {
            setCorrectLetterIndex((index) => index + 1);
          }
        } else {
          const mistakesCopy = mistakes.map((roundMistakes) => [
            ...roundMistakes,
          ]);

          // add to the amount of letters you didn't get right on your first try
          mistakesCopy[currentRoundIndex][currentWordIndex] = Math.min(
            mistakesCopy[currentRoundIndex][currentWordIndex] + 1,
            currentWord.value[language].length
          );

          setMistakes(mistakesCopy);
        }
      }
    },
    [currentWord, correctLetterIndex, mistakes]
  );

  useEventListener("keydown", ({ key }: KeyboardEvent) => {
    if (status === Status.Finished) return;

    if (status === Status.Ready && !key.match(/F\d+/)) {
      setStatus(Status.Active);
      stopwatch.start();
      return;
    }

    progress(key);
  });

  const reset = () => {
    setTimes(range(rounds).map((_) => range(wordsCount).map((_) => 0)));
    setMistakes(range(rounds).map((_) => range(wordsCount).map((_) => 0)));

    setCurrentRoundIndex(0);
    setCurrentWordIndex(0);
    setCorrectLetterIndex(0);

    setStatus(Status.Loading);
  };

  return (
    <div className="typing-practice">
      {status === Status.Loading ? (
        <PuffLoader />
      ) : status !== Status.Finished ? (
        <>
          <header>
            {status === Status.Active && (
              <>
                <div className="counters">
                  <p className="round-number">
                    סיבוב: {currentRoundNumber}/{rounds}
                  </p>
                  <p className="word-number">
                    מילה: {currentWordNumber}/{wordsCount}
                  </p>
                </div>
                <div className="stats"></div>
                <div className="time"></div>
              </>
            )}
          </header>
          <div className="content">
            {status === Status.Ready ? (
              <div className="ready-message">
                לחצו על מקש כלשהו במקלדת על מנת להתחיל
              </div>
            ) : (
              currentWord && (
                <div
                  key={currentWord?.value[language]}
                  className="current-word"
                >
                  {translationLanguage && (
                    <p className="translation">
                      {currentWord.value[translationLanguage]}
                    </p>
                  )}
                  <PartialWord
                    word={currentWord.value[language]}
                    currentIndex={correctLetterIndex}
                  />
                </div>
              )
            )}
          </div>
          <footer>
            {status === Status.Active && currentMeaning && (
              <div key={currentMeaning} className="meaning">
                {currentMeaning}
              </div>
            )}
          </footer>
        </>
      ) : (
        <>
          <Results
            results={{ averageTimes: times, mistakePercentages: mistakes }}
          />
          <button className="reset" onClick={reset}>
            שחקו שוב
          </button>
        </>
      )}
    </div>
  );
};

export default TypingPractice;
