import { IStats } from "../types/stats";
import { average } from "./math";

export const averagesPerRound = (stat: number[][]) =>
  stat.map((round) => average(round));

export const totalAverage = (stat: number[][]) =>
  average(averagesPerRound(stat));

export const calculateScore = ({ averageTime, accuracyPercentage }: IStats) =>
  Math.round((accuracyPercentage * 10) / (averageTime / 1000));
