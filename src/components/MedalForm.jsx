import React, { useState } from "react";
import Button from "./Button";
import InputBox from "./InputBox";

export const MedalForm = ({ saveMedalList, updateMedalList }) => {
  // 나라별 금, 은, 동 메달 객체형으로 셋팅
  const [country, setCountry] = useState({
    id: crypto.randomUUID(),
    countryName: "",
    goldMedals: 0,
    silverMedals: 0,
    bronzeMedals: 0,
  });

  const init = () => {
    setCountry({
      id: crypto.randomUUID(),
      countryName: "",
      goldMedals: 0,
      silverMedals: 0,
      bronzeMedals: 0,
    });
  };

  const inputFields = [
    {
      label: "국가명",
      id: "countryName",
      value: country.countryName,
      placeholder: "국가명 입력",
    },
    {
      label: "금메달",
      id: "goldMedals",
      value: country.goldMedals,
      placeholder: "0",
    },
    {
      label: "은메달",
      id: "silverMedals",
      value: country.silverMedals,
      placeholder: "0",
    },
    {
      label: "동메달",
      id: "bronzeMedals",
      value: country.bronzeMedals,
      placeholder: "0",
    },
  ];

  // 입력받은 값 없데이트
  const handleInputChange = (e) => {
    const { id, value } = e.target;

    // 숫자 입력 검증 및 0 이상만 입력 받기
    if (id === "goldMedals" || id === "silverMedals" || id === "bronzeMedals") {
      const numValue = Number(value);
      if (isNaN(numValue) || numValue < 0) {
        alert("메달 개수는 0 이상이어야 합니다.");
        return;
      }
      setCountry((prevCountry) => ({
        ...prevCountry,
        [id]: numValue || 0, // 0 또는 양의 숫자만 설정
      }));
    } else {
      setCountry((prevCountry) => ({
        ...prevCountry,
        [id]: value,
      }));
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
    const hasCountry = storedCountries.some((list) => {
      return list.countryName === country.countryName;
    });

    if (hasCountry) {
      alert("이미 등록된 국가입니다.");
      return;
    }

    saveMedalList(country);
    alert(`${country.countryName}이 추가되었습니다!`);
    init();
  };

  return (
    <form className="input-container"
      onSubmit={(e) => {
        handleFormSubmit(e);
      }}
    >
      {/* 국가명, 금메달, 은메달, 동메달  // map은 return !! */}
      {inputFields.map((input) => {
        return (
          <InputBox
            label={input.label}
            key={input.id}
            id={input.id}
            value={input.value}
            placeholder={input.placeholder}
            onChange={(e) => handleInputChange(e)}
          />
        );
      })}

      <div className="button-wrap">
        {/* 추가, 업데이트 */}
        <Button type="submit">국가 추가</Button>
        <Button type="button" className="btn-update" onClick={() => updateMedalList(country)}>
          업데이트
        </Button>
      </div>
    </form>
  );
};

export default MedalForm;
