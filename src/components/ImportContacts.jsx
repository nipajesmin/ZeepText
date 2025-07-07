import { FaAddressBook, FaCloudUploadAlt } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ImportContacts = () => {
    const navigate = useNavigate();
    const [fileName, setFileName] = useState("");

    const handleFileChange = (e) => {
        if (e.target.files.length > 0) {
            setFileName(e.target.files[0].name);
        } else {
            setFileName("");
        }

    };
    const handleNext = () => {
        navigate("/mapField");
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="max-w-md w-full mt-8 p-6 bg-white rounded-lg shadow-md">
                {/* Heading with Icon */}
                <h1 className="text-2xl font-semibold mb-6 flex items-center space-x-2 text-gray-300">
                    <div className="p-2 border-2 border-b-gray-300 rounded-full">
                        <FaAddressBook className="text-2xl text-purple-700" />
                    </div>
                    <span className="text-black">Import Contacts</span>
                </h1>


                {/* Add Contact List */}
                <div className="space-y-4">
                    <p className="font-medium">Add Contact List</p>

                    <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                            <input type="radio" name="contactListOption" defaultChecked />
                            <span>Create a new contact list</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Contact list name"
                            className="border border-gray-300 rounded px-3 py-2 w-full focus:ring-purple-500 focus:border-purple-500"
                            defaultValue="Customer"
                        />
                        <label className="flex items-center space-x-2">
                            <input type="radio" name="contactListOption" />
                            <span>Select an existing contact list</span>
                        </label>
                    </div>

                    {/* Upload */}
                    <div>
                        <p className="font-medium mb-2">Upload</p>
                        <label className="flex items-center justify-center border border-dashed border-purple-400 rounded px-4 py-6 cursor-pointer hover:bg-purple-50">
                            <FaCloudUploadAlt className="text-3xl text-purple-500 mr-2" />
                            <span>{fileName || "Choose the file"}</span>
                            <input
                                type="file"
                                accept=".csv"
                                className="hidden"
                                onChange={handleFileChange}
                            />
                        </label>
                        <ul className="text-sm text-gray-500 mt-2 list-disc pl-5">
                            <li>Must contain at least one column with phone number</li>
                            <li>Must be a .CSV file</li>
                        </ul>
                    </div>

                    {/* Tag */}
                    <div>
                        <p className="font-medium mb-1">Tag</p>
                        <select className="border border-gray-300 rounded px-3 py-2 w-full focus:ring-purple-500 focus:border-purple-500">
                            <option>Select the fields</option>
                        </select>
                    </div>

                    {/* Opt-in Checkbox */}
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" />
                        <span>I confirm all contacts have opted in</span>
                    </label>

                    {/* Buttons */}
                    <div className="flex justify-between mt-4">
                        <button className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-100">
                            Cancel
                        </button>
                        <button
                            className="bg-purple-700 text-white px-6 py-2 rounded"
                            onClick={handleNext}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ImportContacts;
