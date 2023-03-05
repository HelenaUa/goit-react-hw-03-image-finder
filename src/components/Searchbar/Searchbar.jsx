// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { HeaderSearchbar, SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput } from "./Searchbar.styled";


export class Searchbar extends Component {

    state = {
        name: '',
    };

// handleChacge = (event) => {
//         const { name, value } = event.currentTarget;
//         this.setState({ [name]: value })
//     };

    handleChacge = ({target: {value}}) => {
        this.setState({ name: value });
    };

    // handleChange = (event) => {
    //     this.setState({ name: event.target.value.toLowerCase() });
    //  };

    formSubmit = (event) => {
        event.preventDefault();

        if (this.state.name.trim() === '') {
            alert('Please enter name');
            return;
        };

        this.props.onSubmit(this.state.value);
        this.setState({ name: '' });
    };

    render() {
       return (
    <HeaderSearchbar>
        <SearchForm onSubmit={this.formSubmit} >
        <SearchFormButton type="submit" >
           <SearchFormButtonLabel></SearchFormButtonLabel>
        </SearchFormButton>

       <SearchFormInput
        type="text"
        // name="name"
        autocomplete="off"
        // autofocus
        placeholder="Search images and photos"
        value={this.state.name}
        onChange={this.handleChange}
        />
        </SearchForm>
    </HeaderSearchbar>
    )
    }
    
}