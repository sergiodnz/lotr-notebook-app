import React, { Component } from 'react';

class ListaDeLivros extends Component {
  render() {
    const { titulo, livros } = this.props;

    return (
      <div>
        <div className="movie-list">
          <h3>
            <span>{titulo}</span>
            <button className="sort-button">
              <i className="fa fa-sort-amount-asc"></i>
            </button>
            <button className="sort-button">
              <i className="fa fa-sort-alpha-asc"></i>
            </button>
          </h3>
          <ul>
            {livros.map(livro => {
              return (
                <li className="movie-list-item" key={livro._id}>
                  <div>{livro.name}</div>
                  <div>Reviews: {livro.reviews.length}</div>
                  <span>
                    <button>
                      <i className="fa fa-star"></i>
                    </button>
                  </span>

                  <span>
                    <button>
                      <i className="fa fa-check"></i>
                    </button>
                  </span>

                  <span>
                    <button>
                      <i className="fa fa-times"></i>
                    </button>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default ListaDeLivros;
