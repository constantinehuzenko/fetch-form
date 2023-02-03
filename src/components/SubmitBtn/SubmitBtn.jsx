import { Button, CircularProgress } from "@mui/material";

export const SubmitBtn = ({ loading }) => {
  return (
    <Button
      sx={{ my: 3, height: "60px" }}
      className="submit-btn"
      type="submit"
      variant="contained"
      size="large"
      disabled={loading}
      endIcon={loading && <CircularProgress color="success" size="24px" />}
    >
      Submit
    </Button>
  );
};
