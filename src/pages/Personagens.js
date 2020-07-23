import React, { useState } from 'react';
import PageContent from '../componentes/PageContent';
import { searchCharacter } from '../api/personagens';
import { Debounce } from 'react-throttle';
import { Link } from 'react-router-dom';

const Personagens = () => {
  const [personagens, setPersonagens] = useState([]);

  const procuraNomePersonagem = e => {
    const nome = e.target.value;
    if (nome) {
      searchCharacter(nome).then(data => {
        setPersonagens(data);
      });
    }
  };

  return (
    <PageContent name="Personagens">
      <div>
        <Debounce time="400" handler="onChange">
          <input type="text" onChange={e => procuraNomePersonagem(e)} />
        </Debounce>
      </div>
      <div>
        <ul>
          {personagens &&
            personagens.map(personagem => (
              <li key={personagem._id}>
                <Link to={`personagens/${personagem._id}`}>
                  {personagem.name}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </PageContent>
  );
};

export default Personagens;
