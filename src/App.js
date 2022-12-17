import "./App.css";
import HomePage from "./components/home/HomePage";
import Layout from "./components/layout/Layout";
import { Route, Routes, Navigate } from "react-router-dom";
import PostPage from "./components/Posts/PostPage";
import CompanyPage from "./components/Companies/CompanyPage";
import SPCompanies from "./components/Companies/SPCompanies";
import SPPosts from "./components/Companies/SPCompanies";
import ScrollToTop from "./components/shared/ScrollToTop";

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<SPPosts />} />
        <Route path="/companies" element={<SPCompanies />} />
        <Route path="/posts/:slug" element={<PostPage />} />
        <Route path="/companies/:slug" element={<CompanyPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
}

export default App;
