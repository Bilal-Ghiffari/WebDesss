import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'Assets/css/app.css';
import Homepages from 'Pages/Homepages';
import News from 'Pages/News';
import NewsItem from 'Pages/NewsItem';
import AboutUs from 'Pages/AboutUs';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepages} />
          <Route path="/AboutUs" component={AboutUs} />
          <Route path="/news" component={News} />
          <Route path="/news-item" component={NewsItem} />
        </Switch>
      </Router>
      </div>
  );
}

export default App;
