// -------- finding task -------
// var text = document.getElementById('text').innerHTML;
// console.log(text)
// var come2 = document.getElementById('come2');
// var word = document.getElementById('word').value;
// var come = document.getElementById('come');

// ye access nhe hongi function m Q K function k block sy Bahir Hn. 

// function find(){

// var text = document.getElementById('text').innerHTML;
// var come = document.getElementById('come');
// var come2 = document.getElementById('come2');
// var word = document.getElementById('word').value;
// var word2 = document.getElementById('word2').value;

// var flag = 'No';

//     for(var i = 0; i < text.length; i++){

//         if ( text.slice(i , i+ word.length) === word) {

//           flag = 'Yes';
//          console.log(word , word2);
//          // come.innerHTML =`The word you enter, is exit in above Paragraph = '${text.slice(i , i+ word.length)}'`;

//          come.innerHTML = text.slice(0,i) + word2 + text.slice(i + word.length); // 1 way IF (specfic number e.g 12,4)

//         }  

//     }


//     if ( flag === 'No') {

//         come2.innerHTML =`The word you enter '${word}' , is Not exit in above Paragraph`;

//     }

// }


// function find() {


//     var text = document.getElementById('text').innerHTML;
//     var come = document.getElementById('come');
//     var come2 = document.getElementById('come2');
//     var word = document.getElementById('word').value; // jo remove krna h
//     var word2 = document.getElementById('word2').value; // jo add krwana h 
//     word2.className += " a";
//     // var a = word2;
    
    
//     // word2.style.backgroundColor = "red";
//     // word2.style.backgroundColor = 'red';
   
    
//     var firstChar = text.indexOf(word); 
//     // text.style.backgroundColor = "red";
//     // console.log(firstChar);

//     // var boolean = false;
    
//         if ( firstChar >= 0 && firstChar !== -1) { // ager word na milay to -1 ata h.
    
//             // boolean = true;
//             // come.innerHTML = text.slice(0,firstChar) + word2 + text.slice(firstChar + word.length); // 2 way (indexOf)

//             var a = text.replace(word , word2);   
//             come.innerHTML = a ; // 3 way (Replace)
    
//         }  
    
//         // if (boolean === false) {

//         //     come2.innerHTML =`The word you enter '${word}' , is Not exit in above Paragraph`;


//         // }   

//         else {

//             come2.innerHTML =`The word you enter '${word}' , is Not exit in above Paragraph`;

//         }
            
// }



// --------- for Find ---------
function Find() {
var text = document.getElementById('text').innerHTML;
var word = document.getElementById('word').value; // jo remove krna h
var come = document.getElementById('come');
var come2 = document.getElementById('come2');
var b = word.length;


for (var i = 0; i < text.length; i++) {
    
    if (text.slice(i, i + b) === word) {

        var a =  text.slice(i, i + b);

        a = `<span style="color: red;">${a}</span>`;

        console.log(a);

        come.innerHTML = text;   

        

        come2.innerHTML = '';



        break;




    } else {

            come2.innerHTML =`The word you enter '${word}' , is Not exit in above Paragraph`;

     }
                    

}
   
} 
