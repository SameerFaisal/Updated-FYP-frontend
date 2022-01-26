import "./App.css";
import Navbar from "./components/Navbar";
import { Route,Routes } from "react-router";

import Home from "./components/Home";
import { BrowserRouter as Router} from "react-router-dom";

import About from "./components/About";
import WebForm from "./components/WebForm";
import WebFormDetails from "./components/WebFormDetails";
import UserStoryInput from "./components/UserStoryInput";

function App() {
  return (
    <Router>
      <Navbar title="PRO-VISION" profileID={1426363} user="Kevin Smith" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/newform" element={<WebForm />} />
        <Route path="/webformdetails" element={<WebFormDetails/>}/>
        <Route path="/userstory" element={<UserStoryInput/>}/>

      </Routes>
    </Router>
  );
}

export default App;
