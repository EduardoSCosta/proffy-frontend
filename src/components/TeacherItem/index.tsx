import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
  return (
    <article className="teacher-item">
    <header>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR4Bwz8-TWJNKPdLhikrDm97LAOm7OJQgCIgQ" alt="Professor Exemplo"/>
      <div>
        <strong>Professor Exemplo</strong>
        <span>Química</span>
      </div>
    </header>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      <br/><br/>
      Nihil, illo neque? Labore voluptatem numquam repellat deleniti mollitia aspernatur debitis fugit autem voluptatum, molestias, nisi nostrum aperiam nihil facere unde maxime.
    </p>
    <footer>
      <p>
        Preço/hora
        <strong>R$ 50,00</strong>
      </p>
      <button type="button">
        <img src={whatsappIcon} alt="Whatsapp"/>
        Entrar em Contato
      </button>
    </footer>
  </article>
  );
}

export default TeacherItem;