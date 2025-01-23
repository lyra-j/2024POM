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
    const updateMedalList = medalList.filter((item) => {
      return item.countryName !== country.countryName;
    });
    updateLocalStorage(setMedalList, "medalList", updateMedalList);
  };

  // 메달 정보 업데이트
  const updateMedalList = (updatedCountry) => {
    const hasCountry = medalList.some((country) => {
      return country.countryName === updatedCountry.countryName;
    });

    if (!hasCountry) {
      alert("먼저 국가를 추가해주세요");
      return;
    }

    const updatedMedalList = medalList.map((country) => {
      return country.countryName === updatedCountry.countryName
        ? updatedCountry
        : country;
    });

    updateLocalStorage(setMedalList, "medalList", updatedMedalList);
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
