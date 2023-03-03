// import PropTypes from 'prop-types';
import { HeaderSearchbar, SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput } from "./Searchbar.styled";

export const Searchbar = () => {
    return (
    <HeaderSearchbar>
        <SearchForm>
        <SearchFormButton type="submit" >
           <SearchFormButtonLabel></SearchFormButtonLabel>
        </SearchFormButton>

       <SearchFormInput
        type="text"
        autocomplete="off"
        // autofocus
        placeholder="Search images and photos"
        />
        </SearchForm>
    </HeaderSearchbar>
    )
}