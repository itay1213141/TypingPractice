import React from "react";
import { average } from "../../common/utils/math";
import "./Results.less";
import {
  averagesPerRound,
  calculateScore,
  totalAverage,
} from "../../common/utils/stats";
import { IResults } from "../../common/types/stats";
import localStorageKeys from "../../common/consts/localStorageKeys";

interface IResultsProps {
  results: IResults;
  decimalPlaces?: number;
}

const formatTime = (
  timeInMilliseconds: number,
  decimalPlaces: number
): string => `${(timeInMilliseconds / 1000).toFixed(decimalPlaces)} שניות`;

const Results: React.FC<IResultsProps> = ({ results, decimalPlaces = 2 }) => {
  const { mistakePercentages, averageTimes } = results;
  const averageTimesPerRound: number[] = averagesPerRound(averageTimes);
  const averageTime: number = average(averageTimesPerRound);

  const averageMistakes: number = totalAverage(mistakePercentages);
  const accuracyPercentage: number = 100 * (1 - averageMistakes);

  const score: number = calculateScore({ averageTime, accuracyPercentage });

  const lastScore = localStorage.getItem(localStorageKeys.bestScore);
  const scoreDelta = lastScore ? score - parseFloat(lastScore) : 0;
  const scoreDeltaSign: string = scoreDelta > 0 ? "+" : "-";

  const bestScore = localStorage.getItem(localStorageKeys.bestScore);

  if (!bestScore || score > parseFloat(bestScore)) {
    localStorage.setItem(localStorageKeys.bestScore, score.toString());
  }

  localStorage.setItem(localStorageKeys.lastScore, score.toString());

  return (
    <div className="results">
      <div className="title">תוצאות</div>
      <div className="stats">
        <div className="times">
          <span>ממוצעי זמן (לכל מילה):</span>
          <ol className="rounds">
            {averageTimesPerRound.map((avg, index) => (
              <li key={`round${index}`}>
                סיבוב {index + 1} - {formatTime(avg, decimalPlaces)}
              </li>
            ))}
          </ol>
          <span>ממוצע סה"כ: {formatTime(averageTime, decimalPlaces)}</span>
        </div>
        <p className="accuracy">
          דיוק: {parseFloat(accuracyPercentage.toFixed(decimalPlaces))}%
        </p>
        <p className="score">
          ניקוד: {score}{" "}
          {scoreDelta != 0 && (
            <span className={`score-delta ${scoreDelta > 0 ? "positive" : ""}`}>
              ({`${scoreDelta.toFixed(0)}${scoreDeltaSign}`})
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default Results;
