import { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route } from "react-router-dom";
import "./App.css";
import { AuthGuard } from "./guards";
import { PrivateRoutes, PublicRoutes, Roles } from "./models";
import { RoutesWithNotFound } from "./helpers";
import { Provider } from "react-redux";
import store from "./redux/store";
import Logout from "./components/Logout/Logout";
import RoleGuard from "./guards/rol.guard";
import { Home } from "./pages/Home";

const Login = lazy(() => import("./pages/Login/Login"));
const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));

function App() {
  return (
    <>
      <Suspense fallback={<>Cargando...</>}>
        <Provider store={store}>
          <BrowserRouter>
            <RoutesWithNotFound>
              <Route
                path="/"
                element={<Navigate to={PrivateRoutes.Private} />}
              />
              <Route element={<RoleGuard rol={Roles.ADMIN} />}>
                <Route element={<AuthGuard />}>
                  <Route
                    path={`${PrivateRoutes.Dashboard}`}
                    element={<Dashboard />}
                  />
                </Route>
              </Route>
              <Route path={PublicRoutes.LOGIN} element={<Login />} />
              <Route path={PrivateRoutes.Home} element={<Home />} />
            </RoutesWithNotFound>
            <Logout />
          </BrowserRouter>
        </Provider>
      </Suspense>
    </>
  );
}

export default App;
