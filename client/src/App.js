import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import NoPage from './pages/NoPage';
import EditProfile from './pages/EditProfile';
import Search from './pages/Search';
import Show from './pages/Show';
import {UserProvider} from './context/UserContext'
/**
 * Represents the app.
 * Has a router which determines which page is displayed for a given path.
 * @returns our webapp.
 */
function App() {
  return (
    <UserProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<Profile />} />
          <Route path="edit" element={<EditProfile />} />
          <Route path="search/:name" element={<Search />} />
          <Route path="show/:id" element={<Show />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </UserProvider>
  );
}

export default App;
