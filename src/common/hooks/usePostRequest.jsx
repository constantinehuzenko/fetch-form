import { useState } from "react";
import { API_FORM } from "../constants";

export const usePostRequest = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handlePostRequest = async (formData) => {
    setLoading(true);
    setSuccess(false);
    setError(false);

    try {
      await fetch(API_FORM, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setLoading(false);
      setSuccess(true);
    } catch {
      setLoading(false);
      setError(true);
    }
  };

  return {
    postLoading: loading,
    postSuccess: success,
    postError: error,
    handlePostRequest,
  };
};
