import React from "react";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { FaCloudUploadAlt, FaPlus } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

import { FaHome, FaBullhorn, FaEnvelope, FaAddressBook, FaCheckCircle,  FaClipboardList } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactList = () => {
    // Dummy contacts data
    const contacts = [
        {
            id: 1,
            name: "Olivia Rye",
            phone: "5738901234",
            email: "olvia@GiMailShirt.com",
            notes: "olvia@GiMailShirt.com",
            image: "/image.png",
        },
        {
            id: 2,
            name: "Phoenix Baker",
            phone: "4521345436",
            email: "Phoenix@GiMailShirt.com",
            notes: "Phoenix@GiMailShirt.com",
            image: "/image.png",
        },
        {
            id: 3,
            name: "Lara Sinker",
            phone: "4532454321",
            email: "Lara@GiMailShirt.com",
            notes: "Lara@GiMailShirt.com",
            image: "/image.png",
        },
    ];

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Main Sidebar */}
            <aside className="w-50 bg-white shadow-md p-4 flex flex-col justify-between">
                <div>
                    <h1 className="text-2xl font-bold mb-6">Zeeptext</h1>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="border rounded px-2 py-1 mb-4 w-full"
                    />
                    <nav className="space-y-2">
                        <div className="flex items-center space-x-2 cursor-pointer hover:text-purple-700">
                            <FaHome />
                            <span>Home</span>
                        </div>
                        <div className="flex items-center space-x-2 cursor-pointer hover:text-purple-700">
                            <FaBullhorn />
                            <span>Campaign</span>
                        </div>
                        <div className="flex items-center space-x-2 cursor-pointer hover:text-purple-700">
                            <FaEnvelope />
                            <span>Message</span>
                        </div>
                        <div className="flex items-center space-x-2 cursor-pointer font-semibold text-purple-700">
                            <FaAddressBook />
                            <span>Contacts</span>
                        </div>
                        <div className="flex items-center space-x-2 cursor-pointer hover:text-purple-700">
                            <FaCheckCircle />
                            <span>Compliance</span>
                        </div>
                       
                        <Link to="/importContacts" className="flex items-center space-x-2 cursor-pointer hover:text-purple-700">
                            <FaCloudUploadAlt />
                            <span>Import Contacts</span>
                        </Link>

                        
                        <Link to="/mapField" className="flex items-center space-x-2 cursor-pointer hover:text-purple-700">
                            <FaClipboardList />
                            <span>Map Fields</span>
                        </Link>
                    </nav>

                </div>

                {/* Support and Profile Section */}
                <div className="flex items-center space-x-2 mt-4 border-t pt-4">
                    <img
                        src="/image.png"
                        alt="User Avatar"
                        className="w-8 h-8 rounded-full object-cover"
                    />
                    <div>
                        <p className="font-medium">Olivia Rye</p>
                        <p className="text-sm text-gray-500">olivia@zeeptext.com</p>
                    </div>
                </div>

            </aside>

            {/* Contacts Page */}
            <div className="flex-1 flex">
                {/* Contact Lists Sidebar */}
                <aside className="w-50 bg-white shadow-md p-4">
                    <h2 className="text-lg font-semibold mb-4">Contact Lists</h2>
                    <button className="bg-blue-100 text-purple-700 px-3 py-1 rounded mb-4 w-full">
                        + Add New List
                    </button>
                    <ul className="space-y-2">
                        <li className="cursor-pointer hover:text-purple-700 font-medium">All Contacts</li>
                        <li className="cursor-pointer hover:text-purple-700">Customers</li>
                    </ul>
                </aside>

                {/* Main Contact Content */}
                <div className="flex-1 p-6">
                    <h1 className="text-2xl font-bold mb-4">Contacts</h1>

                    {/* Search, Filters, Bulk Upload, Add Contact - All in Same Row */}
                    <div className="flex flex-wrap items-center justify-between mb-4">
                        {/* Search & Filters */}
                        <div className="flex items-center space-x-2">
                            <div className="flex items-center border border-gray-300 rounded px-2 py-1 bg-white">
                                <FaSearch className="text-gray-500" />
                                <input
                                    type="text"
                                    placeholder="Search contacts..."
                                    className="ml-2 outline-none w-64"
                                />
                            </div>
                            <button className="bg-gray-200 px-3 py-1 rounded">Filters</button>
                        </div>


                        {/* Buttons: Bulk Upload & Add Contact */}
                        <div className="flex items-center space-x-2">
                            {/* Bulk Upload Button */}
                            <button className="flex items-center bg-gray-200 px-3 py-1 rounded">
                                <FaCloudUploadAlt className="text-xl" />
                                <span className="ml-2">Bulk Upload</span>
                            </button>

                            {/* Add Contact Button */}
                            <button className="flex items-center bg-purple-700 text-white px-3 py-1 rounded">
                                <FaPlus className="text-xl" />
                                <span className="ml-2">Add Contact</span>
                            </button>
                        </div>

                    </div>

                    {/* Contacts Table */}
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white  rounded shadow">
                            <thead>
                                <tr className="bg-gray-100 text-left">
                                    <th className="py-2 px-4 ">Name</th>
                                    <th className="py-2 px-4 ">Phone Number</th>
                                    <th className="py-2 px-4 ">Email Address</th>
                                    <th className="py-2 px-4 ">Opt-out Status</th>
                                    <th className="py-2 px-4 "></th>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.map((contact) => (
                                    <tr key={contact.id} className="hover:bg-gray-50">
                                        <td className="py-2 px-4 flex items-center space-x-2">
                                            <img
                                                src={contact.image}
                                                alt={contact.name}
                                                className="w-8 h-8 rounded-full object-cover"
                                            />
                                            <span>{contact.name}</span>
                                        </td>
                                        <td className="py-2 px-4">{contact.phone}</td>
                                        <td className="py-2 px-4">{contact.email}</td>
                                        <td className="py-2 px-4">{contact.notes}</td>
                                        <td className="py-2 px-4 flex space-x-2">
                                            <button className="text-gray-600 hover:text-gray-600" title="Edit">
                                                <FaRegEdit />
                                            </button>
                                            <button className="text-gray-600 hover:text-gray-600" title="Delete">
                                                <FaTrashAlt />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>


                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="mt-4 flex justify-center space-x-2">
                        <button className="px-3 py-1 border rounded bg-white shadow">Previous</button>
                        <button className="px-3 py-1 border rounded bg-white shadow">Next</button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ContactList;
