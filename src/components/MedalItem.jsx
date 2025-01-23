import React from "react";
import Button from "./Button";

export const MedalItem = ({ data, deleteMedalList }) => {
  return (
    <>
      <tr>
        <td>{data.countryName}</td>
        <td>{data.goldMedals}</td>
        <td>{data.silverMedals}</td>
        <td>{data.bronzeMedals}</td>
        <td>
          {" "}
          <Button type="button" onClick={() => deleteMedalList(data)}>
            삭제
          </Button>
        </td>
      </tr>
    </>
  );
};

export default MedalItem;
