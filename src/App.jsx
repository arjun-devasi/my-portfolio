import SocialLink from "./components/SocialLink";
import Header from "./components/header";
import Home from "./components/home";
import About from "./components/About";
import Project from "./components/Project";
import Experiance from "./components/experiance";
// import Contact from "./components/Contact";
import Contact from "./components/ContactPage";
import Footer from "./components/footer";
export default function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Project />
      <Experiance />
      <Contact />
      <Footer />
      <SocialLink />
    </>
  );
}
