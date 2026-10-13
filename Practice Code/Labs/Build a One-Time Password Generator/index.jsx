import { useEffect, useRef, useState } from "react";

export const OTPGenerator = () => {
  const [otp, setOtp] = useState("");
  const [countdown, setCountdown] = useState(0);
  const [expired, setExpired] = useState(false);

  const intervalRef = useRef(null);

  function generateOTP() {
    const newOTP = Math.floor(Math.random() * 900000) + 100000;

    setOtp(String(newOTP));
    setCountdown(5);
    setExpired(false);
  }

  useEffect(() => {
    if (countdown <= 0) {
      if (countdown === 0 && otp !== "") {
        setExpired(true);
      }

      return;
    }

    intervalRef.current = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => {
      clearTimeout(intervalRef.current);
    };
  }, [countdown, otp]);

  return (
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>

      <h2 id="otp-display">
        {otp === "" ? "Click 'Generate OTP' to get a code" : otp}
      </h2>

      <p id="otp-timer" aria-live="polite">
        {countdown > 0
          ? `Expires in: ${countdown} seconds`
          : expired
            ? "OTP expired. Click the button to generate a new OTP"
            : ""}
      </p>

      <button
        id="generate-otp-button"
        onClick={generateOTP}
        disabled={countdown > 0}
      >
        Generate OTP
      </button>
    </div>
  );
};
