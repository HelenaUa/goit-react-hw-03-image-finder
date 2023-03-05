// import PropTypes from 'prop-types';
import { ImageGalleryItemLi, ImageGalleryItemImage } from "./ImageGalleryItem.styled";

export const ImageGalleryItem = ({items}) => {
    return (
        items.map(item => (
        <ImageGalleryItemLi key={item.id}>
           <ImageGalleryItemImage
                id={item.id}
                src={item.webformatURL}
                alt={item.tags}
               />
        </ImageGalleryItemLi>
    ))
)
}

// export const ImageGalleryItem = ({ image, openModal }) => {
//     const { webformatURL, largeImageURL, tags } = image;
    
//     return (
//         <ImageGalleryItemLi>
//             <ImageGalleryItemImage
//                 src={image.webformatURL}
//                 alt={image.tags}
//                 data-large={image.largeImageURL}
//                 onClick={openModal}/>
//         </ImageGalleryItemLi>
//     )
// }

// console.log(ImageGalleryItem());