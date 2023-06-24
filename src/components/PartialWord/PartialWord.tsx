import React from "react";
import "./PartialWord.less";

interface IPartialWordProps {
  word: string;
  currentIndex: number;
}

const PartialWord: React.FC<IPartialWordProps> = ({ word, currentIndex }) => {
  const start = word.substring(0, currentIndex);
  const end = word.substring(currentIndex, word.length);

  return (
    <p className="partial-word">
      <span className="start">{start}</span>
      <span className="end">{end}</span>
    </p>
  );
};

export default PartialWord;
