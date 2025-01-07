import "./input.css";
import articles from "./articles.js";

const section = document.querySelector("#recent-blog-posts");
section.innerHTML = "";

articles.forEach((article) => {
  const articleElement = document.createElement("article");
  articleElement.classList.add("mb-4", "border", "w-[391px]");
  articleElement.innerHTML = `
    <img src="${article.img}" alt="${article.title}" />
    <p class="text-sm text-[#6941C6] font-semibold">${article.author.name} - ${
    article.date
  }</p>
    <h1 class="text-xl font-bold my-4">${article.title}</h1>
    <p>${article.teaser}</p>
    <ul class="flex">
      ${article.tags
        .map(
          (tag) =>
            `<li><span class="bg-[#F9F5FF] text-[#6941C6] px-2 py-1 rounded-md mr-2">${tag}</span></li>`
        )
        .join("")}
    </ul>
    `;
  section.appendChild(articleElement);
});
