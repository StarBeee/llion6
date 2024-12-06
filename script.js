// 데이터 가져오기
const convertBtn = document.getElementById('convertBtn');
const clearBtn = document.getElementById('clearBtn');
const cmInput = document.getElementById('cmInput');
const resultDiv = document.getElementById('result');


// 변환식
function convertCmToInch() {
  const cmValue = parseFloat(cmInput.value);

  if (isNaN(cmValue) || cmValue <= 0) {
    resultDiv.textContent = '유효한 cm 값(숫자)을 입력하세요.';
    resultDiv.classList.remove('highlight'); // 강조 스타일 제거
    return;
  }

  const inchValue = cmValue * 0.393701;
  resultDiv.textContent = `= ${inchValue.toFixed(2)} inch`;
  resultDiv.classList.add('highlight'); // 강조 스타일 추가
}

// 엔터 키로 변환 실행
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
  resultDiv.textContent = '';
  resultDiv.classList.remove('highlight'); // 강조 스타일 제거
});


/*

// 변환 버튼 클릭 이벤트
convertBtn.addEventListener('click', function () {
  const cmValue = parseFloat(cmInput.value);

  if (isNaN(cmValue) || cmValue <= 0) {
    resultDiv.textContent = '유효한 cm 값(숫자)을 입력하세요.';
    return;
  }

  const inchValue = cmValue * 0.393701;
  resultDiv.textContent = 
  `= ${inchValue.toFixed(2)} inch`;
});

// 초기화 버튼 클릭 이벤트
clearBtn.addEventListener('click', function () {
  cmInput.value = '';
  resultDiv.textContent = `초기화 완료`;
});
*/