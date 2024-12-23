import FormInput from "../components/FormInput";

const SolarForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-[#2f4899] p-8 flex items-center justify-center">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Predict Energy Consumption
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <FormInput
            label="Installation Type"
            type="select"
            options={['Residential', 'Commercial', 'Industrial']}
          />
          <FormInput label="System Size (kW)" type="number" />
          <FormInput label="Location" type="text" />
          <FormInput label="Expected Monthly Usage (kWh)" type="number" />

          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit Application
          </button>
        </form>
        <h2 className="text-center mt-8">Predicted Consumption: kW</h2>
      </div>
    </div>
  );
};

export default SolarForm;