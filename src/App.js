import './App.css';
import { Row, homeScreenRows } from './reusable';
import urls from './api/requests';
import Banner from './components/Banner';

function App() {
  return (
    <div className="app">
      <Banner />
      {homeScreenRows.map(({ name, url }) => (
        <Row key={name} title={name} fetchUrl={urls[url]} />
      ))}
    </div>
  );
}

export default App;
