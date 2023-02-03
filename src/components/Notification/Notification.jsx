import { useEffect, useState } from "react";
import { Alert, Snackbar } from "@mui/material";

export const Notification = ({ error, success }) => {
  const [open, setOpen] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setOpen(error || success);
    setIsError(!success && error);
  }, [error, success]);

  const handleClose = () => setOpen(false);

  const notificationText = isError
    ? "Sorry, something went wrong...😔"
    : "You successfully uploaded data, congrats!🎉 ";

  return (
    <Snackbar
      open={open}
      autoHideDuration={1500}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert
        onClose={handleClose}
        severity={isError ? "error" : "success"}
        icon={false}
        sx={{ width: "100%" }}
        variant="filled"
      >
        {notificationText}
      </Alert>
    </Snackbar>
  );
};
