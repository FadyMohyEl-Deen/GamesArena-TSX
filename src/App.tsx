import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home";
import GamesList from "./Pages/GamesList";
import News from "./Pages/News";
import ContactUs from "./Pages/ContactUs";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <nav>
          <NavBar
            LogoRef="/images/Logo.png"
            websiteName="Games Arena"
            tabs={[
              { name: "Home", ref: "/" },
              { name: "Games List", ref: "/GamesList" },
              { name: "News", ref: "/News" },
              { name: "Contact Us", ref: "/ContactUs" },
            ]} />
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/GamesList" element={<GamesList />} />
          <Route path="/News" element={<News />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};
export default App;