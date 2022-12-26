import Features from "../components/features/Features";
import Footer from "../components/footer/Footer";
import Home from "../components/home/Home";
import Setting from "../components/setting/Setting";

function Landing() {
  return (
    <div>
      <Home />
      <Setting />
      <Features />
      <Footer />
    </div>
  );
}

export default Landing;
