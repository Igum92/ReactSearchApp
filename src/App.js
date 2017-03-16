import React, {Component} from 'react';
import SearchForm from './components/SearchForm';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends Component {

    render() {
        return <MuiThemeProvider>
               <SearchForm/>
        </MuiThemeProvider>
    }
}

export default App;