import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./component/Header";
import FeaturedPosts from "./pages/FeaturedPosts";
import Home from "./pages/Home";
import AuthorIntro from "./pages/AuthorIntro";
import BlogPost from "./pages/BlogPost";
import Post from "./pages/Post";
import Collaborate from "./pages/Collaborate";
import Footer from "./component/Footer";

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
              <BlogPost />
              <Post />
              <Collaborate />
              <Footer />
            </>
          }
        />
     
      </Routes>
    </BrowserRouter>
  );
}

export default App;
