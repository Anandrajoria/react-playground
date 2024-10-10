import React from "react";
import "./table.css";

import { RowOffline, RowActive } from "./row";
function Table() {
  return (
    <>
      <div className="main_table">
        <table className="table_">
          <thead className="table_head">
            <tr>
              <th>name</th>
              <th>status</th>
              <th>age</th>
              <th>tags</th>
            </tr>
          </thead>
          <tbody>
            <RowActive
              name="sakura"
              age="27"
              tag1="rust"
              tag2="nodejs"
              imgsrc="1.jpg"
            />

            <RowActive />
            <RowOffline />
            <RowOffline />
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
