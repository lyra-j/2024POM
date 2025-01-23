import React from "react";
import { useState } from "react";
import MedalItem from "./MedalItem";

export const MedalList = ({ medalList, deleteMedalList }) => {
  // 정렬 셋팅(초기값은 금메달기준)
  const [sortMedal, setSortMedal] = useState("goldMedals");

  // 메달 정렬 함수
  const sortBy = (a, b) => {
    if (b[sortMedal] !== a[sortMedal]) {
      return b[sortMedal] - a[sortMedal];
    }
    if (b.goldMedals !== a.goldMedals) {
      return b.goldMedals - a.goldMedals;
    }
    if (b.silverMedals !== a.silverMedals) {
      return b.silverMedals - a.silverMedals;
    }
    if (b.bronzeMedals !== a.bronzeMedals) {
      return b.bronzeMedals - a.bronzeMedals;
    }
  };

  const sortedMedalList = [...medalList].sort(sortBy);

  // 정렬 기준 변경
  const sortMedalList = (e) => {
    setSortMedal(e.target.value);
  };

  return (
    <div>
      <select onChange={sortMedalList} value={sortMedal}>
        <option value="goldMedals">금메달</option>
        <option value="silverMedals">은메달</option>
        <option value="bronzeMedals">동메달</option>
      </select>

      <table>
        <thead>
          <tr>
            <th>국가명</th>
            <th>금메달</th>
            <th>은메달</th>
            <th>동메달</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {sortedMedalList.map((data) => {
            return (
              <MedalItem
                data={data}
                key={data.countryName}
                deleteMedalList={deleteMedalList}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MedalList;
