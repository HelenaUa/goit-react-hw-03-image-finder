// import PropTypes from 'prop-types';
import { ImageGalleryUl } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({images, openModal}) => {
    return (
        <ImageGalleryUl>
            {images.map(({ image, id }) => (<ImageGalleryItem key={id} image={image} openModal={openModal} />))}
           {/* <!-- Набор <li> с изображениями --> */}
        </ImageGalleryUl>
    )
}
