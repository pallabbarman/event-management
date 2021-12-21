import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './App.css';
import Book from './components/Customer/Book/Book';
import BookingList from './components/Customer/BookingList/BookingList';
import Review from './components/Customer/Review/Review';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Home from './components/Home/Home/Home';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>
                <Route path="/book">
                    <Book />
                </Route>
                <Route path="/review">
                    <Review />
                </Route>
                <Route path="/bookingList">
                    <BookingList />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
