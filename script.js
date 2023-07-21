window.onscroll = () => {
  const nav = document.querySelector('#main_nav');
  if(this.scrollY <= 10) nav.className = ''; else nav.className = 'scroll';
};

 



const removeBtn = document.querySelector('.cross_button')
const topOffer = document.querySelector('.Notification_class')
removeBtn.onclick = function (){
  topOffer.className = 'close';
}
