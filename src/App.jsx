import { Routes, Route } from "react-router-dom";
import UserHome from "./pages/user/UserHome.jsx";
import AdminHome from "./pages/admin/AdminHome.jsx";

import Basketball from "./components/user/Basketball.jsx";
import Cricket from "./components/user/Cricket.jsx";
import Football from "./components/user/Football.jsx";
import Volleyball from "./components/user/Volleyball.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserHome />} />
      <Route path="/admin" element={<AdminHome />} />

      <Route path="/basketball" element={<Basketball />} />
      <Route path="/cricket" element={<Cricket />} />
      <Route path="/football" element={<Football />} />
      <Route path="/volleyball" element={<Volleyball />} />
    </Routes>
  );
}

export default App;
