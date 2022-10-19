// import { FC } from "react";
// import { Route, Redirect } from "react-router-dom";
// import { IMoviesProps, IProfileProps } from "../../../utils/interfaces";

// // этот компонент принимает другой компонент в качестве пропса
// // он также может взять неограниченное число пропсов и передать их новому компоненту

// interface IProtectedRouteProps {
//   component: FC;
//   props: IMoviesProps | IProfileProps;
// }

// // const ProtectedRoute: FC<IProtectedRouteProps> =
// const ProtectedRoute =
//   ({ component: Component, ...props }:IProtectedRouteProps) => {
//     return (
//       <Route>
//         {() =>
//           props.loggedIn ? <Component {...props} /> : <Redirect to="/" />
//         }
//       </Route>
//     );
//   };

// export default ProtectedRoute;



import { Route, Redirect } from "react-router-dom";

// этот компонент принимает другой компонент в качестве пропса
// он также может взять неограниченное число пропсов и передать их новому компоненту

// const ProtectedRoute: FC<IProtectedRouteProps> =
const ProtectedRoute =
  ({ component: Component, ...props }:any) => {
    return (
      <Route>
        {() =>
          props.loggedIn ? <Component {...props} /> : <Redirect to="/" />
        }
      </Route>
    );
  };

export default ProtectedRoute;

