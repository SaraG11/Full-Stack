/* JS Puro
let tag_div = document.getElementsByClassName('container')[0];
tag_div.innerHTML = '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quam?</p>'
console.log(tag_div) */

/* JQuery
$('.container').html('<h2> Lorem ipsum</h2>');

let content = $('article').html();
console.log(content)*/


// JS Puro

// var tag_h3 = document.getElementById('title-1');
// tag_h3.style.color = 'blue';

// // JQuery
// $('#title-2').css('color', 'orange')

/*eventos jS puro
let tag_btn = document.getElementById('btn')
tag_btn.addEventListener('click', function(){
    let txtbtn = document.getElementById('txtbtn').innerText;
    if(txtbtn == 'Hide'){
        document.getElementById('txt').style.display = 'none';
        document.getElementById('txtbtn').innerText = 'Show';
    }else if(txtbtn == 'Show'){
        document.getElementById('txt').style.display = 'block';
        document.getElementById('txtbtn').innerText = 'Hide';
    }
})*/

/* eventos con JQuery
$('#btn').click(function(){
    let txtbtn = $('#txtbtn').text();
    if(txtbtn == 'Hide'){
        $('#txt').hide();
        $('#txtbtn').text('Show')
    }else if(txtbtn == 'Show'){
        $('#txt').show();
        $('#txtbtn').text('Hide')
    }
})*/

/*efectos JQuery

$('#btnhide').click(function(){
    $('.container').hide();
});

$('#btnshow').click(function(){
    $('.container').show();
});

$('#btntoggle').click(function(){
    $('.container').toggle();
})

$('#btnfadein').click(function(){
    $('.container').fadeIn();
});

$('#btnhfadeout').click(function(){
    $('.container').fadeOut();
});

$('#btnSlaideUp').click(function(){
    $('.container').slideUp();
});

$('#btnhSlaidDown').click(function(){
    $('.container').slideDown();
});*/

$(function(){
    $(".chosen-select").chosen({
        disable_search_threshold: 3,
        no_results_text: 'No existe',
        rtl: true
    });
})


