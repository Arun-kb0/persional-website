//moving bg image
$(document).ready(function () {
  var movementStrength = 25;
  var height = movementStrength / $(window).height();
  var width = movementStrength / $(window).width();
  $("#top-image").mousemove(function (e) {
    var pageX = e.pageX - ($(window).width() / 2);
    var pageY = e.pageY - ($(window).height() / 2);
    var newvalueX = width * pageX * -1 - 25;
    var newvalueY = height * pageY * -1 - 50;
    $('#top-image').css("background-position", newvalueX + "px     " + newvalueY + "px");
  });
});

$(document).ready(function () {
  const navContent = document.querySelectorAll('.navContent')
  const iconNmae = document.querySelectorAll('.icon-name')

  const home = document.querySelectorAll(".profile")


  //navbar
  for (let i = 0; i < navContent.length; i++) {
    //console.log(navContent[i])
    navContent[i].onmouseover = () => {
      let j = 0
      while (j < navContent.length) {
        navContent[j++].className = 'navContent'
      }
      navContent[i].className = 'navContent active'
      //console.log(navContent[i])
    }
  }
})



$(document).ready(function () {
  const navContent = document.querySelectorAll('.navContent')
  const profile = document.getElementsByClassName("profile")
  const contents = document.querySelectorAll(".contents")
  const home = document.getElementsByClassName('home')
  const about = document.getElementsByClassName('about')
  const resume = document.getElementsByClassName('resume')
  const work = document.getElementsByClassName('work')
  const message = document.getElementsByClassName('message')


  for (let i = 0; i < navContent.length; i++) {
//home
    navContent[0].onclick = () => {

      home[0].classList.add('active')

      about[0].classList.remove('active')
      resume[0].classList.remove('active')
      work[0].classList.remove('active')
      message[0].classList.remove('active')
      
      console.log(home[0])
    }
    //about
    navContent[1].onclick=()=>{
      about[0].classList.add('active')
      // profile[0].classList.add('about')


      home[0].classList.remove('active')
      resume[0].classList.remove('active')
      work[0].classList.remove('active')
      message[0].classList.remove('active')
      
      console.log(about[0])

    }
//skill
    navContent[2].onclick=()=>{
      resume[0].classList.add('active')

      home[0].classList.remove('active')
      about[0].classList.remove('active')
      work[0].classList.remove('active')
      message[0].classList.remove('active')
      
      console.log(resume[0])

    }
//work
    navContent[3].onclick=()=>{
      work[0].classList.add('active')

      home[0].classList.remove('active')
      resume[0].classList.remove('active')
      about[0].classList.remove('active')
      message[0].classList.remove('active')
      
      console.log(work[0])

    }//message
    navContent[4].onclick=()=>{
      message[0].classList.add('active')

      home[0].classList.remove('active')
      resume[0].classList.remove('active')
      about[0].classList.remove('active')
      work[0].classList.remove('active')

      console.log(message[0])

    }
  }
})