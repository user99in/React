import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./component/Header";
import FeaturedPosts from "./pages/FeaturedPosts";
import Home from "./pages/Home";
import AuthorIntro from "./pages/AuthorIntro";
 
// import About from "./pages/About";
// import Skills from "./pages/Skills";
// import Projects from "./pages/Projects";
// import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      {/* Header (Navbar + Hero) */}
      <Header />

      {/* Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
               
              <FeaturedPosts />
              <AuthorIntro />
            </>
          }
        />
        {/* Future Routes */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/skills" element={<Skills />} /> */}
        {/* <Route path="/projects" element={<Projects />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
