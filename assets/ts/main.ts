import ImageItem from "./classes/ImageItem.js";

const images: ImageItem[] = [];
let selectedImage: ImageItem = images[0];

const officier = new ImageItem ("../assets/img/des12-0011r-2 (2).jpg", "Portrait d'un officier de marine", "Enseigne de vaisseau de profil portant le bicorne d'officier de marine");
const pretre = new ImageItem ("../assets/img/gall01-0001r-2.jpg", "Portrait d'un prêtre", "Prêtre en tenue de sortie portant un chapeau et une canne");

images.push(officier, pretre)

//Afficher titres des photos
const listContainer = document.querySelector ("#picture-list") as HTMLDivElement
const displayList = () => {
  listContainer.innerHTML = "";
  images.forEach(image => {
    let title = document.createElement('button')
    title.textContent = image.imageTitle
    title.className = image === selectedImage ? "btn btn-light p-2 px-4 w-100 my-2" : "btn btn-outline-light p-2 px-4 w-100 my-2"
    title.id = `selectContact-${image.id}`
    title.addEventListener('click', () => {
      selectedImage = image
      displayInfos();
      displayList();
    })
    listContainer.appendChild(title)
  })
}

// Afficher photo sélectionnée
const photoContainer = document.querySelector("#photo-area") as HTMLDivElement
const descriptionContainer = document.querySelector("#description-area") as HTMLDivElement

const displayInfos = () => {
  photoContainer.innerHTML = `<img class="img-fluid rounded-circle" src="${selectedImage.imageUrl}" alt="${selectedImage.imageTitle}">`
  descriptionContainer.innerHTML = `<p>${selectedImage.imageDescription}</p>`
}


displayList()