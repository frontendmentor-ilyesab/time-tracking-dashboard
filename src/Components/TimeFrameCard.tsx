import WorkIcon from "../../images/icon-work.svg";
import PlayIcon from "../../images/icon-play.svg";
import StudyIcon from "../../images/icon-study.svg";
import ExerciseIcon from "../../images/icon-exercise.svg";
import SocialIcon from "../../images/icon-social.svg";
import SelfCareIcon from "../../images/icon-self-care.svg";

import EllipsisIcon from "../../images/icon-ellipsis.svg";

interface TimeFrameCardProps {
  activity: string;
  currentTime: number;
  previousTime: number;
  timeFrame: "daily" | "weekly" | "monthly";
}

const iconMap: { [activity: string]: React.ReactElement } = {
  work: <WorkIcon />,
  play: <PlayIcon />,
  study: <StudyIcon />,
  exercise: <ExerciseIcon />,
  social: <SocialIcon />,
  selfCare: <SelfCareIcon />,
};

const timeFramePrefixes = {
  daily: "Yesterday",
  weekly: "Last Week",
  monthly: "Last Month",
};

function TimeFrameCard({
  activity,
  currentTime,
  previousTime,
  timeFrame,
}: TimeFrameCardProps) {
  const prefix = timeFramePrefixes[timeFrame];
  const activityId = createId(activity);
  const icon = iconMap[activityId];
  const className = `card card--activity ${activityId}`;
  return (
    <section className={className}>
      <header className="card__header">{icon}</header>
      <div className="card__content">
        <h2 className="card__content-title-activity">{activity}</h2>
        <EllipsisIcon />
        <h3 className="card__content-title-duration">{currentTime}hrs</h3>
        <small>
          {prefix} - {previousTime}hrs
        </small>
      </div>
    </section>
  );
}

function createId(str: string): string {
  return str
    .split(" ")
    .map((str, index) => {
      if (index === 0) return str.toLowerCase();
      return str[0].toUpperCase() + str.slice(1);
    })
    .join(" ")
    .replace(" ", "");
}

export default TimeFrameCard;
