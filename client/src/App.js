import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './App.css';
import AddAdmin from './components/Admin/AddAdmin/AddAdmin';
import AddService from './components/Admin/AddService/AddService';
import ManageReviews from './components/Admin/ManageReviews/ManageReviews';
import ManageServices from './components/Admin/ManageServices/ManageServices';
import OrderList from './components/Admin/OrderList/OrderList';
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
                <Route path="/orderList">
                    <OrderList />
                </Route>
                <Route path="/addService">
                    <AddService />
                </Route>
                <Route path="/addAdmin">
                    <AddAdmin />
                </Route>
                <Route path="/manageServices">
                    <ManageServices />
                </Route>
                <Route path="/manageReviews">
                    <ManageReviews />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
