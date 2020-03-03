import { title } from "assets/jss/nextjs-material-kit.js";

const portGridStyle = theme => ({
    root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
    section: {
        padding: "70px 0",
        textAlign: "center"
      },
      title: {
        ...title,
        marginBottom: "1rem",
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none"
      },
      description: {
        color: "#999"
      },
      portImage: {
        width: "100%",
        borderRadius: "5px",
      }
  });
  
  export default portGridStyle;
  