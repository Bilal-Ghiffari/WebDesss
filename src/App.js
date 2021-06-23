import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'Assets/css/app.css';
import Homepages from 'Pages/Homepages';
import News from 'Pages/News';
import NewsItem from 'Pages/NewsItem';
import AboutUs from 'Pages/AboutUs';
import Gallery from 'Pages/Gallery';
import GalleryItem from 'Pages/GalleryItem';
import NotFound from 'Pages/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepages} />
          <Route path="/about" component={AboutUs} />
          <Route exact path="/news" component={News} />
          <Route path="/news/:url/:title/:id" component={NewsItem} />
          <Route exact path="/gallery" component={Gallery} />
          <Route path="/gallery/:url/:title/:id" component={GalleryItem} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
      </div>
  );
}

export default App;
