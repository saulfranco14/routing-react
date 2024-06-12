import { useNavigate, useLocation } from "react-router-dom";
import { removeLocalStorage } from "../../helpers";
import { PublicRoutes } from "../../models";
import { useDispatch } from "react-redux";
import { resetUser } from "../../redux/states/user";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const handleLogout = () => {
    removeLocalStorage("user");
    dispatch(resetUser());
    navigate(PublicRoutes.LOGIN);
  };
  
  if (location.pathname === `/${PublicRoutes.LOGIN}`) return null;

  return (
    <>
      <button onClick={handleLogout} style={{ margin: "1rem" }}>
        Log out
      </button>
    </>
  );
};

export default Logout;
