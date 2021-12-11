const menubutton = document.querySelector('.ham_close');
const hamburger = document.querySelector('.hamburger');
const close_button = document.querySelector('.close_menu');
const mobile_menu = document.querySelector('.mobile_nav');

// bookmark values

const bookmark_icon = document.querySelector('.bookmark_icon');
const boomark_text = document.querySelector('.bookmark_text');
let bookmarked = false;

//plan details

const show_button = document.querySelector('.back_project');
const mobile_list = document.querySelector('.select_plan_mobile');
const desktop_list = document.querySelector('.select_plan_desktop');
const body_ele = document.querySelector('body');
const close_desktop = document.querySelector('.close_desktop_button');
const close_mobile = document.querySelector('.close_mobile_button');

const mobile_radios = document.getElementsByName('mobile_menu');
const desktop_radios = document.getElementsByName('desktop_menu');

const complete_but = document.querySelectorAll('.continue');
const complete_close = document.querySelector('.got_it');
const complete_div = document.querySelector('.completed');

const bambooSelect = document.querySelector('.bamboo_select');
const blackSelect = document.querySelector('.black_select');


//Mobile menu function

menubutton.addEventListener('click', ()=>{
    hamburger.classList.toggle('active');
    close_button.classList.toggle('active');
    mobile_menu.classList.toggle('active');
})

//Bookmark select function

bookmark_icon.addEventListener('click',()=>{
    if(!bookmarked){
        boomark_text.innerText = "Bookmarked";
        bookmarked = true;
    }else{
        boomark_text.innerText = "Bookmark";
        bookmarked = false;
    }
    bookmark_icon.classList.toggle('active');
})

// Display Selection list mobile or desktop

function add_menu(){
    mobile_list.classList.toggle('active');
    desktop_list.classList.toggle('active');
    body_ele.classList.toggle('active');
}

show_button.addEventListener('click',add_menu)

close_desktop.addEventListener('click',remove_menu);
close_mobile.addEventListener('click', remove_menu);

function remove_menu(){
    mobile_list.classList.remove('active');
    desktop_list.classList.remove('active');
    body_ele.classList.remove('active');
}

//Radio button selection

body_ele.addEventListener('change',(e)=>{
    mobile_radios.forEach( (radio)=>{
        radio.parentElement.parentElement.parentElement.classList.remove('active');
    })

    desktop_radios.forEach( (radio)=>{
        radio.parentElement.parentElement.parentElement.parentElement.classList.remove('active');
    })

    if(e.target.value = 'mobile'){
       e.target.parentElement.parentElement.parentElement.classList.add('active');  
    }

    if(e.target.value = 'desktop'){
        e.target.parentElement.parentElement.parentElement.parentElement.classList.add('active');
    }
    
})

//Initial selection based on checked radio button

function inital_select(){
    mobile_radios.forEach((radio)=>{
        if(radio.checked){
            radio.parentElement.parentElement.parentElement.classList.add('active');
        }else{
            radio.parentElement.parentElement.parentElement.classList.remove('active');
        }      
    })
    desktop_radios.forEach((radio)=>{
        if(radio.checked){
            radio.parentElement.parentElement.parentElement.parentElement.classList.add('active');
        }else{
            radio.parentElement.parentElement.parentElement.parentElement.classList.remove('active');
        }
    })
}

inital_select();


//Completed page display and close

complete_but.forEach((each_but)=>{
    each_but.addEventListener('click',()=>{
        mobile_list.classList.remove('active');
    desktop_list.classList.remove('active');
        complete_div.classList.add('active');
    })
})

complete_close.addEventListener('click',()=>{
    body_ele.classList.remove('active');
    complete_div.classList.remove('active');
})

//Select from main page

bambooSelect.addEventListener('click',()=>{
    add_menu();
  mobile_radios.forEach((radio,index)=>{
      if(index == 1){
          radio.checked = true;
          radio.parentElement.parentElement.parentElement.classList.add('active');
      }else{
        radio.parentElement.parentElement.parentElement.classList.remove('active');
      }
  })

  desktop_radios.forEach((radio,index)=>{
    if(index == 1){
        radio.checked = true;
        radio.parentElement.parentElement.parentElement.parentElement.classList.add('active');
    }else{
      radio.parentElement.parentElement.parentElement.parentElement.classList.remove('active');
    }
})
  
});

blackSelect.addEventListener('click',()=>{
    add_menu();
  mobile_radios.forEach((radio,index)=>{
      if(index == 2){
          radio.checked = true;
          radio.parentElement.parentElement.parentElement.classList.add('active');
      }else{
        radio.parentElement.parentElement.parentElement.classList.remove('active');
      }
  })

  desktop_radios.forEach((radio,index)=>{
    if(index == 2){
        radio.checked = true;
        radio.parentElement.parentElement.parentElement.parentElement.classList.add('active');
    }else{
      radio.parentElement.parentElement.parentElement.parentElement.classList.remove('active');
    }
})
});