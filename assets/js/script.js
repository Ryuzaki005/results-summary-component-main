const scoreValue = document.querySelector(".score-value");
const categoriesList = document.querySelector(".categories");

fetch("../data.json")
  .then((response) => response.json())
  .then((data) => {
    let scoreTotal = 0;
    for (let i = 0; i < data.length; i++) {
      scoreTotal += data[i].score;
    }
    const average = Math.round(scoreTotal / data.length);
    scoreValue.textContent = average;

    categoriesList.innerHTML = data
      .map(
        (item) => `
      <li>
        <img src="${item.icon}" alt="${item.category}" />
        <span class="category-name">${item.category}</span>
        <span class="category-score"><span class="score">${item.score}</span> / 100</span>
      </li>`,
      )
      .join("");
  });
