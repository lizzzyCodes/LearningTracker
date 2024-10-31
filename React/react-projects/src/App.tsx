import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import UserProfile from "./projects/FetchUserProfiles/UserProfile";
import Posts from "./projects/PaginatedPosts/Posts";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/fetch-profiles" element={<UserProfile />} />
        {/* Customizing Item / Order data will get rendered by ID*/}
        <Route path="/paginated-posts" element={<Posts />} />
      </Routes>
    </Router>
  );
}

export default App;
