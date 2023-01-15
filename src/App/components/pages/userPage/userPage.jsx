import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import API from "../../../api";
import Qualities from "../../ui/qualities";

const UserPage = ({ userId }) => {
  const [user, setUser] = useState();
  const history = useHistory();
  useEffect(() => {
    API.users.getById(userId).then((data) => setUser(data));
  }, []);
  const handleClick = () => {
    history.push(history.location.pathname + "/edit");
  };
  if (user) {
    return (
      <div className="m-2">
        <h1>{user.name}</h1>
        <div>
          <h3>Профессия</h3>
          <p>{user.profession.name}</p>
        </div>
        <div>
          <h3>Качества</h3>
          <p>
            <Qualities qualities={user.qualities} />
          </p>
        </div>
        <div>
          <h3>Встретился, раз</h3>
          <p>{user.completedMeetings}</p>
        </div>
        <div>
          <h3>Рейтинг</h3>
          <p>{user.rate}</p>
        </div>
        <button onClick={handleClick}>{"Изменить —>"}</button>
      </div>
    );
  } else {
    return <h1>{"...loading"}</h1>;
  }
};

UserPage.propTypes = {
  userId: PropTypes.string.isRequired
};

export default UserPage;
