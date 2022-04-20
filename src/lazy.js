const isIntersecting = (entry) => {
    return entry.isIntersecting;    //true if inside viewport
}

const action = (entry)=>{
    const nodo = entry.target;
    console.log('holis');

    observer.unobserve(nodo);
}

const observer = new IntersectionObserver((entries)=>{
    entries.filter(isIntersecting).forEach(action)
});

export const registerImage = (image) => {
    //intersectation observer
    observer.observe(image);
}