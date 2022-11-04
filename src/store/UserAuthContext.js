import { createContext, useState } from "react";

// create an AuthContext to serve as a database
export const AuthContext = createContext({
  user: {},
  login: () => {},
  logout: () => {},
});

// create an AuthContextProvider which houses the AuthContext
const AuthContextProvider = ({ children }) => {
  // create usestate called current user to store information about current user
  const [currentUser, setCurrentUser] = useState([]);

  /* create functions for login and logout to login and logout the user irrespective
     of user location on the web page*/
  const login = (user) => {
    setCurrentUser(user);
  };
  const logout = () => {
    setCurrentUser({});
  };

  // The value makes your react application keep track of details users that login and out
  const value = {
    user: currentUser,
    login: login,
    logout: logout,
  };

  //   give the provider a value prop which is value = {value}
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};


export default AuthContextProvider