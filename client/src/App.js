import './App.css';

import {
  Route,
  Routes,
} from "react-router-dom";

import Layout from "./layouts/Layout"

import Home from  "./pages/Home"
import RestaurantList from "./pages/RestaurantList";
import Users from "./pages/Users"
import NotFound from './pages/NotFound';


function App() {
  return (
    <div className="App">
        <Layout>
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="restaurants" element={<RestaurantList />} />
          <Route path="users" element={<Users />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

        </Layout>
    </div>
  );
}

export default App;
