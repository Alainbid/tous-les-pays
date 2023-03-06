import React, { useEffect, useState } from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation.js";
import axios from "axios";
import Articles from "../components/Articles";

const Blog = () => {
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
    if (content.length < 24) {
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
      <h1>BLOG</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Nom"
          onChange={(e) => setAuthor(e.target.value)}
          value={author} // pour RAZ de la zone de saisie nom
        />
        <textarea
          style={{ border: erreur ? "2px solid red" : "1px solid black" }}
          placeholder="Vos observations seront les bien venues..."
          onChange={(e) => setContent(e.target.value)}
          value={content}
        ></textarea>
        {erreur && <p>Veuillez écrire au moins 24 caractères</p>}
        <input type="submit" value="Envoyer à Alain" />
      </form>
      <ul>
        {data.map((articles) => (
          <Articles key={articles.id} lesArticles={articles} />
        ))}
      </ul>
    </div>
  );
};

export default Blog;
