import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";

import "./Repo.scss";

function Repo() {
  return (
    <Card>
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
        <Typography
          sx={{
            maxHeight: "150px",
            paddingRight: "3px",
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula
          massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci
          nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl
          sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae,
          consequat in, pretium a, enim. Pellentesque congue. Ut in risus
          volutpat libero pharetra tempor. Cras vestibulum bibendum augue.
          Praesent egestas leo in pede. Praesent blandit odio eu enim.
          Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia Curae;
          Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum.
          Maecenas adipiscing ante non diam sodales hendrerit.
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

export default Repo;
