import "./App.css";
import UserInfoContext from "./context/UserInfoContext";
import { ThemeProvider } from "./context/ThemeProvider";
import BlogPage from "./components/BlogPage";

function App() {
  const loggesinUserJohn = {
    username: "JohnDoe",
    isAdmin: false,
    isBased: true,
    post: {
      title: "Understanding Context API in React",
      content:
        "Context API allows you to share values between components without having to pass props down manually at every level.",
    },
    comments: [
      { id: 1, text: "Great post!", author: "Alice" },
      { id: 2, text: "Very informative, thanks!", author: "Bob" },
    ],
  };
  const loggedinUserAdmin = {
    username: "admin",
    isAdmin: true,
    isBased: true,
    post: {
      title: "Understanding Context API in React",
      content:
        "Context API allows you to share values between components without having to pass props down manually at every level.",
    },
    comments: [
      { id: 1, text: "Great post!", author: "Alice" },
      { id: 2, text: "Very informative, thanks!", author: "Bob" },
    ],
  };
  return (
    <div>
      <ThemeProvider>
        <UserInfoContext.Provider value={loggedinUserAdmin}>
          <h1>Context API Example</h1>
          <BlogPage />
        </UserInfoContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
