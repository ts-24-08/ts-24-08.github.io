import "./input.css";
import articles from "./articles.js";
let styles;

const section = document.querySelector("#recent-blog-posts");
section.innerHTML = "";

articles.forEach((article, index) => {
  switch (index) {
    case 0:
      console.log("First Article: ", article);
      styles = [
        "mb-4",
        "border",
        "w-[391px]",
        "md:w-full",
        "lg:col-span-2",
        "lg:row-span-2",
      ];
      break;
    case 1:
      console.log("Second Article: ", article);
      styles = ["mb-4", "border", "w-[391px]", "md:w-[190px]", "md:w-full"];
      break;
    case 2:
      console.log("Third Article: ", article);
      styles = ["mb-4", "border", "w-[391px]", "md:w-[190px]", "md:w-full"];
      break;
    case 3:
      console.log("Fourth Article: ", article);
      styles = ["mb-4", "border", "w-[391px]", "md:w-full", "lg:col-span-2"];
      break;
    default:
      console.log("Other Articles: ", article);
      styles = ["mb-4", "border", "w-[391px]", "md:w-full"];
  }

  const articleElement = document.createElement("article");
  articleElement.setAttribute("key", index);
  articleElement.classList.add(...styles);
  articleElement.innerHTML = `
  <a href="#" class="flex flex-col ${
    index === 0 || index === 3 ? "md:flex-col" : "md:flex-row"
  }">
    <img src="${article.img}" alt="${article.title}"  class="cover ${
    index === 1 || index === 2 ? "md:max-w-48" : "md:w-full"
  }"/>
    <div>
    <p class="text-sm text-[#6941C6] font-semibold">${article.author} - ${
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
    </div>
    </a>
    `;
  section.appendChild(articleElement);
});
