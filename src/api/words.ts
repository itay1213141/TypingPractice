import { Language, PracticeWord } from "../common/types/words";

export const getProgrammingWords = async (): Promise<PracticeWord[]> => {
  return [
    {
      value: {
        [Language.English]: "Variable",
        [Language.Hebrew]: "משתנה",
      },
      meaning: {
        [Language.English]:
          "A named storage location that can hold a value, which can be changed during the program execution",
        [Language.Hebrew]:
          "מיקום אחסון שמוגדר על ידי שם ויכול להכיל ערך שניתן לשנות במהלך ביצוע התוכנית",
      },
    },
    {
      value: {
        [Language.English]: "Function",
        [Language.Hebrew]: "פונקציה",
      },
      meaning: {
        [Language.English]:
          "A block of reusable code that performs a specific task and can be invoked (called) from different parts of a program",
        [Language.Hebrew]:
          "בלוק של קוד ניתן לשימוש חוזר המבצע משימה ספציפית וניתן לקרוא אותו מחלקים שונים של התוכנית",
      },
    },
    {
      value: {
        [Language.English]: "Loop",
        [Language.Hebrew]: "לולאה",
      },
      meaning: {
        [Language.English]:
          "A control flow statement that allows code to be executed repeatedly based on a condition",
        [Language.Hebrew]:
          "הצהרה של זרימת בקרה המאפשרת ביצוע קוד בדיקה שוב ושוב בהתאם לתנאי מסוים",
      },
    },
    {
      value: {
        [Language.English]: "Array",
        [Language.Hebrew]: "מערך",
      },
      meaning: {
        [Language.English]:
          "A data structure that stores a collection of elements, each identified by an index or key",
        [Language.Hebrew]:
          "מבנה נתונים שמאחסן אוסף של אלמנטים, כשכל אלמנט מזוהה על ידי אינדקס או מפתח",
      },
    },
    {
      value: {
        [Language.English]: "Object",
        [Language.Hebrew]: "אובייקט",
      },
      meaning: {
        [Language.English]:
          "An instance of a class that encapsulates properties and methods to represent a certain entity or concept",
        [Language.Hebrew]:
          "מופע של מחלקה שמכיל תכונות ומתודות לייצוג יישות או רעיון מסוים",
      },
    },
    {
      value: {
        [Language.English]: "Class",
        [Language.Hebrew]: "מחלקה",
      },
      meaning: {
        [Language.English]:
          "A blueprint or template for creating objects that encapsulates data and behaviors",
        [Language.Hebrew]: "תבנית ליצירת אובייקטים שמכילה נתונים והתנהגויות",
      },
    },
    {
      value: {
        [Language.English]: "Method",
        [Language.Hebrew]: "מתודה",
      },
      meaning: {
        [Language.English]:
          "A function that belongs to a class and defines the behavior of objects created from that class",
        [Language.Hebrew]:
          "פונקציה שמשתייכת למחלקה ומגדירה את התנהגות האובייקטים שנוצרים מהמחלקה",
      },
    },
    {
      value: {
        [Language.English]: "String",
        [Language.Hebrew]: "מחרוזת",
      },
      meaning: {
        [Language.English]:
          "A sequence of characters, typically used to represent text",
        [Language.Hebrew]: "סדרה של תווים שמשמעה טקסט בדרך כלל",
      },
    },
    {
      value: {
        [Language.English]: "Integer",
        [Language.Hebrew]: "מספר שלם",
      },
      meaning: {
        [Language.English]:
          "A data type that represents whole numbers without any fractional or decimal parts",
        [Language.Hebrew]: "מספר שלם (לא שבר)",
      },
    },
    {
      value: {
        [Language.English]: "Boolean",
        [Language.Hebrew]: "בוליאני",
      },
      meaning: {
        [Language.English]:
          "A data type that represents two values: true or false",
        [Language.Hebrew]: "סוג נתונים שמייצג שני ערכים: נכון או שקר",
      },
    },
    {
      value: {
        [Language.English]: "Conditional",
        [Language.Hebrew]: "תלוי תנאי",
      },
      meaning: {
        [Language.English]:
          "A statement or expression that allows different actions to be performed based on a condition",
        [Language.Hebrew]:
          "הצהרה או ביטוי שמאפשר פעולות שונות להתבצע על פי תנאי מסוים",
      },
    },
    {
      value: {
        [Language.English]: "Operator",
        [Language.Hebrew]: "אופרטור",
      },
      meaning: {
        [Language.English]:
          "A symbol or keyword that represents an action or operation to be performed on operands",
        [Language.Hebrew]:
          "סמל או מילת מפתח שמייצגת פעולה או פעולה שיישומה על ערכים",
      },
    },
    {
      value: {
        [Language.English]: "Parameter",
        [Language.Hebrew]: "פרמטר",
      },
      meaning: {
        [Language.English]:
          "A variable or value passed to a function or method as input",
        [Language.Hebrew]: "משתנה או ערך שמועבר לפונקציה כקלט",
      },
    },
    {
      value: {
        [Language.English]: "Return",
        [Language.Hebrew]: "החזר",
      },
      meaning: {
        [Language.English]:
          "A statement used to end the execution of a function and return a value to the caller",
        [Language.Hebrew]: "הצהרה שמשמשת לסיום ביצוע פונקציה והחזרת ערך לקורא",
      },
    },
    {
      value: {
        [Language.English]: "Algorithm",
        [Language.Hebrew]: "אלגוריתם",
      },
      meaning: {
        [Language.English]:
          "A step-by-step procedure or a set of rules for solving a specific problem",
        [Language.Hebrew]: "סדר פעולות שפותר בעיה מסוימת",
      },
    },
    {
      value: {
        [Language.English]: "Debug",
        [Language.Hebrew]: "דיבאג",
      },
      meaning: {
        [Language.English]:
          "The process of identifying and fixing errors or bugs in a program",
        [Language.Hebrew]: "תהליך הזיהוי ותיקון שגיאות או באגים בתוכנית",
      },
    },
    {
      value: {
        [Language.English]: "Syntax",
        [Language.Hebrew]: "תחביר",
      },
      meaning: {
        [Language.English]:
          "The set of rules that define the structure and organization of a programming language",
        [Language.Hebrew]: "קבוצת הכללים שמגדירה את המבנה והארגון של שפת תכנות",
      },
    },
    {
      value: {
        [Language.English]: "Compiler",
        [Language.Hebrew]: "מהדר",
      },
      meaning: {
        [Language.English]:
          "A software program that translates source code written in a high-level programming language into machine code that can be executed directly by a computer",
        [Language.Hebrew]:
          "תוכנה שמתרגמת קוד מקור בשפת תכנות ברמה גבוהה לקוד מכונה שניתן להריץ ישירות על ידי מחשב",
      },
    },
    {
      value: {
        [Language.English]: "Code",
        [Language.Hebrew]: "קוד",
      },
      meaning: {
        [Language.English]:
          "Instructions written in a programming language that describe the actions to be performed by a computer",
        [Language.Hebrew]:
          "הוראות שנכתבות בשפת תכנות שמתארות את הפעולות שיש לבצע על ידי מחשב",
      },
    },
    {
      value: {
        [Language.English]: "Library",
        [Language.Hebrew]: "ספרייה",
      },
      meaning: {
        [Language.English]:
          "A collection of precompiled and reusable code modules that provide specific functionality to be used by programs",
        [Language.Hebrew]:
          "קוד שנכתב על ידיי מישהו אחר, כדיי שאחרים יוכלו להשתמש בו",
      },
    },
    {
      value: {
        [Language.English]: "Database",
        [Language.Hebrew]: "מסד נתונים",
      },
      meaning: {
        [Language.English]:
          "A structured collection of data that is organized and managed to provide efficient retrieval, modification, and storage capabilities",
        [Language.Hebrew]:
          "אוסף ממוין של נתונים המועדף וניהול על מנת לספק אפשרויות אפקטיביות לחיפוש, שינוי ואחסון",
      },
    },
    {
      value: {
        [Language.English]: "Query",
        [Language.Hebrew]: "שאילתה",
      },
      meaning: {
        [Language.English]:
          "A request for specific information from a database, typically written using a query language",
        [Language.Hebrew]:
          "בקשה למידע מסוים ממסד נתונים, בדרך כלל נכתבת באמצעות שפת שאילתות",
      },
    },
    {
      value: {
        [Language.English]: "Index",
        [Language.Hebrew]: "אינדקס",
      },
      meaning: {
        [Language.English]:
          "An integer that represents a place in a list. Usually starts with 0",
        [Language.Hebrew]: "מספר שלם שמייצג מיקום ברשימה. לרוב מתחיל מ-0",
      },
    },
    {
      value: {
        [Language.English]: "Cache",
        [Language.Hebrew]: "מטמון",
      },
      meaning: {
        [Language.English]:
          "A hardware or software component that stores data to serve future requests more quickly",
        [Language.Hebrew]:
          "רכיב ששומר מידע שלוקח הרבה זמן להשיג, כדיי שפעם הבאה הוא יגיע מהר יותר",
      },
    },
  ];
};
