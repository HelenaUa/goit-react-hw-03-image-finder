import React, { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { AppStyled } from './App.styled';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
// import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';


export class App extends Component {

  state = {
    name: '',
    page: 1,
    data: null,
    hits: null,
    loading: false,
    showModal: false,
    currentLargeUrl: '',
    currentImageTags: '',

  };

  // componentDidMount() {
  //   this.setState({ loading: true });

  //   fetch(`${BASE_URL}?key=${KEY}&q=${this.state.name}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${this.state.page}`)
  //     .then(res => res.json())
  //     .then(hits => this.setState({ hits }))
  //     .finally(() => this.setState({loading: false}));
  // };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.name !== this.state.name) {
      this.setState({ loading: true });
    const KEY = "32997902-3b59b8944b64f8408d8a5fafd";
    const BASE_URL = "https://pixabay.com/api/";
      fetch(`${BASE_URL}?key=${KEY}&q=${this.state.name}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${this.state.page}`)
      .then(res => res.json())
      .then(hits => this.setState({ hits }))
      .finally(() => this.setState({loading: false}));
    }

  };


  // onFormSubmit = (name) => {
  //   this.setState({ name });
  // };

  onFormSubmit = (data) => {
    this.setState({ name: data.name });
  };

  openModal = (event) => {
    const currentLargeUrl = event.target.dataset.large;
    const currentImageTags = event.target.alt;

    this.setState({ currentLargeUrl, currentImageTags });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };


  render() {

    return (
    <AppStyled>
        <GlobalStyle />

        <Searchbar onSubmit={this.onFormSubmit}/>
        {this.state.loading && <Loader />}
        {this.state.data && <ImageGallery images={this.state.data} openModal={this.openModal} />}
        <Button />
        {/* <Modal /> */}
      
    </AppStyled>
  );
  }
  
};
