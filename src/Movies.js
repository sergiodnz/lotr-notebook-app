import React from 'react';

const Movies = () => {
  return (
    <div>
      <div className="page-title">
        <h1>The Lord of The Rings</h1>
        <h2>notebook app / movies</h2>
      </div>
      <div className="movie-list">
        <h3>
          <span>Movies</span>
          <button className="sort-button">
            <i className="fa fa-sort-amount-desc"></i>
          </button>
          <button className="sort-button">
            <i className="fa fa-sort-alpha-asc"></i>
          </button>
        </h3>
        <ul>
          <li className="movie-list-item">
            <div>The Fellowship Of The Ring</div>
            <div>Academy Awards: 4</div>
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
          </li>
          <li className="movie-list-item">
            <div>The Two Towers</div>
            <div>Academy Awards: 2</div>
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
          </li>
          <li className="movie-list-item">
            <div>The Return Of The King</div>
            <div>Academy Awards: 11</div>
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
          </li>
        </ul>
      </div>
      <div className="movie-list">
        <h3>
          <span>Watched</span>
          <button className="sort-button">
            <i className="fa fa-sort-amount-desc"></i>
          </button>
          <button className="sort-button">
            <i className="fa fa-sort-alpha-asc"></i>
          </button>
        </h3>
        <ul>
          <li className="movie-list-item">
            <div>The Fellowship Of The Ring</div>
            <div>Academy Awards: 4</div>
            <span>
              <button>
                <i className="fa fa-times"></i>
              </button>
            </span>
          </li>
          <li className="movie-list-item">
            <div>The Two Towers</div>
            <div>Academy Awards: 2</div>
            <span>
              <button>
                <i className="fa fa-times"></i>
              </button>
            </span>
          </li>
        </ul>
      </div>
      <div className="movie-list">
        <h3>
          <span>Bookmarked</span>
          <button className="sort-button">
            <i className="fa fa-sort-amount-desc"></i>
          </button>
          <button className="sort-button">
            <i className="fa fa-sort-alpha-asc"></i>
          </button>
        </h3>
        <ul>
          <li className="movie-list-item">
            <div>The Two Towers</div>
            <div>Academy Awards: 2</div>
            <span>
              <button>
                <i className="fa fa-times"></i>
              </button>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Movies;
