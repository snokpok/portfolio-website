const projectsList = [
  {
    name: "Listlive: Making Productivity Social",
    description:
      "A MVP of a todo-list app where you can share your productivity grinds with others. Built with Next.js + TailwindCSS, with a ReST Python API backend + MongoDB",
    linkLabel: "Repo",
    link: "https://github.com/snokpok/listlive",
    key: "listlive",
    imgFormat: "png",
  },
  {
    name: "Koseur: Nightlife App",
    description: "Nightlife app for Vietnamese bars, built with Next.js + Sass",
    linkLabel: "Repo",
    link: "https://github.com/snokpok/koseur-frontend",
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
  const projectName = document.createElement("h4");
  projectName.style = "font-style: italic; font-weight: bold;";
  projectName.innerText = projectObj.name;
  const p = document.createElement("p");
  p.className = "descriptionProject";
  p.style = "color: rgb(174, 170, 170);";
  p.innerText = projectObj.description;
  const link = document.createElement("div");
  link.className = "link";
  const a = document.createElement("a");
  a.setAttribute("href", projectObj.link);
  a.setAttribute("target", "_blank");
  a.innerText = projectObj?.linkLabel ?? "Link";
  const hr = document.createElement("hr");

  link.append(a, hr);
  caption.append(projectName, p);
  project.append(coverImageContainer, caption, link);
  projectsContainer.append(project);
}
