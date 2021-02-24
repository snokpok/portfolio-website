const projectsList = [
  {
    coverImageLink:
      "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/did_you_know_this_could_lead_to_heart_disease_slideshow/650x350_did_you_know_this_could_lead_to_heart_disease_slideshow.jpg",
    name: "Heart Attack Classification",
    description: "Project taken from a freelancing client",
    link: "https://github.com/Snakpi/heart-attack-clf/",
  },
  {
    coverImageLink:
      "https://media.istockphoto.com/photos/clothes-shop-interior-picture-id901863672?k=6&m=901863672&s=612x612&w=0&h=-_sWo8B6OJRaj4OuwblW8ytajBnBY_UMuaXGjr95wrE=",
    name: "EDA on Wish's Summer Clothes Dataset",
    description:
      "Quantile analysis on Wish's Summer Clothes Dataset' on Kaggle",
    link:
      "https://www.kaggle.com/snakepie/eda-of-wish-s-summer-clothes-sales-data",
  },
  {
    coverImageLink:
      "https://media.istockphoto.com/vectors/to-do-list-vector-id903719860?k=6&m=903719860&s=612x612&w=0&h=Haz8DqU-KAMnsc-bXs9AWusLZHSiQs5J8_a0QuGnIxY=",
    name: "Collaborative To-Do App",
    description: "Built an Express API and integrated with a React front-end",
    link: "",
  },
  {
    name: "TDS Company Ltd. Landing Page",
    description:
      "Renewing a Vietnamese ceramics company's landing page with HTML5 + CSS3",
    link: "https://snakpi.github.io/tdsco-ceramics",
  },
];

const projectsContainer = document.querySelector("#projects");

for (let i = 0; i < projectsList.length; i++) {
  const projectObj = projectsList[i];
  const project = document.createElement("div");
  project.className = "project";
  const coverImageContainer = document.createElement("div");
  coverImageContainer.className = "cover-image-container";

  const coverImage = document.createElement("img");
  coverImage.className = "cover-image";
  coverImage.src = `static/projects/${i + 1}.jpg`;
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
  const hr = document.createElement("hr");

  link.append(a, hr);
  caption.append(h4, p);
  project.append(coverImageContainer, caption, link);
  projectsContainer.append(project);
}
