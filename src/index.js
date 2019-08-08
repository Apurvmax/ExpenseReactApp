import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
//import Counters from './components/counters';
import { Route, Link, BrowserRouter as Router,Switch } from 'react-router-dom';
import EditExpensePage from './Components/EditExpensePage';
import ExpenseDash from './Components/ExpenseDashBoard';
import AddExpensePage from './Components/AddExpensepage';
import HelpExpensePage from './Components/HelpExpense';
import NotFoundPage from './Components/NotFoundPage';
const routing=(
    <Router>
        <Switch>
            <Route path="/" component={ExpenseDash} exact={true} />
            <Route path="/add" component={AddExpensePage}/>
            <Route path="/edit" component={EditExpensePage}/>
            <Route path="/help" component={HelpExpensePage} />
            <Route component={NotFoundPage} />
        </Switch>    
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
