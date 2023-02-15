const toggle_btn = document.querySelector('.toggle_btn')                                 
const toggle_btnIcon = document.querySelector('.toggle_btn i')                                 
const dropDownMenu = document.querySelector('.dropdown_mwnu') 

toggle_btn.onclick = function(){
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggle_btnIcon.classList = isOpen
    ?'fa-solid fa-mark'
    :'fa-solid fa-bars'
}