import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* <Route path="/feed" element={<Feed />} /> */}

        {/* <Route path="/profile" element={<ProfilePage />} /> */}

        {/* <Route path="/feed/:id" element={<PostDetails />} /> */}

        {/* ✅ fixed param name to match useParams in UserProfilePage */}
        {/* <Route path="/profile/:userId" element={<UserProfilePage />} /> */}

        {/* <Route path="/about" element={<AboutPage />} /> */}

        {/* <Route path="/create" element={<CreatePost />} /> */}

        {/* <Route path="/settings" element={<Settings />} /> */}
        {/* <Route path="/chat" element={<ChatPage />} /> */}

        {/* <Route path="/chat/:userId" element={<ChatPage />} /> */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
