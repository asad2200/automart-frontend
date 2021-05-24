import './assets/css/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import home from './pages/home';
import glass from './pages/glass';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={home} />
        <Route path="/glass" component={glass} />
      </Switch>
    </Router>
  );
}

export default App;
