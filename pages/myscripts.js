var image1 = document.querySelector('#image1');
var num = 1;
var totNum = 5;
var yesBtn = document.getElementById("yesBtn");
var noBtn = document.getElementById("noBtn");
var nextBtn = document.getElementById("nextBtn");
var myForm = document.getElementById("myForm");
var addBtn = document.getElementById("addBtn");
var fname = document.getElementById("fname");
var fnameNum = 0;
var fnameList = document.getElementById("fnameList");
var fname1 = document.getElementById("fname1");
// var bool = false;

// var images = [];

// images[0] = ['img/rj-wedding-invi1(1).png'];
// images[1] = ['img/rj-wedding-invi1(1-2).png'];
// images[2] = ['img/rj-wedding-invi1(1-1).png'];
// images[3] = ['img/rj-wedding-invi1(2).png'];
// var index = 3;

// function change() {
//   document.getElementById("image1").src = images[index];
//   if (index == 2) {
//     index = 0;
//     document.getElementById("demo").innerHTML = "Good day"; 
//   } else if (index == 1) {
//     index++;
//     document.getElementById("demo").innerHTML = "Good day"; 
//   }

  // for (let i = 0; i < 4; i++) {
  //   document.getElementById("image1").src = images[i];
  // }

  // setTimeout(function() {
  //     // Add tasks to do
  // }, 1000);
// }

function nextImage() {
  // Set image size to 1.5 times original
  // image1.style.transform = "scale(1.05)";
  // Animation effect
  // image1.style.transition = "transform 0.25s ease";

  if (num < totNum){
        // document.getElementById("image1").src = "img/rj-wedding-invi(2).png";    
        // image1.src = 'img/rj-wedding-invi1(2).png';
        // bool++;
        num++;
        image1.src = 'img/rj-wedding-invi1('+num+').png';
        if(num == 3){
          // yesBtn.style.visibility = (visible ? 'hidden' : 'visible');
          yesBtn.style.visibility = "visible";
          noBtn.style.visibility = "visible";
          nextBtn.style.visibility = "hidden";
        }
        if(num == 4){
          // yesBtn.style.visibility = (visible ? 'hidden' : 'visible');
          yesBtn.style.visibility = "hidden";
          noBtn.style.visibility = "hidden";
          nextBtn.style.visibility = "hidden";
          myForm.style.visibility = "visible";
          addBtn.style.visibility = "visible";
        }
        if(num==6){
        }
        
  }
  else if (num == totNum){
    alert("This is the last page :)");
  }
  
  // resetImg();

  // else if (bool == 2){
  //     bool++;
  //     image1.src = 'img/rj-wedding-invi1('+bool+').png';
  // }
  
//   else if (bool == "2"){
//     image1.src = 'img/rj-wedding-invi1(1-1).png';
//       bool = "3";
//   }
//   else if (bool == "3"){
//     image1.src = 'img/rj-wedding-invi1(2).png';
//       bool = "4";
//   }
//   else if (bool == "4"){
//     image1.src = 'img/rj-wedding-invi1(1).png';
//       bool = "1";
//   }
  
}

// const yesBtn = document.getElementById("yesBtn");
//   const nextImg = document.getElementById("nextImg");
//   nextImg.onclick = function () {

//     if (yesBtn.style.display !== "none") {
//       yesBtn.style.display = "none";
//     } else {
//       yesBtn.style.display = "block";
//     }
 
//   };
  


// function setImageVisible(id, visible) {
//     var img = document.getElementById(id);
//     img.style.visibility = (visible ? 'visible' : 'hidden');
//     image1.src = 'img/rj-wedding-invi1(2).png';
// }

// function changeImage() {
//   if (img.attr('src') == "img/rj-wedding-invi1(1).png") {
//       image1.src = 'img/rj-wedding-invi1(2).png';
//   }
// }

