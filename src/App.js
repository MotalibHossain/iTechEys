import "./App.css";
import BlogPost from "./components/BlogPost/BlogPost";
// Components import
import Navigation from "./components/Navigation/Navigation";

function App() {
    return (
        <div className="App">
            <Navigation />
            <hr />
            <BlogPost />
        </div>
    );
}

export default App;
