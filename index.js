var nome        = document.querySelector('#exampleInputName');
var genero      = document.querySelectorAll("#form-user-create [name=gender]:checked");
var nascimento  = document.querySelector('#exampleInputBirth');
var pais        = document.querySelector('#exampleInputCountry');
var email       = document.querySelector('#exampleInputEmail');
var senha       = document.querySelector('#exampleInputPassword');
var foto        = document.querySelector('#exampleInputFile');
var admin       = document.querySelector('#exampleInputAdmin');

var fields       = document.querySelectorAll('#form-user-create [name]');

fields.forEach(function(field, index){

    if(field.name == "gender"){

        if(field.checked){

            console.log("sim", field);
        }
    }else{

        console.log("não");
    }


    //console.log(field.id, field.name, field.nodeValue, field.checked, index);

});
