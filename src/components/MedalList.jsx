import React from "react";
import { useState } from "react";
import MedalItem from "./MedalItem";

export const MedalList = ({ medalList, deleteMedalList }) => {
  // 정렬 셋팅(초기값은 금메달기준)
  const [sortMedal, setSortMedal] = useState("goldMedals");

  // 메달 정렬 함수
  const sortBy = (a, b) => {
    // 총 메달 수로 정렬
    if (sortMedal === "totalMedals") {
      const totalA = a.goldMedals + a.silverMedals + a.bronzeMedals;
      const totalB = b.goldMedals + b.silverMedals + b.bronzeMedals;
      return totalB - totalA;
    }

    // 금, 은, 동 메달 기준 정렬
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
    <div className="medal-list-container">
      <select id="medalSortSelect" onChange={sortMedalList} value={sortMedal}>
        <option value="goldMedals">금메달</option>
        <option value="silverMedals">은메달</option>
        <option value="bronzeMedals">동메달</option>
        <option value="totalMedals">총메달수</option>
      </select>
      <div className="medal-list-wrap">
        <table>
          <thead>
            <tr>
              <th>국가명</th>
              <th>금메달</th>
              <th>은메달</th>
              <th>동메달</th>
              <th>액션</th>
            </tr>
          </thead>
          <tbody>
            {sortedMedalList.map((item) => {
              return (
                <MedalItem
                  data={item}
                  key={item.countryName}
                  deleteMedalList={deleteMedalList}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MedalList;
