import { Route, Routes, BrowserRouter } from "react-router-dom";
import CreateUser from "./pages/CreateUser";
import UpdateUser from "./pages/UpdateUser";
import Home from "./pages/Home";
import Header from "./header/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <Header />
                <Home />
              </main>
            }
          />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/update" element={<UpdateUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
