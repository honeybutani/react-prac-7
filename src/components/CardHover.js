import React from "react";
import "../components/CardHover.css";
import { useSelector } from "react-redux";
export default function CardHover() {
  /* on hover the user get detail information about user in side card  */
  const users = useSelector((state) => state.users);
  const id = useSelector((state) => state.selectedid);
  const index = users.findIndex(user => user.id === id);

  return (
    <div>
      <div className="card HoverCard">
        <img
          className=" img CardCenterContent"
          src={users[index].avatar}
          alt="not display"
          width="115"
          height="115"
        />

        <div className="name CardCenterContent">{users[index].first_name+ " " + users[index].last_name}</div>
        <div className=" email CardCenterContent"> {users[index].email}</div>

        <div className="Plan CardCenterContent">
          <b>Your Plan : Standard</b>
        </div>
        <div className="btn-warning CardCenterContent">
          <b>Active User</b>
        </div>
        <div className="planuses">
          Plan Uses
          <div className="progress">
            <div
              className="progress-bar bg-warning"
              role="progressbar"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div className="clicks">
          <div className="clicksnumber">
            <b className="clicksreviewed">2400</b>
            <br /> clicks reviewed
          </div>

          <div className="betweenborder">
            <b className="monthlyclicks">3600</b>
            <br /> Monthly clicks
          </div>
        </div>
      </div>
    </div>
  );
}
