import React from "react";

function RowActive({
  name = "tanjiro",
  age = "29",
  tag1 = "typeScript",
  tag2 = "mongodb",
  imgsrc = "1.jpg",
}) {
  return (
    <>
      <tr className="table_item">
        <td className="table_info">
          <img src={imgsrc} alt="" />
          <span>{name}</span>
        </td>
        <td>
          <span className="active-cl">Active</span>
          <span className="dot active-bg"></span>
        </td>
        <td>
          <span>{age}</span>
        </td>
        <td>
          <span className="table_tag">{tag1}</span>
          <span className="table_tag">{tag2}</span>
        </td>
      </tr>
    </>
  );
}

function RowOffline({
  name = "tanjiro",
  age = "29",
  tag1 = "typeScript",
  tag2 = "mongodb",
  imgsrc = "1.jpg",
}) {
  return (
    <>
      <tr className="table_item">
        <td className="table_info">
          <img src={imgsrc} alt="" />
          <span>{name}</span>
        </td>
        <td>
          <span className="offline-cl">offline</span>
          <span className="dot offline-bg"></span>
        </td>
        <td>
          <span>{age}</span>
        </td>
        <td>
          <span className="table_tag">{tag1}</span>
          <span className="table_tag">{tag2}</span>
        </td>
      </tr>
    </>
  );
}

export { RowActive , RowOffline};
