import React, { useEffect, useState } from "react";
import "../components/userlist.css";
import { useSelector, useDispatch } from "react-redux";
import {
  ProfileHover,
  ProfileHoverLeave,
  setUsers,
} from "../redux/actions/action";
import CardHover from "./CardHover";
import { Lock, Trash2 } from "react-feather";
import Pagination from "../components/pagination/pagination";

/* userlist will show user data by dispatching  setUsers method of redux thunk can  write action creators that return a function 
  if successfully fetch response instead of an action and store data in store and using useselector.
  show data  in table format and on hover dispatch 2 method onMouseEnter and onMouseLeave */
const UserList = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { users, loading, error, pageUpdated_data } = useSelector(
    (state) => state
  );
  const userlist = users;
  const selectedid = useSelector((state) => state.selectedid);
  const Dispatch = useDispatch();
  const paginate = (pageNumber) => {
    const current = pageNumber;
    setCurrentPage(current);
  };

  useEffect(
    () => Dispatch(setUsers(currentPage, pageUpdated_data)),
    [currentPage, pageUpdated_data ,Dispatch]
  );

  return (
    <div>
      <div className="container1">
        <div className="container-table">
          <table className="table table-borderless table-responsive  ">
            <thead>
              <tr className="heading">
                <th style={{minWidth:'360px'}} >Name</th>
                <th style={{minWidth:'130px'}}>Status</th>
                <th style={{minWidth:'130px'}}>Access</th>
              </tr>
            </thead>
            <tbody>
              {userlist &&
                userlist.map((user) => (
                  <tr key={user.id}>
                    <td>
                      <div
                        onMouseEnter={() => Dispatch(ProfileHover(user.id))}
                        onMouseLeave={() => Dispatch(ProfileHoverLeave())}
                        className="nameandimage"
                      >
                        <img
                          className="imageround"
                          src={user.avatar}
                          width="50"
                          height="50"
                          alt ="not display"
                        ></img>
                        <div className="username">
                          {user.first_name + " " + user.last_name} <br></br>{" "}
                          {user.email}
                        </div>
                      </div>
                    </td>

                    <td>
                      {user.id === 1 ? (
                        <div className="activeclass">Active</div>
                      ) : (
                        <select className="dropdwonactive">
                          <option value="option 1">Inactive</option> 
                          <option value="option 2">Active</option>
                        </select>
                      )}
                    </td>
                    <td>
                      {user.id === 1 ? (
                        <div className="ownerclass">Owner</div>
                      ) : (
                        <select className="dropdwonrole">
                            <option value="option 1">Manager</option>
                          <option value="option 2">Read</option>
                        </select>
                      )}
                    </td>

                    <td>
                      {user.id === 1 ? (
                        <i className="locksymbol">
                          <Lock />
                        </i>
                      ) : (
                        <i className="deleteicon">
                          <Trash2 />
                        </i>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          {loading === true ? (
            <div className="loadingmsg">Loading.....</div>
          ) : error ? (
            <div className="errormsg"> Oops Something went wrong</div>
          ) : (
            <Pagination paginate={paginate} currentPage={currentPage} />
          )}
        </div>

        {selectedid && <CardHover />}
      </div>
    </div>
  );
};

export default UserList;
