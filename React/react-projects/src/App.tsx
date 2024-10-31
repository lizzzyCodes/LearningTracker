import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/fetch-profiles" element={<Menu />} />
        {/* Customizing Item / Order data will get rendered by ID*/}
        <Route path="/paginated-posts" element={<MenuItem />} />
      </Routes>
    </Router>
  );
}
}

export default App;
