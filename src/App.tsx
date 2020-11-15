import React from 'react';
import Paper from '@material-ui/core/Paper';


import './App.css';
import useCheckbox from './useCheckbox';
import CheckboxComponent from './CheckboxComponent';

const App = () => {
  const { checkboxList, onClick } = useCheckbox();
  
  return (
    <div className="App">
      <header className="App-header">
        <>
          <Paper>
            {checkboxList?.map((checkboxItem: any, idx: number) => (
              <CheckboxComponent
                key={checkboxItem.id}
                checkboxItem={checkboxItem}
                onClick={onClick}
              />
            ))}
        </Paper>
        </>
      </header>
    </div>
  );
}

export default App;
