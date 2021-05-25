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
  punchContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    marginTop: "2rem",
    width: "50%",
  },
  timeContainer: {
    display: "flex",
    width: "26vw",
    justifyContent: "space-evenly",
  },
  time: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

export default useStyles;
