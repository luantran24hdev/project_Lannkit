// mode dark



// push to top

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document

  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
$(document).ready(function(){
    $("#myBtn").click(function() {
        $("html, body").animate({ 
            scrollTop: 0 
        }, "slow");
        return false;
    });
});





// Toggle button
function myToggle() {
  var x = document.getElementById("form-menu-mobile");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// two-way binding in javascript

function validateForm() {
    // this.e.target.value
        var name = document.myForm.name.value;
        var password = document.myForm.password.value;
        var email = document.myForm.email.value;
        var status = false;
        console.log('password=',password);
        console.log('status=',status);
 
        if (name === '') {
            document.getElementById("nameloc").innerHTML = 
                " Vui lòng điền vào ô trống !";
            status = false;
        } else if(name.length < 8){
            document.getElementById("nameloc").innerHTML = 
                'Số lượng kí tự không được bé hơn 8 !';
            status = false;
        }else { 
            document.getElementById("nameloc").innerHTML = 
                '<span>Đã hợp lệ!</span>';
            status = true;
        }


        // password
        if (password === '') {
            document.getElementById("passwordloc").innerHTML = 
                "Vui lòng điền vào ô trống !";
            status = false;
        } else if(password.length < 8){
            document.getElementById("passwordloc").innerHTML = 
                "Số lượng kí tự không được bế hơn 8 !";
        }
        else {
            document.getElementById("passwordloc").innerHTML = 
            '<span>Đã hợp lệ!</span>';
            status = true;
        }
        status = true;


        // email
        if (email === '') {
            document.getElementById("emailloc").innerHTML = 
                "Vui lòng điền vào ô trống !";
            status = false;
        } else if(email.length < 8){
            document.getElementById("emailloc").innerHTML = 
                "Số lượng kí tự không được bế hơn 8 !";
        }
        else {
            document.getElementById("emailloc").innerHTML = 
            '<span>Đã hợp lệ!</span>';
            status = true;
        }
        status = true;
  
}

 // slider
       var slideIndex = 1;
            showSlides(slideIndex);

            function plusSlides(n) {
                console.log('ok');
                showSlides(slideIndex += n);
                }

                function currentSlide(n) {
                showSlides(slideIndex = n);
                }

                function showSlides(n) {
                var i;
                var slides = document.getElementsByClassName("slider-1");
            
                if (n > slides.length) {slideIndex = 1}    
                if (n < 1) {slideIndex = slides.length}
                for (i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";  
                }
              
                slides[slideIndex-1].style.display = "flex";  
          
            }



            // slider 2 

        



            // call api login 


            function UserAction() {
                var xhttp = new XMLHttpRequest();
                xhttp.open("POST", "Your Rest URL Here", true);
                xhttp.setRequestHeader("Content-type", "application/json");
                xhttp.send();
                var response = JSON.parse(xhttp.responseText);
            }


            


            // type  bindtext


            /* 
            
                 <div class="title-sidebar">
                            <p>The most useful resource</p>
                            <p class="color">ever created for Deverlopers</p>
                </div>
            
            */
        var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.09em solid #42ba96}";
        document.body.appendChild(css);
    };


    
