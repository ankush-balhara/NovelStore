import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import AllBooks from "./pages/AllBooks";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import AllOrders from "./pages/AllOrders";
import AddBook from "./pages/AddBook";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewBookDetails from "./components/ViewBookDetails/ViewBookDetails";
import Favourites from "./components/Profile/Favourites";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { authActions } from "./store/auth";
import OrderHistory from "./components/Profile/OrderHistory";
import Settings from "./components/Profile/Settings";
import UpdateBook from "./pages/UpdateBook";

function App() {
  const dispatch = useDispatch();
  const role = useSelector((state) => state.auth.role);

  useEffect(() => {
    if (
      localStorage.getItem("id") &&
      localStorage.getItem("id") &&
      localStorage.getItem("id")
    ) {
      dispatch(authActions.login());
      dispatch(authActions.changeRole(localStorage.getItem("role")));
    }
  }, []);
  return (
    <div className="bg-black text-white  overflow-clip">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  path="/AllBooks" element={<AllBooks />} />
        <Route  path="/Cart" element={<Cart />} />

          <Route exact path="/Profile" element={<Profile />} >

           {role === "user"  ? <Route index element={<Favourites />} /> :<Route index element={<AllOrders />} /> }

          {role ==="user" ?  <Route path="/Profile/order-history" element={<OrderHistory />} /> :  <Route path="/Profile/add-book" element={<AddBook />} />}
          
           <Route path="/Profile/settings" element={<Settings />} />
            </Route>


        <Route exact path="/Signup" element={<SignUp />} />
        <Route exact path="/Signin" element={<SignIn />} />
        <Route exact path="/update-book/:id" element={<UpdateBook />} />
        {/* <Route path="/order-history/:id" component={OrderHistory} /> */}


        <Route
          exact
          path="/view-book-details/:id"
          element={<ViewBookDetails />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
