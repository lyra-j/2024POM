import React, { useState } from "react";
import "./App.css";
import MedalForm from "./components/MedalForm";
import MedalList from "./components/MedalList";
import { updateLocalStorage } from "./utils/localStorage";

const App = () => {
  const storedCountries = JSON.parse(localStorage.getItem("medalList"));

  // null 또는 undefined 일때 빈배열 반환 추가
  const [medalList, setMedalList] = useState(() =>
    storedCountries ? storedCountries : []
  );

  // 국가별 메달 정보 로컬 스토리지에 저장
  const saveMedalList = (country) => {
    const newMedalList = [...medalList, country];
    updateLocalStorage(setMedalList, "medalList", newMedalList);
  };

  // 선택된 메달 정보 로컬 스토리지에서 삭제 // 하쒸..또 return 냠냠ㅠ
  const deleteMedalList = (country) => {
    const deleteCheckAlert = confirm("해당 국가를 삭제하시겠습니까?");
    if (deleteCheckAlert === true) {
      alert("삭제되었습니다.");
      const updateMedalList = medalList.filter((list) => {
        return list.countryName !== country.countryName;
      });
      updateLocalStorage(setMedalList, "medalList", updateMedalList);
    } else {
      return false;
    }
  };

  // 메달 정보 업데이트
  const updateMedalList = (updatedCountry) => {
    const hasCountry = medalList.some((country) => {
      return country.countryName === updatedCountry.countryName;
    });

    if (!hasCountry) {
      alert("일치하는 국가명이 없습니다. 먼저 국가를 추가해주세요");
      return;
    }

    // 메달 개수가 0 이상인지 체크
    if (
      updatedCountry.goldMedals < 0 ||
      updatedCountry.silverMedals < 0 ||
      updatedCountry.bronzeMedals < 0
    ) {
      alert("메달 개수는 0 이상이어야 합니다.");
      return;
    }

    const updatedMedalList = medalList.map((country) => {
      return country.countryName === updatedCountry.countryName
        ? updatedCountry
        : country;
    });

    updateLocalStorage(setMedalList, "medalList", updatedMedalList);
    alert(`${updatedCountry.countryName}의 메달 개수가 변경되었습니다!`);
  };

  return (
    <>
      <header>
        <h1>2024 Paris Olympic</h1>
        <div>
          <MedalForm
            saveMedalList={saveMedalList}
            updateMedalList={updateMedalList}
          />
          {medalList.length <= 0 && (
            <p>아직 등록된 국가가 없습니다. 메달을 추적하세요!</p>
          )}
        </div>
      </header>

      <main>
        {/* 메달 집계 리스트가 표시될 자리 */}
        {medalList.length > 0 && (
          <MedalList medalList={medalList} deleteMedalList={deleteMedalList} />
        )}
      </main>
    </>
  );
};

export default App;
