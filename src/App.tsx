import { RouterProvider } from "react-router-dom";
import router from './router/router'
import ReposProvider from "./context/repos/ReposProvider";

function App () {

  return (
    <ReposProvider>
      <RouterProvider router={router}
      fallbackElement={<></>} />
    </ReposProvider>
  );
}

export default App;
