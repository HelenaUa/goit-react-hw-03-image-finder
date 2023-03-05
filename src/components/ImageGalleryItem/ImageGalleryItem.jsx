// import PropTypes from 'prop-types';
import { ImageGalleryItemLi, ImageGalleryItemImage } from "./ImageGalleryItem.styled";


export const ImageGalleryItem = ({ image, openModal }) => {
    const { webformatURL, largeImageURL, tags } = image;
    
    return (
        <ImageGalleryItemLi>
            <ImageGalleryItemImage
                src={webformatURL}
                alt={tags}
                data-large={largeImageURL}
                onClick={openModal}/>
        </ImageGalleryItemLi>
    )
}

// console.log(ImageGalleryItem());