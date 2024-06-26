import React from "react";
import { useOutletContext } from "react-router-dom";

interface IFollowersContext {
  nameOfMyUsers: string;
}

const Followers = () => {
  const { nameOfMyUsers } = useOutletContext<IFollowersContext>();
  return <h1>Here is {nameOfMyUsers}'s Followers</h1>;
};

export default Followers;
