const username = "edataworker";
const repo = "mysite";
const branch = "main";

// LOGOS
loadImages("logo", "logoGallery");

// TESTIMONIALS
loadImages("testimonial", "testimonialGallery");


function loadImages(folder, elementId) {
  const gallery = document.getElementById(elementId);

  fetch(`https://api.github.com/repos/${username}/${repo}/contents/${folder}?ref=${branch}`)
    .then(res => res.json())
    .then(files => {
      files.forEach(file => {
        if (file.type === "file" && /\.(png|jpg|jpeg)$/i.test(file.name)) {
          const img = document.createElement("img");
          img.src = file.download_url;
          img.loading = "lazy";
          gallery.appendChild(img);
        }
      });
    })
    .catch(err => console.error("Error loading " + folder, err));
}

// IMAGE POPUP
const popup = document.getElementById("imgPopup");
const popupImg = document.getElementById("popupImage");
const closeBtn = document.querySelector(".popup-close");

document.addEventListener("click", e => {
  if (e.target.tagName === "IMG" && 
     (e.target.closest("#logoGallery") || e.target.closest("#testimonialGallery"))) {
    popup.style.display = "block";
    popupImg.src = e.target.src;
  }
});

closeBtn.onclick = () => popup.style.display = "none";
popup.onclick = e => {
  if (e.target === popup) popup.style.display = "none";
}


