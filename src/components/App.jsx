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
    data: null,
    showModal: false,
    largeUrl: null,
    alt: null,
    loading: false,
    perPage: 12,
    page: 1
    // name: '',
    // page: 1,
    // images: null,
    // totalHits: null,
    // loading: false,
    // showModal: false,
    // currentLargeUrl: '',
    // currentImageTags: '',
    //  error: null,
    //  imagesOnPage: 0,
  };

  // componentDidMount() {
  //   this.setState({ loading: true });

  //   fetch(`${BASE_URL}?key=${KEY}&q=${this.state.name}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${this.state.page}`)
  //     .then(res => res.json())
  //     .then(hits => this.setState({ hits }))
  //     .finally(() => this.setState({loading: false}));
  // };

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.name !== this.state.name) {
  //     this.setState({ loading: true });

  //     fetchImages(this.state.name).then(res => res.json())
  //       .then(images => this.setState({ images: images.hits }))
  //       .catch(error => { console.log('error :>> ', error) })
  //       .finally(() => this.setState({ loading: false }));
  //   }

  // };






  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.name !== prevState.name) {
  //     this.setState({ loading: true });

  //     fetchImages(this.state.name, this.state.page).then(({ hits, totalHits }) => {
  //       if (hits.length === 0) {
  //         this.setState({ images: null, imagesOnPage: 0, totalHits: 0 });
  //         alert('There is no image with name');
  //         return;
  //       }
  //       const arrayOfImages = this.createArrayOfImages(hits);
  //       // console.log(arrayOfImages);
  //       this.setState({ images: arrayOfImages, totalHits, imagesOnPage: hits.length, });
  //     }).catch((error) => {
  //       this.setState({ error });
  //       alert('Sorry, something went wrong. Please try again later.')
  //    }).finally(() => this.setState({loading: false}));
  //   }

  // };

  // createArrayOfImages = data => {
  //   const arrayOfImages = data.map(element => ({
  //     tags: element.tags,
  //     webformatURL: element.webformatURL,
  //     largeImageURL: element.largeImageURL,
  //   }));
  //   return arrayOfImages;
  // };

  // onFormSubmit = data => {
  //   this.setState({ name: data, page: 1 });
  // };

  // openModal = (event) => {
  //   const currentLargeUrl = event.target.dataset.large;
  //   const currentImageTags = event.target.alt;

  //   this.setState({ currentLargeUrl, currentImageTags });
  //   this.toggleModal();
  // };

  // toggleModal = () => {
  //   this.setState(({ showModal }) => ({
  //     showModal: !showModal,
  //   }));
  // };





  componentDidUpdate(prevProps, prevState) {
    if (this.state.perPage !== prevState.perPage) {
    this.setState({ loading: true });
      fetchImages();
      this.setState({ loading: false });  
    }
    
    if (this.state.name !== prevState.name) {
    this.setState({perPage: 12})
    fetchImages();
    } 
}


  onFormSubmit = (data) => {
    this.setState({name: data})
  }

  toggleModal = () =>
    this.setState(({ showModal }) => ({
    showModal: !showModal
  }))
  

  openModal = (dataFind) => {
    this.setState({
      largeUrl: dataFind.largeImageURL,
      alt: dataFind.tags,
  })
  }

  // openModal = (event) => {
  //   const currentLargeUrl = event.target.dataset.large;
  //   const currentImageTags = event.target.alt;

  //   this.setState({ currentLargeUrl, currentImageTags });
  //   this.toggleModal();
  // };

  // toggleModal = () => {
  //   this.setState(({ showModal }) => ({
  //     showModal: !showModal,
  //   }));
  // };

  render() {

    return (
    <AppStyled>
        <GlobalStyle />

        <Searchbar onSubmit={this.onFormSubmit}/>
        {this.state.loading && <Loader />}
        <ImageGallery data={this.state.data} openModal={this.openModal} toggleModal={() => { this.toggleModal() }}/>
        <Button />
        {/* <Modal /> */}
      
    </AppStyled>
  );
  }
  
};

//  <ImageGallary data={this.state.data} toggleModal={() => { this.toggleModal() }} modalItems={this.modalItems} />

//  {this.state.images && <ImageGallery images={this.state.images} openModal={this.openModal} />}