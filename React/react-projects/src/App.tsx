import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Posts from "./projects/PaginatedPosts/Posts";
import UserProfileLists from "./projects/FetchUserProfiles/UserProfileLists";
import Todo from "./projects/TodoApp/App";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/fetch-profiles" element={<UserProfileLists />} />
        <Route path="/paginated-posts" element={<Posts />} />
        <Route path="/todo-app" element={<Todo />} />
      </Routes>
    </Router>
  );
}

export default App;
