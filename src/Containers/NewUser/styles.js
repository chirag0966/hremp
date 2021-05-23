import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    width: "100%",
    height: "89.1vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    padding: "2rem",
    width: "60vw",
  },
  inputFilelds: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  inputField: {
    "& input": {
      textAlign: "center",
    },
  },
  form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    marginTop: "2rem",
  },
});

export default useStyles;