function backImage() {
  if (num == 1){
    alert("This is the 1st page :)");
  }
  else if (num > 1){
      if(num == 3){
        yesBtn.style.visibility = "hidden";
        noBtn.style.visibility = "hidden";
        nextBtn.style.visibility = "visible";
      }
      if(num == 4){
        // yesBtn.style.visibility = (visible ? 'hidden' : 'visible');
        yesBtn.style.visibility = "visible";
        noBtn.style.visibility = "visible";
        nextBtn.style.visibility = "hidden";
        myForm.style.visibility = "hidden";
        addBtn.style.visibility = "hidden";
      }
      if(num == 5){
        nextBtn.style.visibility = "hidden";
        myForm.style.visibility = "visible";
        addBtn.style.visibility = "visible";
        fnameList.style.visibility = "hidden";
      }
      if(num == 6){
      }
      num--; 
      image1.src = 'img/rj-wedding-invi1('+num+').png';
  }
  
}

function addFullName(){
    if (num < totNum){
      // document.getElementById("image1").src = "img/rj-wedding-invi(2).png";    
      // image1.src = 'img/rj-wedding-invi1(2).png';
      // bool++;
      
      if (fname.value == ''){
        alert('Please enter a value :)');
      }
      else {
        // First create a DIV element.
      // var yesBtn = document.getElementById("yesBtn");
      // var newFnameInputField = document.createElement('div');
        // Then add the content (a new input box) of the element.
        // newFnameInputField.innerHTML = "<input name='full_name' id='fname' placeholder='Full name'/>&nbsp&nbsp<button id='delBtn' onclick=''><i class='fa fa-times' aria-hidden='true'></i></button>";
        // Finally put it where it is supposed to appear.
      // document.getElementById("newFnameInputField").appendChild(newFnameInputField);
      
      
      // fnameNum++;
        
        // image1.src = 'img/rj-wedding-invi1('+num+').png';
        
        //
        // if(num == 5){
        //   nextBtn.style.visibility = "hidden";
        //   myForm.style.visibility = "hidden";
        //   addBtn.style.visibility = "hidden";
        //   fnameList.style.visibility = "visible";
        //    num++;
          //
          
          // var curr;
          // var fnameList1 = document.createElement('div');

          // myForm.action = "https://api.web3forms.com/submit";
          myForm.action = "lastPage.html"
          
          // alert('.');
          //
          // image1.src = 'img/rj-wedding-invi1(5).png';
          // window.location.hash = 'index-1.html';
          // alert('.');
          // fname1.innerHTML = fname.value;
          //

          // if(bool == false){
          //   bool = true;
            // fnameList1.innerHTML = '<p id="fname1">'+fname.value+'</p>';
            // fnameList.appendChild(fnameList1);
          //   fname1.innerHTML = fname.value;
          //   curr = fname.value;
          // }
          // if(curr != fname.value){
          //   fname1.innerHTML = fname.value;
          //   alert(fname.value);
          // }
          

          // $.ajax({
          //   url:'',
          //   type:'post',
          //   data:$("#myForm").serializeArray(),
          //   success: function(){
          //     alert("Form Data Submitted :)")
          //   },
          //   error: function(){
          //     alert("There was an error :(")
          //   }
          // });
        // }
      }
      
      
          
    }
    else if (num == totNum){
      alert("This is the last page :)");
    }
}

// function SubForm (){
//   $.ajax({
//       url:'',
//       type:'post',
//       data:$("#myForm").serializeArray(),
//       success: function(){
//         alert("Form Data Submitted :)")
//       },
//       error: function(){
//         alert("There was an error :(")
//       }
//   });
// }

// function yesAttend() {
//   if (num < totNum){
//     num++;
//     image1.src = 'img/rj-wedding-invi1('+num+').png';
//     if(num == 3){
//       yesBtn.style.visibility = "visible";
//       noBtn.style.visibility = "visible";
//       nextBtn.style.visibility = "hidden";
//     }
    
//   }
//   else if (num == totNum){
//   alert("This is the last page :)");
//   }
// }

function noAttend() {
  
}


// Get the img object using its Id
img = document.getElementById("img1");
// Function to increase image size
function enlargeImg() {
  // Set image size to 1.5 times original
  img.style.transform = "scale(1.5)";
  // Animation effect
  img.style.transition = "transform 0.25s ease";
}
// Function to reset image size
function resetImg() {
  // Set image size to original
  image1.style.transform = "scale(1)";
  image1.style.transition = "transform 0.25s ease";
  alert(":)");
}

