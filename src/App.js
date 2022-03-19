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
      <Row title="Trending" fetchUrl={urls.fetchTrending}></Row>
    </div>
  );
}

export default App;
