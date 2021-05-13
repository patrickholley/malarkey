import { useCallback, useEffect, useState } from "react";
import {
  /* Button, */ createMuiTheme,
  MuiThemeProvider,
} from "@material-ui/core";
// import { getCookie, setCookie } from "./cookieUtils";
import { generateCountdown } from "./timeUtils";
import MurphyImg from "./assets/murphy.png";
import TnImg from "./assets/tn.png";
import UsImg from "./assets/us.png";
import UtImg from "./assets/ut.png";

function App() {
  /* const [isClockedIn, setIsClockedIn] = useState(
    getCookie("isClockedIn") === "true"
  ); */

  const beginProgressDate = Date.parse("18 April 2021 15:00:00 MDT");
  const endProgressDate = Date.parse("25 May 2021 15:00:00 MDT");

  const calcProgress = useCallback(() => {
    const progress =
      (Date.now() - beginProgressDate) / (endProgressDate - beginProgressDate);
    return progress > 1 ? 1 : progress;
  }, [beginProgressDate, endProgressDate]);

  const [countdown, setCountdown] = useState(generateCountdown());
  const [progress, setProgress] = useState(calcProgress());

  useEffect(
    function () {
      const countdownInterval = setInterval(function () {
        setCountdown(generateCountdown());
        setProgress(calcProgress());
      }, 1000);

      return function () {
        clearInterval(countdownInterval);
      };
    },
    [beginProgressDate, calcProgress, endProgressDate]
  );

  /*  useEffect(
    function () {
      setCookie("isClockedIn", isClockedIn.toString(), 1);
    },
    [isClockedIn]
  ); */

  /* function handleClick() {
    setIsClockedIn(!isClockedIn);
  } */

  const theme = createMuiTheme({
    palette: {
      primary: {
        light: "#f8f0e9",
        main: "#f8f0e9",
        dark: "#f8f0e9",
        contrastText: "#118157",
      },
      secondary: {
        light: "#118157",
        main: "#118157",
        dark: "#118157",
        contrastText: "#f8f0e9",
      },
    },
  });

  const progressHeight = 300 * progress;

  return (
    <MuiThemeProvider theme={theme}>
      <div className="app">
        <img alt="malarkey" className="murphy-img" src={MurphyImg} />
        <h1>
          Operation Malarkey Complete{countdown !== 0 && ` In ${countdown}`}!
        </h1>
        {/* <Button
          color={isClockedIn ? "secondary" : "primary"}
          onClick={handleClick}
          variant="contained"
        >
          {`Clock ${isClockedIn ? "Out" : "In"}`}
        </Button> */}
        <div className="progress">
          <div className="img-wrapper">
            <img alt="utah" className="ut-img" src={UtImg} />
          </div>
          <div className="progress-bar">
            <div
              className="progress-bar__filled"
              style={{ height: progressHeight }}
            />
            <img
              alt="us"
              className="us-img"
              src={UsImg}
              style={{ top: -32 + progressHeight }}
            />
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
