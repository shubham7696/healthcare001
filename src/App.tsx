import { RouterProvider } from "react-router-dom";
import AppRoutes from "./base/routes/PageRoutes";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={AppRoutes}>
      
      </RouterProvider>
    </>
  );
}

export default App;
