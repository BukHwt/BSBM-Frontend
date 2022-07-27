import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import NewBrew from "./components/NewBrew";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/newbrew" element={<NewBrew />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
