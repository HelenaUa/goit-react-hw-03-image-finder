export default function fetchImages(query, page = 1) {
        const KEY = "32997902-3b59b8944b64f8408d8a5fafd";
        const BASE_URL = "https://pixabay.com/api/";

    return fetch(`${BASE_URL}?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`)
        .then(res => res.json());
        // .then(console.log);
      // .then(data => this.setState({ data }))
      // .finally(() => this.setState({loading: false}));
};


// export default function fetchImages(query, page = 1) {
//   const url = 'https://pixabay.com/api/';
//   const key = '32978016-3960e3f75e2ebb9dbe039fb54';
//   const filter = `image_type=photo&min_width=800&orientation=horizontal&safesearch=true&per_page=12&page=${page}`;

//   return fetch(`${url}?key=${key}&q=${query}&${filter}`).then(response =>
//     response.json()
//   );
// }