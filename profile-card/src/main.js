import './style.css';

const likeButton = document.querySelector('#likeButton');

likeButton.addEventListener('click', () => {
  likeButton.classList.toggle('bg-red-500');
  likeButton.classList.toggle('text-white');
})