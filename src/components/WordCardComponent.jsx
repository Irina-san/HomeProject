import React from 'react';

const WordCardComponent = () => {
  // Для примера предполагаем, что слово передается в компонент через пропсы
  const word = {
    mainValue: 'Main Value',
    transcription: 'Transcription',
    translation: 'Translation',
    theme: 'Theme',
  };

  return (
    <div>
      <h3>Word Card:</h3>
      <p>Main Value: {word.mainValue}</p>
      <p>Transcription: {word.transcription}</p>
      <p>Translation: {word.translation}</p>
      <p>Theme: {word.theme}</p>
    </div>
  );
};

export default WordCardComponent;