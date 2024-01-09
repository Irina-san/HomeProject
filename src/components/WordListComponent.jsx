import React from 'react';

const WordListComponent = () => {
  // Здесь можно получить список всех существующих слов через API или входные данные
  const words = [
    { id: 1, word: 'Word 1' },
    { id: 2, word: 'Word 2' },
    { id: 3, word: 'Word 3' },
  ];

  return (
    <div>
      <h3>Слова: </h3>
      <ul>
        {words.map((item) => (
          <li key={item.id}>{item.word}</li>
        ))}
      </ul>
    </div>
  );
};

export default WordListComponent;