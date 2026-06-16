const API_URL = "https://food.ncnmncnm.workers.dev";

async function loadMeals() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    console.log(data);

function formatMeal(text) {
  return text
    // 괄호 안 알레르기 제거
    .replace(/\(\s*[\d.]+\s*\)/g, "")

    // 숫자.숫자.숫자. 형태 제거
    .replace(/\b\d+(\.\d+)*\.?/g, "")

    // 공백 정리
    .replace(/[ ]{2,}/g, " ")

    // 빈 줄 여러 개 정리
    .replace(/\n{3,}/g, "\n\n")

    .trim();
}
    document.getElementById("breakfast").textContent = formatMeal(data.breakfast);
    document.getElementById("lunch").textContent = formatMeal(data.lunch);
    document.getElementById("dinner").textContent = formatMeal(data.dinner);

  } catch (err) {
    console.error(err);
  }
}

loadMeals();
