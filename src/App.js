import './assets/css/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from './pages/Home';
import Glass from './pages/Glass';
import AutoParts from './pages/AutoParts';
import Color from './pages/Color';
import Footer from './components/Footer';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/glass" component={Glass} />
        <Route path="/auto-parts" component={AutoParts} />
        <Route path="/colour" component={Color} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
