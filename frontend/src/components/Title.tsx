import Typography from "@mui/material/Typography";

interface TitleProps {
  children?: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {children}
    </Typography>
  );
};

export default Title;
