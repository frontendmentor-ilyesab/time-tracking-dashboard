import { useState } from "react";
import ProfileCard from "./Components/ProfileCard";
import TimeFrameCard from "./Components/TimeFrameCard";

import data from "../data.json";

type timeFrame = "daily" | "weekly" | "monthly";

function isTimeFrame(t: string): t is timeFrame {
  return ["daily", "weekly", "monthly"].includes(t);
}

function App() {
  const [timeFrame, setTimeFrame] = useState<timeFrame>("weekly");

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    const button: HTMLButtonElement = e.currentTarget;
    const buttonTimeFrame = button.dataset["timeframe"];
    let newTimeFrame;
    if (buttonTimeFrame !== undefined && isTimeFrame(buttonTimeFrame)) {
      newTimeFrame = buttonTimeFrame;
    } else {
      newTimeFrame = timeFrame;
    }
    setTimeFrame(newTimeFrame);
  }

  const timeFrameCards = data.map((activity) => {
    return (
      <TimeFrameCard
        key={activity.title.toLowerCase().replace(" ", "-")}
        activity={activity.title}
        currentTime={activity.timeframes[timeFrame].current}
        previousTime={activity.timeframes[timeFrame].previous}
        timeFrame={timeFrame}
      />
    );
  });

  return (
    <main>
      <ProfileCard timeFrame={timeFrame} changeTimeFrame={handleClick} />
      {timeFrameCards}
    </main>
  );
}

export default App;
