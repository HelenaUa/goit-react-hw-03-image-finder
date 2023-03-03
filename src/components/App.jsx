import React, { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { AppStyled } from './App.styled';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button.styled';
// import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';


export class App extends Component {

  state = {};

  render() {

    return (
    <AppStyled>
        <GlobalStyle />

        <Searchbar />
        <Loader />
        <ImageGallery />
        <Button />
        {/* <Modal /> */}
      
    </AppStyled>
  );
  }
  
};
