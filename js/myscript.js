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


            
