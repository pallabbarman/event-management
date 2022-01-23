import 'bootstrap/dist/css/bootstrap.min.css';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './App.css';
import AddAdmin from './components/Admin/AddAdmin/AddAdmin';
import AddService from './components/Admin/AddService/AddService';
import AllUsers from './components/Admin/AllUsers/AllUsers';
import ManageReviews from './components/Admin/ManageReviews/ManageReviews';
import ManageServices from './components/Admin/ManageServices/ManageServices';
import OrderList from './components/Admin/OrderList/OrderList';
import Contact from './components/Contact/Contact';
import Book from './components/Customer/Book/Book';
import Booking from './components/Customer/Booking/Booking';
import BookingList from './components/Customer/BookingList/BookingList';
import Review from './components/Customer/Review/Review';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Register from './components/Login/Register/Register';
import ResetPassword from './components/Login/ResetPassword/ResetPassword';
import Profile from './components/Profile/Profile';
import AuthProvider from './context/AuthProvider';

function App() {
    return (
        <AuthProvider>
            <Toaster />
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/reset" element={<ResetPassword />} />
                    <Route
                        path="/dashboard"
                        element={
                            <PrivateRoute>
                                <Dashboard />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/profile"
                        element={
                            <PrivateRoute>
                                <Profile />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/book/:_id"
                        element={
                            <PrivateRoute>
                                <Book />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/booking"
                        element={
                            <PrivateRoute>
                                <Booking />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/review"
                        element={
                            <PrivateRoute>
                                <Review />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/bookingList"
                        element={
                            <PrivateRoute>
                                <BookingList />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/orderList"
                        element={
                            <PrivateRoute>
                                <OrderList />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/addService"
                        element={
                            <PrivateRoute>
                                <AddService />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/addAdmin"
                        element={
                            <PrivateRoute>
                                <AddAdmin />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/allUsers"
                        element={
                            <PrivateRoute>
                                <AllUsers />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/manageServices"
                        element={
                            <PrivateRoute>
                                <ManageServices />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/manageReviews"
                        element={
                            <PrivateRoute>
                                <ManageReviews />
                            </PrivateRoute>
                        }
                    />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
