import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../movie.css";

function Movie({ id, coverImg, rating, title, year, summary, genres }) {
  return (
    <div className="bg">
      <div key={id} className="back">
        <Link to={`/detail/${id}`} className="title">
          {title}
        </Link>
        <h3 className="rating">평점 : {rating}</h3>
        <img src={coverImg} id="coverImg"></img>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired,
};

export default Movie;
