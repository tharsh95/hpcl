
import DashboardBox from "../components/DashboardBox";
import { boxConfigs } from "../config/boxConfig";

const HomePage = () => {
  return (
    <div>
      <nav className="bg-black py-4 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-white text-center">HPCL Green</h1>
        </div>
      </nav>
      <div
        className="min-h-screen p-8 bg-gradient-to-br from-gray-900 to-gray-800"
        style={{
          backgroundImage: `url('images/bg.png')`,
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl font-extrabold text-white">
              Optimize your solar energy usage with our Time-of-Use platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boxConfigs.map((config) => (
              <DashboardBox key={config.id} config={config} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
