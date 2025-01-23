import React, { useState } from "react";
import Button from "./Button";
import InputBox from "./InputBox";

export const MedalForm = ({ saveMedalList, updateMedalList }) => {
  // 나라별 금, 은, 동 메달 객체형으로 셋팅
  const [country, setCountry] = useState({
    countryName: "",
    goldMedals: "",
    silverMedals: "",
    bronzeMedals: "",
  });

  const inputList = [
    {
      label: "국가명",
      id: "countryName",
      value: country.countryName,
    },
    {
      label: "금메달",
      id: "goldMedals",
      value: country.goldMedals,
    },
    {
      label: "은메달",
      id: "silverMedals",
      value: country.silverMedals,
    },
    {
      label: "동메달",
      id: "bronzeMedals",
      value: country.bronzeMedals,
    },
  ];

  // 입력받은 값 없데이트
  const handleInputChange = (e) => {
    const { id, value } = e.target;

    setCountry((prevCountry) => ({
      ...prevCountry,
      [id]: value,
    }));

    // 메달입력시 숫자 확인
    if (id === "goldMedals" || id === "silverMedals" || id === "bronzeMedals") {
      const updatedCountry = { ...country, [id]: Number(value) || 0 };
      setCountry(updatedCountry);
    }
  };

  // 국가추가시 버튼 클릭시 확인
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // 빈 값 확인
    if (Object.values(country).includes("")) {
      alert("작성되지 않은 값이 있습니다. 모든 값을 입력해주세요.");
      return;
    }

    const storedCountries = JSON.parse(localStorage.getItem("medalList")) || [];

    // 이미 등록된 국가가 있는지 확인
    const hasCountry = storedCountries.some((item) => {
      return item.countryName === country.countryName;
    });

    if (hasCountry) {
      alert("이미 등록된 국가입니다.");
      return;
    }

    saveMedalList(country);
  };

  return (
    <form
      onSubmit={(e) => {
        handleFormSubmit(e);
      }}
    >
      {/* 국가명, 금메달, 은메달, 동메달  // map은 return !! */}
      {inputList.map((input) => {
        return (
          <InputBox
            label={input.label}
            key={input.id}
            id={input.id}
            value={input.value}
            onChange={(e) => handleInputChange(e)}
          />
        );
      })}

      <div>
        {/* 추가, 업데이트 */}
        <Button type="submit">국가 추가</Button>
        <Button type="button" onClick={() => updateMedalList(country)}>
          업데이트
        </Button>
      </div>
    </form>
  );
};

export default MedalForm;
