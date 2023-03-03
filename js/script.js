/* Abre e fecha o menu lateral em modo mobile */

const menuMobile = document.querySelector('.menu-mobile')
const body = document.querySelector('body')

menuMobile.addEventListener('click', () => {
    menuMobile.classList.contains("bi-list")
    ?menuMobile.classList.replace("bi-list", "bi-x")
    :menuMobile.classList.replace("bi-x", "bi-list")
})










































/* 
class MobileNavBar{
    constructor(mobileMenu, navList, navItem){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navItem = document.querySelectorAll(navItem);
    
        this.activeClass = "active";
        this.animateLinks();
       
    }

    animateLinks(){ 
        console.log("foii")
        this.navItem.forEach((link, index) => {
            link.style.animation
            ?(link.style.animation = "")
            :(link.style.animation= `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
   }

   handleClick(){
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
   }
   
   
   addClickEvent(){
    this.mobileMenu.addEventListener("click", this.handleClick);
    }
    Infinity(){
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }






}

const mobileNavBar = new MobileNavBar(
    ".nav-menu",
    ".nav flex-column",
    ".nav flex-column li",
);


mobileNavBar.Infinity();
*/