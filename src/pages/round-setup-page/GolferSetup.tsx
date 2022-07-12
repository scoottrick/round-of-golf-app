import React, { useState } from 'react';
import AddGolferButton from './AddGolferButton';
import GolferList from './GolferList';
import PageSection from './PageSection';

const defaultGolfer = 'Scott';

const GolferSetup = ({ golferNames, namesUpdated }) => {
  const addClicked = () => {
    namesUpdated([...golferNames, '']);
  };

  return (
    <PageSection>
      <header className="flex flex-row justify-between items-start mb-8">
        <h1 className="text-3xl mt-4 flex-1">Golfers</h1>
        <AddGolferButton onClick={() => addClicked()} />
      </header>
      <GolferList names={golferNames} namesUpdated={namesUpdated} />
    </PageSection>
  );
};

export default GolferSetup;
