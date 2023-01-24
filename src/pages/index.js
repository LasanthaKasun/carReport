import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

const Home = () => {
  return (
    <div>
      <NavBar/>
      <div className="pt-12 lg:flex">
        <SideBar />
        <div className="w-full h-full p-4 m-8 overflow-y-auto">
          <div data-testid="message" className="flex items-center justify-center p-16 mr-8 text-5xl font-bold" >
            Welcome to the Fixico 2022
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
