import React, { useEffect, useState } from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation.js";
import axios from "axios";
import Articles from "../components/Articles";

const Login = () => {
  const [content, setContent] = useState("");
  const [erreur, setErreur] = useState(false);
  const [data, setData] = useState([]);
  const [author, setAuthor] = useState("");

  const getData = () => {
    axios
      .get("http://localhost:3004/articles")
      .then((res) => setData(res.data));
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.length < 6) {
      setErreur(true);
    } else {
      setErreur(false);
      axios.post("http://localhost:3004/articles", {
        author,
        content,
        date: Date.now(),
      });
      setAuthor("");
      setContent("");
      getData();
    }
  };

  return (
    <div className="blog-container">
      <Logo />
      <Navigation />
      <h1>LOGIN</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Nom"
          onChange={(e) => setAuthor(e.target.value)}
          // value={author} // pour RAZ de la zone de saisie nom
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setAuthor(e.target.value)}
          // value={author} // pour RAZ de la zone de saisie nom
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setAuthor(e.target.value)}
          // value={author} // pour RAZ de la zone de saisie nom
        />

        {erreur && <p>Veuillez écrire au moins 6 caractères</p>}
        <input type="submit" value="Envoyer" />
      </form>
      <ul>
        {data.map((articles) => (
          <Articles key={articles.id} lesArticles={articles} />
        ))}
      </ul>
    </div>
  );
};

export default Login;
