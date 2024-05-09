import { getDate } from "@/app/_utils/func";
import style from "./drop.module.scss";

export default function Dropdown({ info }) {
  const driver = info?.Driver;
  let dateOfBirth = getDate(driver?.dateOfBirth);

  return (
    <div className={style.drop}>
      <div>
        <p>Points</p>
        <p className="gray">{info?.points}</p>
      </div>
      <div>
        <p>Standing position</p>
        <p className="gray">{info?.position}</p>
      </div>
      <div>
        <p>Team</p>
        <p className="gray">{info?.Constructors[0]?.name}</p>
      </div>
      <div>
        <p>Date of birth</p>
        <p className="gray">{dateOfBirth}</p>
      </div>
      <div>
        <p>Nationality</p>
        <p className="gray">{driver?.nationality}</p>
      </div>
    </div>
  );
}
