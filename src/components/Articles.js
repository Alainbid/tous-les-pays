import axios from "axios";
import React, { useState } from "react";

const Articles = ({ lesArticles }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState("");

  const dateFormater = (date) => {
    let newDate = new Date(date).toLocaleString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
    return newDate;
  };

  const handelEdit = () => {
    const data = {
      content: editContent ? editContent : lesArticles.content,
      author: lesArticles.author,
      date: lesArticles.date,
      updatedDate: Date.now(),
    };
    axios
      .put("http://localhost:3004/articles/" + lesArticles.id, data)
      .then(() => {
        setIsEditing(false);
      });
  };

  const handelDelete = () => {
    axios.delete("http://localhost:3004/articles/" + lesArticles.id);
    window.location.reload();
  };

  return (
    <div className="article">
      <div className="card-header">
        <h3>{lesArticles.author}</h3>
        <em>posté le : {dateFormater(lesArticles.date)}</em>
        {lesArticles.updatedDate ? (
          <em>M.à.j le: {dateFormater(lesArticles.updatedDate)}</em>
        ) : (
          ""
        )}
      </div>
      {isEditing ? (
        <textarea
          className="txEdition"
          autoFocus
          defaultValue={editContent ? editContent : lesArticles.content}
          onChange={(e) => setEditContent(e.target.value)}
        ></textarea>
      ) : (
        <p>{editContent ? editContent : lesArticles.content}</p>
      )}
      <div className="btn-container">
        {isEditing ? (
          <button onClick={() => handelEdit()}>Valider</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}
        <button
          onClick={() => {
            if (window.confirm(" Confirmer la suppression ?")) {
              handelDelete();
            }
          }}
        >
          Supprimer
        </button>
      </div>
    </div>
  );
};

export default Articles;
