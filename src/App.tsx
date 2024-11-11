import "./App.css"
import NavBar from "./components/Navbar/NavBar";
import HeadSection from "./components/HeadSection/HeadSection";
import Footer from "./components/Footer/Footer";
export default App;
function App() {
  return (
    <div id="root">
      <nav>
        <NavBar
          websiteName="Games Arena"
          tabs={[
            { name: "Home", ref: "/" },
            { name: "Games List", ref: "/" },
            { name: "News", ref: "/" },
            { name: "Contact Us", ref: "/" },
          ]} />
      </nav>
      <section className="headSection">
        <HeadSection
          content={{
            heroText1: "WELCOME TO GAMESARENA",
            heroText2: "BEST GAMING SITE EVER!",
            heroText3: "Welcome to GamesArena, your ultimate destination for all things gaming! Explore a vast collection of the latest games, and reviews across multiple genres. Whether you're a casual gamer or a competitive pro, GamesArena is where the gaming community comes together to level up!",
            heroImage: "../images/banner-bg.jpg",
            priceTag: "$22",
            offer: "-40%",
          }}
        />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
