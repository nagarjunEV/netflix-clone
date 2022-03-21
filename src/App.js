import './App.css';
import { Row } from './reusable';
import urls from './api/requests';

function App() {
  return (
    <div className="App">
      <Row
        title="Netflix Orginials"
        fetchUrl={urls.fetchNetflixOriginals}
      ></Row>
      <Row
        title="Trending"
        fetchUrl={urls.fetchTrending}
        isLargeRow={true}
      ></Row>
      <Row title="Top Rated" fetchUrl={urls.fetchTopRated}></Row>
      <Row title="Action" fetchUrl={urls.fetchActionMovies}></Row>
      <Row title="Comedy" fetchUrl={urls.fetchComedyMovies}></Row>
      <Row title="Horror" fetchUrl={urls.fetchHorrorMovies}></Row>
      <Row title="Romance" fetchUrl={urls.fetchRomanceMovies}></Row>
      <Row title="Documantaries" fetchUrl={urls.fetchDocumantaries}></Row>
    </div>
  );
}

export default App;
