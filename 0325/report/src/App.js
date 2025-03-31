import Header from "./component/header/header"
import Footer from "./component/footer/footer";
import Body from "./component/body/body"
import Comment from "./component/comment/commentList";
import './App.css';

function App() {
  return (
    <div>
      <nav>
        <Header />
      </nav>

      <div id="main">
        <div id="body">
          <Body />
        </div>
        <div id="comment">
          <Comment />
        </div>
      </div>

      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
