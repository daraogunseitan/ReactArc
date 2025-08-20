import { createContext } from "react";

const UserInfoContext = createContext({
  username: "Guest",
  isAdming: false,
  isBased: false,
});

export default UserInfoContext;
