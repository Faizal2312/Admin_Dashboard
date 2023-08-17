import "./TopBox.scss";
import { topDealUsers } from "../../data";

const TopBox = () => {
  return (
    <div className="topBox">
      <h1>Top Deals</h1>
      {topDealUsers.map((user) => (
        <div className="user" key={user.id}>
          <div className="data">
            <img src={user.img} alt="" />
            <div className="userDetail">
              <span>{user.username}</span>
              <span>{user.email}</span>
            </div>
          </div>
          <span className="price">{"$" + user.amount}</span>
        </div>
      ))}
    </div>
  );
};

export default TopBox;
