import imgUrl from "../../images/image-jeremy.png";

interface ProfileCardProps {
  timeFrame: "daily" | "weekly" | "monthly";
  changeTimeFrame: React.MouseEventHandler;
}

const timeOptions: Array<ProfileCardProps["timeFrame"]> = [
  "daily",
  "weekly",
  "monthly",
];

function ProfileCard({ timeFrame, changeTimeFrame }: ProfileCardProps) {
  return (
    <section className="card card--profile">
      <header className="card__header">
        <img
          src={imgUrl}
          alt="An Image of Jeremy Robson"
          className="card__image"
        />
        <h1 className="card__title">
          <small>Report for</small>
          <span>Jeremy Robson</span>
        </h1>
      </header>
      <ul className="card__info">
        {timeOptions.map((time) => {
          let className = "card__info-item";
          if (time === timeFrame) {
            className += " active";
          }
          return (
            <li className={className} key={time}>
              <button data-timeframe={time} onClick={changeTimeFrame}>
                {time[0].toUpperCase() + time.slice(1)}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default ProfileCard;
