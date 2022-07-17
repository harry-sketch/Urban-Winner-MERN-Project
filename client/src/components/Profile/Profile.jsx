import React from "react";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user")).name;
  return (
    <div>
      <span className="capitalize"> Hello,😃 {user}</span>
    </div>
  );
};

export default Profile;
