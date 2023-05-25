export enum Language {
  Hebrew = "עברית",
  English = "English",
}

export type LanguageString = Record<Language, string>;

export interface PracticeWord {
  value: LanguageString;
  meaning?: LanguageString;
}
