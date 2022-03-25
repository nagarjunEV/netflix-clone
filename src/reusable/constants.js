const homeScreenRows = [
  { name: 'NetflixOriginals', url: 'fetchNetflixOriginals', isLargeRow: false },
  { name: 'Trending', url: 'fetchTrending', isLargeRow: true },
  { name: 'Top', url: 'fetchTopRated', isLargeRow: false },
  { name: 'Action', url: 'fetchActionMovies', isLargeRow: false },
  { name: 'Comedy', url: 'fetchComedyMovies', isLargeRow: false },
  { name: 'Horror', url: 'fetchHorrorMovies', isLargeRow: false },
  { name: 'Romance', url: 'fetchRomanceMovies', isLargeRow: false },
  { name: 'Documantaries', url: 'fetchDocumantaries', isLargeRow: false },
];

export default homeScreenRows;
