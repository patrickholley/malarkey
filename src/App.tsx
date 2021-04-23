import React, { useEffect, useState } from "react";
import { Button, createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { getCookie, setCookie } from "./cookieUtils";
import { generateCountdown } from "./timeUtils";
import TnImg from "./assets/tn.png";
import UsImg from "./assets/us.png";
import UtImg from "./assets/ut.png";

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

  const theme = createMuiTheme({
    palette: {
      primary: {
        light: "#fff",
        main: "#fff",
        dark: "#fff",
        contrastText: "#002d65",
      },
      secondary: {
        light: "#002d65",
        main: "#002d65",
        dark: "#002d65",
        contrastText: "#fff",
      },
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <div className="app">
        <h1>Operation Malarkey Commences In {countdown}!</h1>
        <Button
          color={isClockedIn ? "secondary" : "primary"}
          onClick={handleClick}
          variant="contained"
        >
          {`Clock ${isClockedIn ? "Out" : "In"}`}
        </Button>
        <div className="progress">
          <div className="img-wrapper">
            <img alt="utah" className="ut-img" src={UtImg} />
          </div>
          <div className="img-wrapper us-img-wrapper">
            <img alt="us" className="us-img" src={UsImg} />
          </div>
          <div className="img-wrapper">
            <img alt="tennessee" className="tn-img" src={TnImg} />
          </div>
        </div>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
