import React, { useState, useEffect } from "react";
import { paginate } from "../utils/paginate";
import Pagination from "./pagination";
import User from "./user";
import PropTypes from "prop-types";
import GroupList from "./groupList";
import API from "../api";

const Users = ({ users, ...rest }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [professions, setProfessions] = useState();
  const [selectedProf, setSelectedProf] = useState();
  const count = users.length;
  const pageSize = 4;

  useEffect(() => {
    API.professions.fetchAll().then((data) => setProfessions(data));
  }, []);

  const handeProfessionSelect = (item) => {
    setSelectedProf(item);
  };

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const filteredUsers = selectedProf
    ? users.filter((user) => user.profession === selectedProf)
    : users;
  const userCrop = paginate(filteredUsers, currentPage, pageSize);

  return (
    <>
      {professions && (
        <GroupList
          selectedItem={selectedProf}
          items={professions}
          onItemSelect={handeProfessionSelect}
        />
      )}

      {count > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col">Избранное</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {userCrop.map((user) => (
              <User key={user._id} {...rest} {...user} />
            ))}
          </tbody>
        </table>
      )}
      <Pagination
        itemsCount={count}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

Users.propTypes = {
  users: PropTypes.array.isRequired
};

export default Users;
