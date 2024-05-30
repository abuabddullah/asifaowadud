import { RouterProvider } from "react-router-dom";
import "./App.css";
import StarterBanner from "./components/home/StarterBanner";
import { router } from "./routes/router";

function App() {
  return (
    <>
      <StarterBanner />
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
