import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import API from "../../../api";
// import Qualities from "../../ui/qualities";
import UserCard from "../../ui/userCard";
import QualitiesCard from "../../ui/qualitiesCard";
import MeetingsCard from "../../ui/meetingsCard";
import Comments from "../../ui/comments";

const UserPage = ({ userId }) => {
  const [user, setUser] = useState();
  useEffect(() => {
    API.users.getById(userId).then((data) => setUser(data));
  }, []);

  if (user) {
    return (
      <div className="container">
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <UserCard user={user} />
            <QualitiesCard qualities={user.qualities} />
            <MeetingsCard meetings={user.rate} />
          </div>

          <div className="col-md-8">
            <Comments />
          </div>
        </div>
      </div>

      //  <div className="m-2">
      //    <h1>{user.name}</h1>
      //    <div>
      //      <h3>Профессия</h3>
      //      <p>{user.profession.name}</p>
      //    </div>
      //    <div>
      //      <h3>Качества</h3>
      //      <p>
      //        <Qualities qualities={user.qualities} />
      //      </p>
      //    </div>
      //    <div>
      //      <h3>Встретился, раз</h3>
      //      <p>{user.completedMeetings}</p>
      //    </div>
      //    <div>
      //      <h3>Рейтинг</h3>
      //      <p>{user.rate}</p>
      //    </div>
      //    <button onClick={handleClick}>{"Изменить —>"}</button>
      //  </div>
    );
  } else {
    return <h1>{"...loading"}</h1>;
  }
};

UserPage.propTypes = {
  userId: PropTypes.string.isRequired
};

export default UserPage;
