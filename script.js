// var hands = ["ðĩ", "ð","ðē","ðģ","ðī","ðą","ðŋ","ðĪ","ð","ð","ð","ðđ","ð","ð","ðž","ðļ","ð","ð","ð",
// "ð", "ðŠī", "ðŦ", "ð", "ð§", "ðē", "ðŪ", "ð", "ðĨ", "ð·", "ðŧ", "ðŠ", "ð"]


// function morePlants(){
//   var xMax = document.documentElement.clientWidth - 50;
//   var yMax = document.documentElement.clientHeight - 100;
//   document.getElementById("root").style.width = xMax;
//   document.getElementById("root").style.height = yMax;
  
//   var htmlString = "";
//   for (var i = 0; i < 5; i++) {
//     var x = Math.floor(Math.random() * xMax) - 10;
//     var y = Math.floor(Math.random() * yMax) - 10;
//     var size = Math.floor(Math.random() * 400) + 100;
//     var h = hands[Math.floor(Math.random() * (hands.length))];
//     htmlString += '<div class="hands" style="top:' + y + 'px; left:' + x + 'px; font-size:' + size + '%;">' + h + '</div>';
//   }

//   document.getElementById('root').innerHTML += htmlString;
  
// }

// let num = 200;
// window.setInterval(function () {
//     if (num >= 0) {
//         morePlants();
//         num--;
//     } else {
//         setTimeout(function() {
//             clearTimeout(1);
//         })
//     }
// }, 20)
// // window.setInterval(function () {
// //   morePlants()
// // }, 20);