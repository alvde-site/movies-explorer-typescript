import { FC } from "react";
import { Route, Redirect } from "react-router-dom";

// этот компонент принимает другой компонент в качестве пропса
// он также может взять неограниченное число пропсов и передать их новому компоненту

interface IProtectedRouteProps {
  component: React.FC;
}

const ProtectedRoute: FC<IProtectedRouteProps | any> =
  ({ component: Component, ...props }) => {
    return (
      <Route>
        {() =>
          props.loggedIn ? <Component {...props} /> : <Redirect to="/" />
        }
      </Route>
    );
  };

export default ProtectedRoute;
