import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacter } from '../api/personagens';
import PageContent from '../componentes/PageContent';

const DetalhePersonagem = () => {
  const { id } = useParams();
  const [personagem, setPersonagem] = useState({});
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    getCharacter(id)
      .then(personagem => {
        if (personagem) {
          setPersonagem(personagem);
        }
      })
      .finally(() => setCarregando(false));
  }, [id]);

  return (
    <PageContent name="Personagens">
      <div>
        {personagem._id ? (
          <div>
            <div>
              <span>
                <strong>Name:</strong>
              </span>
              <span>{personagem.name}</span>
            </div>
            <div>
              <span>
                <strong>race:</strong>
              </span>
              <span>{personagem.race}</span>
            </div>
            {personagem.birth && (
              <div>
                <span>
                  <strong>birth:</strong>
                </span>
                <span>{personagem.birth}</span>
              </div>
            )}
            {personagem.gender && (
              <div>
                <span>
                  <strong>gender:</strong>
                </span>
                <span>{personagem.gender}</span>
              </div>
            )}
            {personagem.height && (
              <div>
                <span>
                  <strong>height:</strong>
                </span>
                <span>{personagem.height}</span>
              </div>
            )}
            {personagem.hair && (
              <div>
                <span>
                  <strong>hair:</strong>
                </span>
                <span>{personagem.hair}</span>
              </div>
            )}
            {personagem.spouse && (
              <div>
                <span>
                  <strong>spouse:</strong>
                </span>
                <span>{personagem.spouse}</span>
              </div>
            )}
            {personagem.death && (
              <div>
                <span>
                  <strong>death:</strong>
                </span>
                <span>{personagem.death}</span>
              </div>
            )}
            {personagem.realm && (
              <div>
                <span>
                  <strong>realm:</strong>
                </span>
                <span>{personagem.realm}</span>
              </div>
            )}
            {personagem.wikiUrl && (
              <div>
                <span>
                  <strong>wikiUrl:</strong>
                </span>
                <span>
                  <a href={personagem.wikiUrl} target={personagem._id}>
                    {personagem.wikiUrl}
                  </a>
                </span>
              </div>
            )}
          </div>
        ) : (
          !carregando && (
            <div>Personagem com o identificador {id} Não foi encontrado!</div>
          )
        )}
      </div>
    </PageContent>
  );
};

export default DetalhePersonagem;
