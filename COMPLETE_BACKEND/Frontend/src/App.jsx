import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreatePost from "./pages/CreatePost";
import Feed from "./pages/Feed";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreatePost />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/about" element={<h1>About Us</h1>} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </Router>
  );
};

export default App;