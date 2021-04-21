import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import "./App.css";
import { getCookie, setCookie } from "./cookieUtils";
import { generateCountdown } from "./timeUtils";

function App() {
  const [isClockedIn, setIsClockedIn] = useState(
    getCookie("isClockedIn") === "true"
  );

  const [countdown, setCountdown] = useState(generateCountdown());

  useEffect(function () {
    setInterval(function () {
      setCountdown(generateCountdown());
    }, 10);
  }, []);

  useEffect(
    function () {
      setCookie("isClockedIn", isClockedIn.toString(), 1);
    },
    [isClockedIn]
  );

  function handleClick() {
    setIsClockedIn(!isClockedIn);
  }

  return (
    <div className="App">
      <h1>Operation Malarkey Commences In {countdown}!</h1>
      <Button
        variant="contained"
        color={isClockedIn ? "secondary" : "primary"}
        onClick={handleClick}
      >
        {`Clock ${isClockedIn ? "Out" : "In"}`}
      </Button>
    </div>
  );
}

export default App;
