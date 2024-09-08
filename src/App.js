import "./App.css";
import Header from "./component/header";
import Body from "./component/body/body";
import Places from "./component/places/places";
import Description from "./component/description/description";
import User from "./component/users/user";
import Footer from "./component/footer";

function App() {
  return (
    <div className="App relative overflow-hidden">
      <div className="relative h-screen">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/IMG_1702.MOV"
          autoPlay
          loop
          muted
        />
        
        <div className="fixed top-0 left-0 w-full z-30">
          <Header />
        </div>

        <div className="absolute inset-x-0 bottom-0 p-4 text-center text-white z-10 bg-opacity-50 flex flex-col items-center ">
          <h3 className="text-4xl font-bold">Travel with us</h3>
          <img src="/arrow.png" alt="Arrow" className="w-10 h-10 mt-2" />
        </div>
      </div>
      
      <div className="relative z-20 mt-4 mx-auto max-w-4xl pt-16"> {/* Add pt-16 to offset content below the fixed header */}
        <div className="w-full max-w-2xl mx-auto">
          <Body />
        </div>
      </div>
      
      <div>
        <Places />
      </div>
      <div className="pt-0">
        <Description/>
      </div>
      <div className="pt-0">
        <User/>
      </div>
      <div className="pt-0">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
