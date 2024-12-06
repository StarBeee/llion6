// 데이터 가져오기
const convertBtn = document.getElementById('convertBtn');
const clearBtn = document.getElementById('clearBtn');
const cmInput = document.getElementById('cmInput');
const resultDiv = document.getElementById('result');


// 변환식
function convertCmToInch() {
  const cmValue = parseFloat(cmInput.value);

  // cm 입력 필드에 유효 값이 입력 되지 않은 상태에서 변환 실행 시 작동할 함수
  if (isNaN(cmValue) || cmValue <= 0) {
    resultDiv.textContent = '유효한 cm 값(숫자)을 입력하세요.'; // 오류 시 출력 될 문구
    resultDiv.classList.remove('highlight'); // 결과 값 강조 스타일 제거
    return;
  }

  // cm->inch 변환 후 변환 값 출력
  const inchValue = cmValue * 0.393701;
  resultDiv.textContent = `= ${inchValue.toFixed(2)} inch`;
  resultDiv.classList.add('highlight'); // 결과 값 강조 스타일 추가
}

// 추가 : 변환 버튼 클릭 외 엔터 키로 변환 이벤트 함수
cmInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault(); // 기본 Enter 동작(폼 제출) 방지
    convertCmToInch();
  }
});

// 변환 버튼 클릭 이벤트
convertBtn.addEventListener('click', convertCmToInch);

// 초기화 버튼 클릭 이벤트
clearBtn.addEventListener('click', function () {
  cmInput.value = '';
  resultDiv.textContent = ''; // 초기화 시 출력 문구(공백)
  resultDiv.classList.remove('highlight'); // 결과 값 강조 스타일 제거
});