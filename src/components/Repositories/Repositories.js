import "./Repositories.scss";
import Repo from "./Repo/Repo";
import Infos from "./Infos/Infos";

function Repositories({ repositories, totalResult, lastSearch }) {
  return (
    <>
      <Infos
        lastSearch={lastSearch}
        totalResult={totalResult}
      />
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

export default Repositories;
