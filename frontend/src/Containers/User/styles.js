import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    marginTop: "2rem",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  card: {
    padding: "1rem",
    width: "80vw",
    display: "flex",
    justifyContent: "space-between",
  },
  button: {
    marginTop: "2rem",
    width: "100%",
  },
  punchContainer: {
    display: "flex",
    width: "20vw",
    justifyContent: "space-around",
  },
  time: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
});

export default useStyles;
