import { useEffect, useState } from "react";
import { fetchImages } from "./api";
function Header() {
    return (
      <header className="hero is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">課題三回目"ランダムCAT API"</h1>
          </div>
        </div>
      </header>
    );
}
  
  function Image(props) {
    const {urls} = props;
    return (
      <div className="card">
        <div className="card-image">
          <figure className="image">
          <img src={props.urls} alt="cute cat!" />
          </figure>
        </div>
      </div>
    );
  }
  function Loading() {
    return <p>Loading...</p>;
  }
  
  function Main() {
    const [urls, setUrls] = useState(null);
    useEffect(() => {
        fetchImages().then((urls) => {
            setUrls(urls);
        });
      }, []);
    return (
      <main>
        <section className="section">
          <div className="container">

          </div>
        </section>
        <section className="section">
          <div className="container">
          <Image urls={urls} />
          </div>
        </section>
      </main>
    );
  }
  
  function Footer() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <p>日本大学文理学部情報科学科</p>
          <p>5421066 石部秀真</p>
          <p>
            <a href="https://www.jsonapi.co/public-api/RandomCat">Donate to randomCat API</a>
          </p>
        </div>
      </footer>
    );
  }
  
  function App() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
  
  export default App;