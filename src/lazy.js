const isIntersecting = (entry) => {
  return entry.isIntersecting; //true if inside viewport
};

const loadImage = (entry) => {
  const container = entry.target;
  container.className = "p-4";
  const image = container.firstChild;
  const url = image.dataset.src;

  image.src = url;

  // image.src = `https://randomfox.ca/images/${random()}.jpg`;

  observer.unobserve(container);
};

const observer = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(loadImage);
});

export const registerImage = (image) => {
  //intersectation observer
  observer.observe(image);
};
