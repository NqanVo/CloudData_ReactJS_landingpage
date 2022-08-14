import Analytics from "./Components/Analytics/Analytics";
import ListCards from "./Components/Cards/ListCards";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Newsletter from "./Components/Newsletter/Newsletter";

const Reponsive = 'container max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto';

function App() {
  return (
    <main>
      <div className={Reponsive}>
        <Navbar />
      </div>
      <div className={Reponsive}>
        <Hero />
      </div>
      <div className="bg-white">
        <Analytics />
      </div>
      <div className={Reponsive}>
        <Newsletter />
      </div>
      <div className='bg-white'>
        <ListCards></ListCards>
      </div>
      <div className={Reponsive}>
        <Footer />
      </div>
    </main>
  );
}

export default App;
