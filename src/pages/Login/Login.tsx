import { useDispatch } from "react-redux";
import { getMorty } from "../../services/auth.services";
import { createUser } from "../../redux/states/user";
import { useNavigate } from "react-router-dom";
import { PrivateRoutes, Roles } from "../../models";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async () => {
    try {
      const result = await getMorty();

      /*Harcodeado al ingresar el Rol, se puede cambiar a ADMIN o hacer su propia configuracion de rutas por roles*/
      dispatch(createUser({ ...result, rol: Roles.USER }));
      
      /* 
        Me va a mandar a una url con la definicion de: /private/dashboard,
        si le mandamos como Private del objeto de Private Routes 
      */
      navigate(`/${PrivateRoutes.Dashboard}`, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button onClick={login}>Login</button>
    </>
  );
};

export default Login;
