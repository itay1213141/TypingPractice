import { Language, PracticeWord } from "../common/types/words";

export const getProgrammingWords = async (): Promise<PracticeWord[]> => {
  return [
    {
      [Language.English]: "Variable",
      [Language.Hebrew]: "משתנה",
    },
    {
      [Language.English]: "Function",
      [Language.Hebrew]: "פונקציה",
    },
    {
      [Language.English]: "Loop",
      [Language.Hebrew]: "לולאה",
    },
    {
      [Language.English]: "Array",
      [Language.Hebrew]: "מערך",
    },
    {
      [Language.English]: "Object",
      [Language.Hebrew]: "אובייקט",
    },
    {
      [Language.English]: "Class",
      [Language.Hebrew]: "מחלקה",
    },
    {
      [Language.English]: "Method",
      [Language.Hebrew]: "מתודה",
    },
    {
      [Language.English]: "String",
      [Language.Hebrew]: "מחרוזת",
    },
    {
      [Language.English]: "Integer",
      [Language.Hebrew]: "מספר שלם",
    },
    {
      [Language.English]: "Boolean",
      [Language.Hebrew]: "בוליאני",
    },
    {
      [Language.English]: "Conditional",
      [Language.Hebrew]: "תלוי תנאי",
    },
    {
      [Language.English]: "Operator",
      [Language.Hebrew]: "אופרטור",
    },
    {
      [Language.English]: "Parameter",
      [Language.Hebrew]: "פרמטר",
    },
    {
      [Language.English]: "Return",
      [Language.Hebrew]: "החזר",
    },
    {
      [Language.English]: "Algorithm",
      [Language.Hebrew]: "אלגוריתם",
    },
    {
      [Language.English]: "Debug",
      [Language.Hebrew]: "דיבאג",
    },
    {
      [Language.English]: "Syntax",
      [Language.Hebrew]: "תחביר",
    },
    {
      [Language.English]: "Compiler",
      [Language.Hebrew]: "מהדר",
    },
    {
      [Language.English]: "Code",
      [Language.Hebrew]: "קוד",
    },
    {
      [Language.English]: "Library",
      [Language.Hebrew]: "ספרייה",
    },
    {
      [Language.English]: "Database",
      [Language.Hebrew]: "מסד נתונים",
    },
    {
      [Language.English]: "Query",
      [Language.Hebrew]: "שאילתה",
    },
    {
      [Language.English]: "Index",
      [Language.Hebrew]: "אינדקס",
    },
    {
      [Language.English]: "Cache",
      [Language.Hebrew]: "מטמון",
    },
  ];
};
