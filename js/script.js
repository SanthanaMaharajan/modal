let showModal=document.querySelectorAll( ".show-modals" );
let modalWindow=document.querySelector(".modal");
let overlay=document.querySelector(".overlay");
let closeButton=document.querySelector(".close-btn");

for (let i = 0; i < showModal.length; i++) {
    showModal[i].addEventListener("click", openModal);
}

function openModal() {
    modalWindow.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

function closeModal(){
    modalWindow.classList.add("hidden");
    overlay.classList.add("hidden");
}

closeButton.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);