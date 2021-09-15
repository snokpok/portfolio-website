const projectsList = [
  {
    name: "Koseur: Nightlife App",
    description: "Nightlife app for Vietnamese bars, built with Next.js + Sass",
    link: "https://koseur-frontend.vercel.app/",
    key: "koseur",
    imgFormat: "png",
  },
  {
    name: "TDS Company Ltd. Landing Page",
    description:
      "Renewing a Vietnamese ceramics company's landing page with HTML5 + CSS3",
    link: "http://tdsco-ceramic.com",
    key: "tds",
    imgFormat: "jpg",
  },
  {
    name: "Simple chat app",
    description:
      "Chat app to experiment with Firebase's Firestore and OAuth services. Built with Next.js + ChakraUI",
    link: "https://chat-app.vuvincent.com",
    key: "chat-app",
    imgFormat: "png",
  },
  // {
  //   name: "Heart Attack Classification",
  //   description: "Project taken from a freelancing client",
  //   link: "https://github.com/Snakpi/heart-attack-clf/",
  //   key: "hat",
  //   imgFormat: "jpg",
  // },
  // {
  //   name: "EDA on Wish's Summer Clothes Dataset",
  //   description:
  //     "Quantile analysis on Wish's Summer Clothes Dataset' on Kaggle",
  //   link: "https://www.kaggle.com/snakepie/eda-of-wish-s-summer-clothes-sales-data",
  //   key: "wsc",
  //   imgFormat: "jpg",
  // },
];

const projectsContainer = document.querySelector(
  ".section-container #projects"
);

for (let i = 0; i < projectsList.length; i++) {
  const projectObj = projectsList[i];
  const project = document.createElement("div");
  project.className = "project";
  const coverImageContainer = document.createElement("div");
  coverImageContainer.className = "cover-image-container";

  const coverImage = document.createElement("img");
  coverImage.className = "cover-image";
  coverImage.src = `static/projects/${projectObj.key}.${projectObj.imgFormat}`;
  coverImageContainer.append(coverImage);

  const caption = document.createElement("div");
  caption.className = "caption";
  const h4 = document.createElement("h4");
  h4.innerText = projectObj.name;
  const p = document.createElement("p");
  p.innerText = projectObj.description;
  const link = document.createElement("div");
  link.className = "link";
  const a = document.createElement("a");
  a.setAttribute("href", projectObj.link);
  a.setAttribute("target", "_blank");
  a.innerText = "Link";
  const hr = document.createElement("hr");

  link.append(a, hr);
  caption.append(h4, p);
  project.append(coverImageContainer, caption, link);
  projectsContainer.append(project);
}
