import React from 'react';
import WordListComponent from './WordListComponent';
import AddWordComponent from './AddWordComponent';
import EditWordComponent from './EditWordComponent';
import DeleteWordComponent from './DeleteWordComponent';

const WordListSectionComponent = () => {
  return (
    <section>
      <h2>Word List</h2>
      <WordListComponent />
      <AddWordComponent />
      <EditWordComponent />
      <DeleteWordComponent />
    </section>
  );
};

export default WordListSectionComponent;