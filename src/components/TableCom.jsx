import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import TableRecord from "./TableRecord";
import { getAllUsers } from "../Api-Data";

function TableCom() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <>
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>#id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <TableRecord
              key={user.id}
              id={user.id}
              name={user.name}
              username={user.username}
              email={user.email}
            />
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default TableCom;
