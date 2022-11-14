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

$(document).ready(function(){
    const navContent = document.querySelectorAll('.navContent')
    const iconNmae = document.querySelectorAll('.icon-name')

    // navContent[0].onmouseover=()=>{
    //     navContent[0].classnavContent.toggle('active')
    //     console.log(navContent[0])
    // }

    for (let i = 0; i < navContent.length; i++) {
        //console.log(navContent[i])
        navContent[i].onmouseover = () => {
          let j = 0
          while (j < navContent.length) {
            navContent[j++].className = 'navContent'
          }
          navContent[i].className = 'navContent active'
          console.log(navContent[i])
        }
      }
})