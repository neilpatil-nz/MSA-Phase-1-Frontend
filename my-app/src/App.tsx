import React,{useState} from 'react';
import './App.css';
import SearchBar from './Components/SearchBarComponents/SearchBar';
import { IUserInput } from '././Common/Interfaces';
import MediaGrid from '././Components/MediaGridComponent/MediaGrid';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core';

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
})
function App() {
  const [UserInput, setUserInput] = useState<IUserInput>({
    SearchQuery: "Batman"
  });
  function SetUserInput(a: IUserInput) {
    setUserInput(a);    
  }

  return (
    <div className="App" >
      <h2>IMDB Movie Search</h2>
      <MuiThemeProvider theme={theme}>
          <SearchBar SetUserInput={(a: IUserInput) => SetUserInput(a)}/>
          <MediaGrid SearchQuery={UserInput.SearchQuery}></MediaGrid>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
