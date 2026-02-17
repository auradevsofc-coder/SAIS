import { Toaster } from "sonner";
import { Login } from "./pages/Login";

function App() {
  return (
    <>
      <Toaster position="top-right" richColors />
      <Login />
    </>
  );
}

export default App;
