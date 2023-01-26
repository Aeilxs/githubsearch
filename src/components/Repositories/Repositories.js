import "./Repositories.scss";
import Repo from "./Repo/Repo";
import Infos from "./Infos/Infos";

function Repositories({ props }) {
  return (
    <>
      <Infos />
      <div className="cards">
        <Repo />
        <Repo />
        <Repo />
        <Repo />
        <Repo />
        <Repo />
        <Repo />
        <Repo />
        <Repo />
      </div>
    </>
  );
}

export default Repositories;
