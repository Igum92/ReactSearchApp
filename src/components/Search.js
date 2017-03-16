import React from 'react';
import TextField from 'material-ui/TextField';


export default class Search extends React.Component {


    render() {
        return (
                <TextField
                    id="text-field-controlled"
                    onChange={this.props.onChange}
                />
        );
    }
}