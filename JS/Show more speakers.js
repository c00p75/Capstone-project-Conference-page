// See more & See less
const seeMore = document.querySelectorAll('.see-more');
const seeLess = document.querySelectorAll('.see-less');
const hiddenSpeakers =  document.querySelectorAll('.speakers .d-none');

function toggleHide(index, Nodelist) {
  seeMore[index].classList.toggle('d-none');
  for (let i=0; i < Nodelist.length; i++) {    
    Nodelist[i].classList.toggle('d-none');
  }
}

seeMore[0].addEventListener('click', () => {
  toggleHide(0, hiddenSpeakers);
})

seeLess[0].addEventListener('click', () => {
  toggleHide(0, hiddenSpeakers);
})
