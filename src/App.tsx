import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import BrewPage from "./components/BrewPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HireMe from "./components/HireMe";
import Main from "./components/Main";
import NewBrew from "./components/NewBrew";
import YourBrews from "./components/YourBrews";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/newbrew" element={<NewBrew />} />
          <Route path="/yourbrews/:authorUID" element={<YourBrews />} />
          <Route path="/hireme" element={<HireMe />} />
          <Route path="/:id" element={<BrewPage />} />
          <Route path="/editbrew" element={<NewBrew />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
