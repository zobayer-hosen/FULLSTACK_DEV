import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import CreatePost from "./pages/CreatePost";
import Feed from "./pages/Feed";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/feed" replace />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="*" element={<Navigate to="/feed" replace />} />
      </Routes>
    </Router>
  );
};

export default App;