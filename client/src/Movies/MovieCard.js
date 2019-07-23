import React from 'react';

const MovieCard = props => {
  return (
    <div>
      <Route exact path="/" render={() => <MovieList/>} />
    </div>
  );
};

export default MovieCard;
