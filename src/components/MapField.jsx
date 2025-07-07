import { FaClipboardList } from "react-icons/fa";

const MapField = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-md p-6 m-6">
        {/* Header with Icon */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 border-4 border-gray-300 rounded-full">
            <FaClipboardList className="text-2xl text-purple-500" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800">Map Fields</h2>
        </div>

        <p className="text-sm text-gray-500 mb-6">
          Select the fields that you want to map
        </p>

        {/* Fields Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { label: "Phone Number*", required: true },
            { label: "Mobile Number" },
            { label: "First Name" },
            { label: "Last Name" },
            { label: "Country" },
            { label: "City" },
            { label: "State" },
            { label: "Zip code" },
            { label: "Email" },
            { label: "Company" },
          ].map((field, idx) => (
            <div key={idx}>
              <label className="block text-gray-700 text-sm mb-1">
                {field.label}
              </label>
              <select
                className="border border-gray-300 rounded px-3 py-2 w-full focus:ring-purple-500 focus:border-purple-500"
                defaultValue=""
              >
                <option value="">Select the fields</option>
                {/* You can populate options dynamically here */}
              </select>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MapField;

