// دریافت عناصر HTML
const searchInput = document.getElementById("search-input");
const searchBar = document.getElementById("search-bar");
const searchToggle = document.getElementById("search-toggle");

// افزودن قابلیت نمایش/مخفی کردن جستجو
searchToggle.addEventListener("click", () => {
  searchBar.style.display = searchBar.style.display === "block" ? "none" : "block";
});

// افزودن قابلیت جستجو
searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim();
  const resultsContainer = document.querySelector(".search-results");

  // حذف نتایج قبلی
  if (resultsContainer) {
    resultsContainer.remove();
  }

  if (query !== "") {
    // پیدا کردن کارت‌ها و محتوای مرتبط
    const cards = document.querySelectorAll(".card");
    const results = [];
    cards.forEach(card => {
      const content = card.querySelector(".content").textContent;
      if (content.includes(query)) {
        results.push({
          title: content,
          link: card.querySelector(".watch-btn").href
        });
      }
    });

    // نمایش نتایج جستجو
    const resultsDiv = document.createElement("div");
    resultsDiv.classList.add("search-results");
    resultsDiv.style.position = "absolute";
    resultsDiv.style.background = "white";
    resultsDiv.style.border = "1px solid #ccc";
    resultsDiv.style.width = "100%";
    resultsDiv.style.marginTop = "5px";
    resultsDiv.style.zIndex = "1000";

    if (results.length > 0) {
      results.forEach(result => {
        const resultLink = document.createElement("a");
        resultLink.href = result.link;
        resultLink.target = "_blank";
        resultLink.textContent = result.title;
        resultLink.style.display = "block";
        resultLink.style.padding = "10px";
        resultLink.style.textDecoration = "none";
        resultLink.style.color = "black";

        resultLink.addEventListener("mouseover", () => {
          resultLink.style.background = "#f0f0f0";
        });
        resultLink.addEventListener("mouseout", () => {
          resultLink.style.background = "white";
        });

        resultsDiv.appendChild(resultLink);
      });
    } else {
      const noResult = document.createElement("p");
      noResult.textContent = "نتیجه‌ای یافت نشد.";
      noResult.style.padding = "10px";
      resultsDiv.appendChild(noResult);
    }

    searchBar.appendChild(resultsDiv);
  }
});
