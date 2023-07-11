window.onscroll = () => {
  const nav = document.querySelector('#navbar');
  if(this.scrollY <= 10) nav.className = ''; else nav.className = 'scroll';
};


const removeBtn = document.querySelector('.cross_button')
const topOffer = document.querySelector('.Notification_class')
removeBtn.onclick = function (){
  topOffer.className = 'close';
}

const toggleBtn = document.querySelector('.menu_toggle')
const toggleBtnIcon = document.querySelector('.menu_toggle i')
toggleBtn.onclick = function (){
  toggleBtnIcon.classList = isOpen
            ? 'fa-solid fa-xmark'
            : 'fa-solid fa-bars'
}
