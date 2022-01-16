import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export function Start() {
    
  let isAuth = useSelector((state) => state.auth.isAuth);
  
  if (isAuth) {
    return <Navigate to='/phonebook'/>;
  } else {
    return <Navigate to='/login'/>;
  }

};
