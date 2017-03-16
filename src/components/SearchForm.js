import React, {Component} from 'react';
import Search from './Search';
import ListOfLinks from './ListOfLinks';

class SearchForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: '',
        };
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value,
        });
    };

    render() {
        return <div>
                <Search onChange={this.handleChange}/>
                {this.state.value ?
                    <ListOfLinks value={this.state.value}/>
                    : null
                }
            </div>
    }
}

export default SearchForm;
