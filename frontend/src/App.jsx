
import Mainroutes from "./routes/mainroutes";
import Navlink from "./components/Navlink";


const App = () => {
 

  return (
    <div className="text-white bg-black h-screen w-screen">
      <Navlink />
      <Mainroutes />
    </div>
  );
};

export default App;
