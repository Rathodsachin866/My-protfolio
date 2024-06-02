

let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click',function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})
//typing effect
let typed = new Typed('.auto-input',{
     strings:['front-end Devoloper!','student!','UX designer!'],
     typeSpeed:100,
     backSpeed:100,
     backDelay:2000,
     loop:true,

})
//get all click


/* fact section start */
/*#contact .contact-row .contact-left .icon-box{
  display: flex;
  gap: 15px;
 align-items: center;
  margin: 30px 0;
}
#contact .contact-row .contact-left .icon-box .icon i{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid var(--themeColor);
  line-height: 47px;

  font-size: 20px;
  color: var(--themeColor);
  transition: 0.5s


}
*/
