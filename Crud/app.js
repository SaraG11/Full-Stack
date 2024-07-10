let tag_form = document.getElementById('form');
console.log(tag_form)

tag_form.addEventListener('submit', function(e){

    e.preventDefault();
    let names = document.getElementById('names').value;
    let fullnames = document.getElementById('fullnames').value;
    let email = document.getElementById('email').value;
    let birthdate = document.getElementById('birthdate').value;

    console.log(names)
    console.log(fullnames)
    console.log(email)
    console.log(birthdate)

})