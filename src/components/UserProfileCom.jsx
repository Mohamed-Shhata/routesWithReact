import React, { useEffect, useState } from "react";
import { getUserByID } from "../Api-Data";
import { useParams } from "react-router-dom";
import UserProfile from "../pages/UserProfile";

function UserProfileCom() {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  useEffect(() => {
    getUserByID(id).then((res) => {
      setUser(res.data);
    });
  }, []);

  return (
    <>
      <UserProfile user={user} />
    </>
  );
}

export default UserProfileCom;
