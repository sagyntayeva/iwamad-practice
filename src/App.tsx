import { Routes, Route } from "react-router";
import { LikesProvider } from "./context/LikesProvider";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import RegisterPage from "./pages/RegisterPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <LikesProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </LikesProvider>
  );
}

export default App;
