import React from "react";
import { useSelector } from "react-redux";
import { FaRegUserCircle } from "react-icons/fa";

const Profile = () => {
  const user = useSelector((state) => state.user);

  return (
    <div className="p-4">
      {/* Profile Picture */}
      <div className="w-20 h-20 bg-gray-200 flex items-center justify-center rounded-full overflow-hidden drop-shadow-sm">
        {user.avatar ? (
          <img
            alt={user.name}
            src={user.avatar}
            className="w-full h-full object-cover"
          />
        ) : (
          <FaRegUserCircle size={65} />
        )}
      </div>

      {/* User Details */}
      <div className="mt-4">
        <div className="mb-2">
          <label className="font-semibold">Name:</label>
          <p className="p-2 bg-blue-50 rounded">{user.name || "N/A"}</p>
        </div>
        <div className="mb-2">
          <label className="font-semibold">Email:</label>
          <p className="p-2 bg-blue-50 rounded">{user.email || "N/A"}</p>
        </div>
        <div>
          <label className="font-semibold">Mobile:</label>
          <p className="p-2 bg-blue-50 rounded">{user.mobile || "N/A"}</p>
        </div>
        <div>
          <label className="font-semibold">About</label>
          <p className="p-2 bg-blue-50 rounded">{user.mobile || "N/A"}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
