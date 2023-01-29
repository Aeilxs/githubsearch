import * as React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar, Link } from "@mui/material";
import "./Repo.scss";

function Repo(repo) {
  const navigate = useNavigate();

  return (
    <Card sx={{ height: "350px", position: "relative" }}>
      <CardContent>
        <div className="user">
          <Avatar
            sx={{ position: "right", cursor: "pointer" }}
            onClick={() => navigate(`/utilisateur/${repo.owner.id}`)}
            src={repo.owner.avatar_url}
          />
          <Typography
            sx={{ fontSize: 14 }}
            color="text.secondary"
            gutterBottom
          >
            <span>Owner: </span>
            {repo.owner.login}
          </Typography>
        </div>
        <Typography
          variant="h5"
          component="div"
        >
          {repo.name}
        </Typography>
        <Typography
          sx={{ mb: 1.5 }}
          color="text.secondary"
        >
          {repo.full_name}
        </Typography>
        <Typography
          sx={{
            minHeight: "100px",
            maxHeight: "100px",
            paddingRight: "3px",
            overflowX: "hidden",
            overflowY: "scroll",
            "::-webkit-scrollbar": {
              width: "0.4em",
            },
            "::-webkit-scrollbar-thumb": {
              backgroundColor: "#BDBDBD",
              borderRadius: "20px",
            },
          }}
          variant="body1"
        >
          {repo.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ position: "absolute", bottom: 0 }}>
        <Button
          variant="outlined"
          size="small"
          onClick={() => navigate(`/utilisateur/${repo.owner.id}`)}
        >
          Utilisateur
        </Button>
        <Link
          href={repo.html_url}
          sx={{ ml: "1rem" }}
        >
          Repo
        </Link>
      </CardActions>
    </Card>
  );
}

export default Repo;
