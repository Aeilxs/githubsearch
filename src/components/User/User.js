import { useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate, useParams } from "react-router-dom";
import { Avatar, Button, Divider, Link, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "./User.scss";

function User({ id, setID, userInfo, isLoading }) {
  const urlParam = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (Number(urlParam.id) !== id) {
      setID(Number(urlParam.id));
    }
  }, [urlParam.id, id, setID]);

  return (
    <div>
      <Button
        variant="outlined"
        sx={{ mb: "1rem" }}
        onClick={() => navigate("/")}
      >
        ❰❰
      </Button>
      {isLoading && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </Box>
      )}
      <Avatar
        className="image"
        variant="rounded"
        sx={{ width: "30%", height: "30%" }}
        src={userInfo.avatar_url}
        alt="Avatar de l'utilisateur/organisation"
      />
      <Typography
        align="center"
        variant="h3"
      >
        {userInfo.type === "Organization" ? "Organisation" : "Utilisateur"} -{" "}
        {userInfo.name ? userInfo.name : userInfo.login}
      </Typography>
      <Typography variant="h4">Bio</Typography>
      <Typography>
        {userInfo.bio
          ? userInfo.bio
          : "Il semblerait qu'il n'y ait pas de biographie :("}
      </Typography>
      <Divider sx={{ mt: "1rem", mb: "1rem" }} />
      <Typography variant="h4">Liens</Typography>
      <Link href={userInfo.blog}>{userInfo.blog}</Link> -{" "}
      <Link href={userInfo.html_url}>{userInfo.html_url}</Link>
      <Divider sx={{ mt: "1rem", mb: "1rem" }} />
      <Typography variant="h4">Leur contenu Github</Typography>
      <Typography>- Repos public: {userInfo.public_repos}</Typography>
      <Typography>- Gists public: {userInfo.public_gists}</Typography>
      <Divider sx={{ mt: "1rem", mb: "1rem" }} />
      <Typography variant="h4">Email</Typography>
      {userInfo.email ? (
        <Link>{userInfo.email}</Link>
      ) : (
        <Typography>Il semblerait qu'il n'y ait pas d'email :(</Typography>
      )}
      <Divider sx={{ mt: "1rem", mb: "1rem" }} />
      <Typography variant="h4">Plus d'infos...</Typography>
      <Typography>Followers: {userInfo.followers}</Typography>
      <Typography>Following: {userInfo.following}</Typography>
    </div>
  );
}

User.propTypes = {
  id: PropTypes.number.isRequired,
  userInfo: PropTypes.object.isRequired,
  setID: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default User;
