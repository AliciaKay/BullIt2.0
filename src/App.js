import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import {NavHeader} from './Components/NavHeader'
import {ThisWeek} from './Components/ThisWeek'
import {Today} from './Components/Today'
import {AddItem} from './Components/AddItem'
import {EditItem} from './Components/EditItem'


function App() {
  return (
    <Router>
    <div className="App">
      <React.Fragment>
        <NavHeader />
      </React.Fragment>
      <Switch>
        <Route path={"/thisweek"} component={ThisWeek} />
        <Route path={"/today"} component={Today} />
        <Route path={"/additem"} component={AddItem} />
        <Route path={"/editItem/:itemId"} component={EditItem} />
        <Redirect to="/" />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
