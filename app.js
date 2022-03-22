
// get elements from add_devs_form

import Alert from "./src/Alert.js";

const add_devs_form = document.getElementById('add_devs_form');



add_devs_form.addEventListener('submit', function(e){

    e.preventDefault();
   let form_data = new FormData(e.target);
   let data = Object.fromEntries(form_data.entries());

   let { name, email, level, skill, photo, discription } = data;
 

    if( name == '' || email == '' || skill == '' || level == '' || photo == '' || discription == ''){

        document.querySelector('.msg').innerHTML = Alert.danger('All fild are requerd');

    }else{

        document.querySelector('.msg').innerHTML = Alert.success('Successfully Join Here');
    }

})