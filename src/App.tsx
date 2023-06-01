import { RouterProvider } from "react-router-dom";
import router from './router/router'
import ReposProvider from "./context/repos/ReposProvider";
import UserProvider from "./context/user/User.Provider";

function App() {

  return (
    <UserProvider>
      <ReposProvider>
        <RouterProvider router={router}
          fallbackElement={<></>} />
      </ReposProvider>
    </UserProvider>

  );
}

export default App;
