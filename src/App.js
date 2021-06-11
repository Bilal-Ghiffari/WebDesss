import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'Assets/css/app.css';
import Homepages from 'Pages/Homepages';
import News from 'Pages/News';
import NewsItem from 'Pages/NewsItem';
import AboutUs from 'Pages/AboutUs';
import Gallery from 'Pages/Gallery';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepages} />
          <Route path="/AboutUs" component={AboutUs} />
          <Route exact path="/News" component={News} />
          <Route path="/News/:url/:title/:id" component={NewsItem} />
          <Route path="/Gallery" component={Gallery} />
        </Switch>
      </Router>
      </div>
  );
}

export default App;
