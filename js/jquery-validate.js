

// $(function() {
  
//   $("form[name='myForm']").validate({

//     rules: {

//       name: {
//         required: true,
//         minlength: 2
//       },
      
//       email: {
//         required: true,
//         minlength: 2
//       },
//       password: {
//         required: true,
//         minlength: 2
//       }
//     },
//     // Specify validation error messages
//     messages: {
//       name: {
//         required: "Vui lòng nhập tên đăng nhập",
//         minlength: "Mật khẩu quá ngắn. Tên đăng nhập phải trên 8 kí tự",
//       },
//       email: {
//         required: "Vui lòng nhập email",
//         minlength: "Mật khẩu quá ngắn. Email phải trên 8 kí tự",
//       },
//       password: {
//         required: "Vui lòng nhập mật khẩu",
//         minlength: "Mật khẩu quá ngắn. Mật khẩu phải trên 8 kí tự",
//       },
      
//     },
    
//     submitHandler: function(form) {
//       form.submit();
//     }
//   });
// });

// // On Submit
//     if (
//       $("#input-name").val().trim() &&
//       $("#input-email").val().trim().length >= 8 &&
//       $("#input-password").val().trim().length >= 8
//     ) {
//       console.log(
//         "name: ",
//         $("#input-name").val().trim(),
//         "\n",
//         "email: ",
//         $("#input-email").val().trim(),
//         "\n",
//         "password: ",
//         $("#input-password").val().trim()
//       );
//       $(".download-button").attr("disabled", true);
//       $.post("http://localhost:3001/api/login", {
//         username: $("#input-name").val().trim(),
//         password: $("#input-password").val().trim(),
//       })
//         .done((data) => {
//           console.log(data);
//           $("#validate-success").show();
//           $("#validate-fail").hide();
//           $("#validate-success").html(data.message);
//           $(".download-button").attr("disabled", false);
//         })
//         .fail((xhr, status, error) => {
//           $("#validate-success").hide();
//           $("#validate-fail").show();
//           $("#validate-fail").html(
//             xhr.responseJSON.error || xhr.responseJSON.message
//           );
//           console.log(xhr, status, error);
//           $(".download-button").attr("disabled", false);
//         });
//     }

// // call api ajax
// const login = async ({ email = "", password = "" }) => {
//     try {
		
// 			let data = {
// 				email: email,
// 				password: password
// 			};

//             var resultLogin = await fetch("http://localhost:3001/api/login", data);
//             console.log(resultLogin)

//             let json = await resultLogin.json();
//                 // resolve(json);
//                 console.log(json)

// 			if (resultLogin.data.status === 200) {
// 				return {
// 					ok: true,
// 					data: resultLogin.data
// 				};
// 			} else {
// 				return {
// 					ok: false,
// 					error: 'status not 200'
// 				};
// 			}

// 			//console.log("resultLogin =", resultLogin);
// 		} catch (error) {
// 			return {
// 				ok: false,
// 				error: 'Sai api'
// 			};
// 		}

// }


// $(document).ready(function(){
//     // tao event truyen actions vao 
//   $("form[name='myForm']").click(function(e){
//         // console.log('this.userAction = ',this.userAction);
//         // lay du lieu tu o input bang javascript 
//         e.preventDefault();
//             var name = document.myForm.name.value;
//             var password = document.myForm.password.value;
//             // var email = document.myForm.email.value;

//             console.log('name = ',name);
//             console.log('password = ',password);
//             // console.log('email = ',email);
//             let data = {
//                 username:name,
//                 password:password
//             }
//             login(data).then(res=>{
//                 console.log(res)
//             })

//   });




// // });



$(document).ready(() => {
 

  //validate

  $(".download-button").click((e) => {
      e.preventDefault();
    if ($("#name").val().trim() === "") {
      $("#validate-name").show();
      $("#validate-name").html("Vui lòng nhập tên đăng nhập  !");
    }else if ($("#name").val().trim() && $("#name").val().trim().length < 3){
         $("#validate-name").show();
      $("#validate-name").html("Tên đăng nhập quá ngắn!");
    } 
     else {
         $("#validate-name").hide();
         $("#ok-name").show();
         
     }




    if ($("#password").val().trim().length < 8) {
      $("#validate-password").show();
      $("#validate-password").html("Vui lòng nhập mật khẩu!");
    }else if ($("#password").val().trim().length < 8){
         $("#validate-name").show();
      $("#validate-name").html("Mật khẩu quá ngắn!");
    } else {
         $("#validate-password").hide();
         $("#ok-name").show();
         
     }



    //  Submit
    if (
      $("#name").val().trim() &&
      $("#password").val().trim().length >= 8
    ) {
      console.log(
        "name: ",
        $("#name").val().trim(),
        "\n",
        "password: ",
        $("#password").val().trim()
      );
      $(".download-button").attr("disabled", true);

         
      $.post("http://localhost:3001/api/login", {
        username: $("#name").val().trim(),
        password: $("#password").val().trim(),
        
      })

        .done((data) => {
          console.log(data);
          
          $("#validate-success").show();
          $("#validate-success").html('Đăng nhập tài khoản thành công.');
          $("#validate-fail").hide();
        //   $("#validate-success").html(data.message);
          $("#login-succes").show();

          $(".download-button").attr("disabled", false);
        })
        .fail((xhr, status, error) => {
          $("#validate-success").hide();
          $("#validate-fail").show();
          $("#validate-fail").html('Tên tài khoản hoặc mật khẩu không hợp lệ!');
          console.log(xhr, status, error);
          $(".download-button").attr("disabled", false);
        });
    }
  });

  
});





