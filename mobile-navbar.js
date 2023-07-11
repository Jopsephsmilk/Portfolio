class MobileNavbar {
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks); 
        this.activeClass = "active";
        this.handleClick = this.handleClick.bind(this);
        
    }
    animatedLinks(){
        this.navLinks.forEach((link, index) => {
            link.style.animation 
            ?(link.style.animation = "")
            :(link.style.animation= `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s` );
        });
    }
    handleClick(){
        this.navList.classList.toggle(this.activeClass);
       this.animatedLinks();
    }
    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick);
    }
    init(){
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}
const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
     ".nav-list li",
);
mobileNavbar.init()
let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextSlide();
}, 5000)
function nextSlide(){
    count++;
    if(count>4){
        count = 1;
    }
    document.getElementById("radio"+count).checked = true;
}
