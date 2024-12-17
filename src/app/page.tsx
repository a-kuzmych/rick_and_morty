export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/home.jpg')" }}>
      
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative text-white text-center p-6 max-w-3xl transition-transform transform hover:scale-105">
        <h1 className="text-5xl font-bold mb-6 hover:text-indigo-500">
          Welcome to the Rick & Morty Universe!
        </h1>
        <p className="text-lg leading-relaxed mb-8 hover:text-indigo-300">
          Explore the adventures of the genius scientist Rick Sanchez and his kind-hearted but easily influenced grandson Morty. 
          Discover characters, locations, episodes, and more from this thrilling animated series. Get ready for interdimensional travel, 
          mind-bending plots, and cosmic humor!
        </p>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-all duration-300">
          Start Exploring
        </button>
      </div>
    </div>
  );
}

