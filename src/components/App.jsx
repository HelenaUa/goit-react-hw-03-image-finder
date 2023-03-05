import React, { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { AppStyled } from './App.styled';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
// import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';
import fetchImages from 'api/fetch';


export class App extends Component {

  state = {
    name: '',
    page: 1,
    images: null,
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

      fetchImages(this.state.name, this.state.page).then(({ hits, totalHits }) => {
        if (hits.length === 0) {
          this.setState({ images: null, totalHits: 0 });
          alert('There is no image with name');
          return;
        }
        const arrayOfImages = this.createArrayOfImages(hits);
        this.setState({ images: arrayOfImages, totalHits });
      }).catch((error) => {
        this.setState({ error });
        alert('Sorry, something went wrong. Please try again later.')
     }).finally(() => this.setState({loading: false}));
    }

  };

  createArrayOfImages = data => {
    const arrayOfImages = data.map(element => ({
      tags: element.tags,
      webformatURL: element.webformatURL,
      largeImageURL: element.largeImageURL,
    }));
    return arrayOfImages;
  };

  onFormSubmit = (data) => {
    this.setState({ name: data, page: 1 });
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
        {this.state.data && <ImageGallery images={this.state.images} openModal={this.openModal} />}
        <Button />
        {/* <Modal /> */}
      
    </AppStyled>
  );
  }
  
};
