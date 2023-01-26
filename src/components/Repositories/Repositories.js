import PropTypes from "prop-types";
import "./Repositories.scss";
import Repo from "./Repo/Repo";
import Infos from "./Infos/Infos";

function Repositories({ repositories, totalResult }) {
  return (
    <>
      <Infos totalResult={totalResult} />
      <div className="cards">
        {repositories.map((repo) => (
          <Repo
            key={repo.id}
            {...repo}
          />
        ))}
      </div>
    </>
  );
}

Repositories.propTypes = {
  repositories: PropTypes.array.isRequired,
  totalResult: PropTypes.number.isRequired,
};

export default Repositories;
