import React from 'react';
import WordListSectionComponent from './WordListComponent.jsx';
import WordCardSectionComponent from './WordCardSectionComponent.jsx';

const HomePageComponent = () => {
  return (
    <main>
      <WordListSectionComponent />
      <WordCardSectionComponent />
    </main>
  );
};

export default HomePageComponent;