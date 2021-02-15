const menus = document.querySelectorAll(".cool > li");
const dropdownBackground = document.querySelector(".dropdownBackground");

function enterHandler(){
    this.classList.add("trigger-enter");

    setTimeout(()=>{this.classList.add("trigger-enter-active");},50);
    

    const dropdown = this.querySelector(".dropdown");
    const rect = dropdown.getBoundingClientRect();
    const navRect = document.querySelector(".top").getBoundingClientRect();
    console.log(rect);

    

    dropdownBackground.classList.add("open");
    dropdownBackground.style.width = rect.width+"px";
    dropdownBackground.style.height = rect.height+"px";
    dropdownBackground.style.top = (rect.top-navRect .top)+"px";
    dropdownBackground.style.left = (rect.left-navRect .left)+"px";

}
function leaveHandler(){
    dropdownBackground.classList.remove("open");
    this.classList.remove("trigger-enter-active");
    this.classList.remove("trigger-enter");

}

menus.forEach(menu => {
    menu.addEventListener("mouseenter",enterHandler);
    menu.addEventListener("mouseleave",leaveHandler);
});
