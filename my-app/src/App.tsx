import React,{useState} from 'react';
import './App.css';
import SearchBar from './Components/SearchBarComponents/SearchBar';
import MediaGrid from './Components/MediaGridComponent/MediaGrid';
import { IUserInput } from './Common/Interfaces';
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
    SearchQuery: "Shawshank"
  });
  function SetUserInput(a: IUserInput) {
    setUserInput(a);    
  }

  return (
    <div className="App" >
      <h2>IMDB Movie Search</h2>
      <MuiThemeProvider theme={theme}>
          <SearchBar SetUserInput={(a: IUserInput) => SetUserInput(a)}/>
          <MediaGrid SearchQuery={UserInput.SearchQuery}/>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
