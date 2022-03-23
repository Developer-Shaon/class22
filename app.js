
// get elements from add_devs_form

import Alert from "./src/Alert.js";
import Storage from "./src/Storage.js";

const add_devs_form = document.getElementById('add_devs_form');
const devs_list = document.getElementById('devs_list');



add_devs_form.addEventListener('submit', function(e){

    e.preventDefault();
   let form_data = new FormData(e.target);
   let data = Object.fromEntries(form_data.entries());

   let { name, email, level, skill, photo, discription } = data;
 

    if( name == '' || email == '' || skill == '' || level == '' || discription == ''){

        document.querySelector('.msg').innerHTML = Alert.danger('All fild are requerd');

    }else{
        Storage.set('devs', data);
        document.querySelector('.msg').innerHTML = Alert.success('Successfully Join Here');
        add_devs_form.reset();

        getdata()
    }

});

        getdata()
        function getdata() {

            let data = Storage.get('devs');

            let list = '';

            data.map((data, index ) =>{

                let {name, email, photo, skill, level } = data;
        list += `
            

        <tr>

        <td>${index + 1 + "."}</td>
        <td>${name}</td>
        <td>${email}</td>
        <td>${skill}</td>
        <td>${level}</td>
        <td><img class="tbs" src="${photo ? photo : './assets/img/male-avator.jpg'}" alt=""></td>
        <td><div class="btn-list">
        <div class="view btn btn-info btn-sm"><i><i class="fa-solid fa-eye"></i></i></div>
        <div class="edit btn btn-primary btn-sm"><i><i class="fa-solid fa-edit"></i></i></div>
        <div class="del btn btn-danger btn-sm"><i><i class="fa-solid fa-trash"></i></i></div>
        </div></td>
        </tr>

        `

            });

            devs_list.innerHTML = list;
        }