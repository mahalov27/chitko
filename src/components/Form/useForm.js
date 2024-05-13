import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const useForm = () => {
  const [mail, setMail] = useState("");
  const [error, setError] = useState(null);
  const [requestStatus, setRequestStatus] = useState(false);
  const [pending, setPending] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const status = localStorage.getItem("isDidRequestChitko");
    setRequestStatus(status === "true" ? true : false);
  }, [success]);

  const switchErrors = (errorName) => {
    setTimeout(() => {
      setError(errorName);
    }, 50);
  };

  const handlSubmit = async (e) => {
    e.preventDefault();
    const Regex = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const formData = new FormData();

    setError(null);
    if (mail.length === 0) {
      switchErrors("Введіть Вашу поштову адресу");
      return;
    }
    if (Regex.test(mail)) {
      setPending(true);

      formData.append("access_key", "bb1bdbe7-ee74-4cb1-9ee8-db0eddd61c1f");
      formData.append("email", mail);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!data.success) {
        setPending(false);
        toast.error(data.message);
        return;
      }

      toast.success(data.message);
      setPending(false);
      setError(null);
      setMail("");
      setSuccess(true);
      localStorage.setItem("isDidRequestChitko", true);
    } else {
      switchErrors("Ця поштова адреса не валідна");
    }
  };

  return { mail, error, requestStatus, pending, setMail, handlSubmit };
};

export default useForm;
