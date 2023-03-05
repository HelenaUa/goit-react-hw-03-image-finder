// import PropTypes from 'prop-types';
import { GalleryList, GalleryImage} from "./ImageGalleryItem.styled";

export const ImageGalleryItem = ({items}) => {
    return (
        items.map(item => (
        <GalleryList key={item.id}>
           <GalleryImage
                id={item.id}
                src={item.webformatURL}
                alt={item.tags}
               />
        </GalleryList>
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