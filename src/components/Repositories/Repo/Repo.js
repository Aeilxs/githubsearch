import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";

import "./Repo.scss";

export default function BasicCard() {
  return (
    <Card sx={{ maxHeight: "400px" }}>
      <CardContent>
        <div className="user">
          <Avatar
            sx={{ position: "right" }}
            src="https://avatars.githubusercontent.com/u/102265036?v=4"
          />
          <Typography
            sx={{ fontSize: 14 }}
            color="text.secondary"
            gutterBottom
          >
            Pseudo
          </Typography>
        </div>
        <Typography
          variant="h5"
          component="div"
        >
          Nom du repo
        </Typography>
        <Typography
          sx={{ mb: 1.5 }}
          color="text.secondary"
        >
          adjective
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          size="small"
        >
          Repo
        </Button>
        <Button
          variant="outlined"
          size="small"
        >
          Utilisateur
        </Button>
      </CardActions>
    </Card>
  );
}
