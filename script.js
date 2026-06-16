const API_URL = "https://food.ncnmncnm.workers.dev";

function formatMeal(text) {
  return text
    .replace(/\([^)]+\)/g, "")
    .replace(/\d+(\.\d+)*\.?/g, "")
    .replace(/\n+/g, "\n")
    .trim();
}

async function loadMeals() {
  try {
    const data = await fetch(API_URL).then(res => res.json());

    document.getElementById("breakfast").textContent =
      formatMeal(data.breakfast);

    document.getElementById("lunch").textContent =
      formatMeal(data.lunch);

    document.getElementById("dinner").textContent =
      formatMeal(data.dinner);

  } catch (err) {
    console.error(err);

    document.getElementById("breakfast").textContent = "불러오기 실패";
    document.getElementById("lunch").textContent = "불러오기 실패";
    document.getElementById("dinner").textContent = "불러오기 실패";
  }
}

loadMeals();
