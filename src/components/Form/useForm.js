import { useState, useEffect } from "react";

const useForm = () => {
  const [mail, setMail] = useState("");
  const [error, setError] = useState(null);
  const [requestStatus, setRequestStatus] = useState(false);
  const [pending, setPending] = useState(false);
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    const status = localStorage.getItem("isDidRequestChitko");
    setRequestStatus(status === "true" ? true : false);
  }, [success]);

  const switchErrors = (errorName) => {
    setTimeout(() => {
      setError(errorName);
    }, 50);
  };

  const handlSubmit = (e) => {
    e.preventDefault();
    const Regex = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    setError(null);
    if (mail.length === 0) {
      switchErrors("Введіть Вашу поштову адресу");
      return;
    }
    if (Regex.test(mail)) {
      setPending(true);
      localStorage.setItem("isDidRequestChitko", true);
      setPending(false);
      setError(null);
      setMail("")
      setSuccess(true)
      return;
    } else {
      switchErrors("Ця поштова адреса не валідна");
    }
  };

  return { mail, error, requestStatus, pending, setMail, handlSubmit };
};

export default useForm;
