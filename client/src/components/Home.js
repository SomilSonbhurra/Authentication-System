import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const { logoutUser } = useContext(AuthContext);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-pink-500 to-orange-400 text-white">
      <h1 className="text-5xl font-bold mb-6">Home Page</h1>
      <button onClick={logoutUser} className="bg-white text-pink-600 px-6 py-2 rounded-xl font-semibold hover:bg-gray-100">
        Logout
      </button>
    </div>
  );
};

export default Home;
