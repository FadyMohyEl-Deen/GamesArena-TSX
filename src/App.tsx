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
        <HeadSection/>
      </section>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

