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


// sidebar buttons action
$(document).ready(function () {
  const navContent = document.querySelectorAll('.navContent')
  const profile = document.getElementsByClassName("profile")
  // const profile = document.getElementById("profile")

  const contents = document.querySelectorAll(".contents")
  const home = document.getElementsByClassName('home')
  const about = document.getElementsByClassName('about')
  const resume = document.getElementsByClassName('resume')
  const work = document.getElementsByClassName('work')
  const message = document.getElementsByClassName('message')
  



  home[0].classList.add('active')
  profile[0].classList.add('animate')
  animations()

  for (let i = 0; i < navContent.length; i++) {
    //home
    navContent[0].onclick = () => {

      animations()
      profileAnimate()
      contentActive(home)

      about[0].classList.remove('active')
      resume[0].classList.remove('active')
      work[0].classList.remove('active')
      message[0].classList.remove('active')

      console.log(home[0])
    }
    //about
    navContent[1].onclick = () => {

      profileAnimate()
      contentActive(about)
      // about[0].classList.add('active')

      home[0].classList.remove('active')
      resume[0].classList.remove('active')
      work[0].classList.remove('active')
      message[0].classList.remove('active')

      console.log(about[0])

    }
    //skill
    navContent[2].onclick = () => {

      profileAnimate()
      contentActive(resume)
      // resume[0].classList.add('active')

      home[0].classList.remove('active')
      about[0].classList.remove('active')
      work[0].classList.remove('active')
      message[0].classList.remove('active')

      console.log(resume[0])

    }
    //work
    navContent[3].onclick = () => {
      
      profileAnimate()
      contentActive(work)
      // work[0].classList.add('active')

      home[0].classList.remove('active')
      resume[0].classList.remove('active')
      about[0].classList.remove('active')
      message[0].classList.remove('active')

      console.log(work[0])

    }//message
    navContent[4].onclick = () => {

      profileAnimate()
      contentActive(message)
      // message[0].classList.add('active')

      home[0].classList.remove('active')
      resume[0].classList.remove('active')
      about[0].classList.remove('active')
      work[0].classList.remove('active')

      console.log(message[0])

    }
  }

// activates content 
function contentActive(arr){
  const list = ['home','about','resume','work','message']
  
  elName = arr[0].classList

  list.map((el)=>{
    if(el === elName[0]){
      console.log('content Active ')
     
      if(arr[0].classList.length == 2){

        // home[0].classList.remove('active')
        // about[0].classList.remove('active')
        // resume[0].classList.remove('active')
        // work[0].classList.remove('active')
        // message[0].classList.remove('active')

        setTimeout(()=>{
          arr[0].classList.add('active')
        },1)
      
      }else if(arr[0].classList.length == 1){
        arr[0].classList.add('active')
      }
    }

  } )
 
}

  //profile animation
  function profileAnimate() {
    console.log(profile[0].classList.length)

    if (profile[0].classList.length === 2) {

      profile[0].classList.remove('animate')
      setTimeout(() => {
        profile[0].classList.add('animate')
      },1)
      console.log(profile[0])

    } else if (profile[0].classList.length === 1) {

      profile[0].classList.add('animate')
      console.log(profile[0])

    }
  }


  // name animation
  function animations() {
    const text = baffle('.data-name');
    text.set({
      characters: 'zpxzVpasdfh86136░█▒ ░░░█▓ >░░ ▓/▒█▓ █ █>█▒sayg▒ ░░░█▓ >yf',
      speed: 150
    });
    text.start();
    text.reveal(80000);

    const text1 = baffle('.quote-text');
    text1.set({
      characters: 'qwertyuiopasdfgh8613611888',
      speed: 130
    });
    text1.start();
    text1.reveal(5500);

    return;
  }
})


// form validation 
$(document).ready(function () {
  const form = document.getElementById("form")
  const submitBtn = document.getElementById("submit-btn")


  $('#form').validate({

    errorClass: 'error fail-alert',
    validClass: 'valid success-alert',
    rules: {
      name: {
        required: true,
       
      },
      email: {
        required: true,
        email: true
      },
      subject: {
        required: true
      }
    },
    messages: {
      email:{
        email:'Inavlid email'
      }
    }
  })

  // form.onsubmit= ()=>{
  //   $.get("https://formsubmit.co/el/focetu");
  // }

  
})


