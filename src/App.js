import {Welcome, Jokes} from './components/index.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default () =>  <Router>
                          <Switch>
                              <Route exact path="/">
                                  <Welcome />
                              </Route>
                              <Route path="/jokes">
                                  <Jokes />
                              </Route>
                          </Switch>
                        </Router>    