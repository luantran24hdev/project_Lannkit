

$(function() {
  
  $("form[name='myForm']").validate({

    rules: {

      name: {
        required: true,
        minlength: 2
      },
      
      email: {
        required: true,
        minlength: 2
      },
      password: {
        required: true,
        minlength: 2
      }
    },
    // Specify validation error messages
    messages: {
      name: {
        required: "Vui lòng nhập tên đăng nhập",
        minlength: "Mật khẩu quá ngắn. Tên đăng nhập phải trên 8 kí tự",
      },
      email: {
        required: "Vui lòng nhập email",
        minlength: "Mật khẩu quá ngắn. Email phải trên 8 kí tự",
      },
      password: {
        required: "Vui lòng nhập mật khẩu",
        minlength: "Mật khẩu quá ngắn. Mật khẩu phải trên 8 kí tự",
      },
      
    },
    
    submitHandler: function(form) {
      form.submit();
    }
  });
});

// call api ajax
const login = async ({ email = "", password = "" }) => {
    try {
		
			let data = {
				email: email,
				password: password
			};

            var resultLogin = await fetch("http://localhost:3001/api/login", data);
            console.log(resultLogin)

            let json = await resultLogin.json();
                // resolve(json);
                console.log(json)

			if (resultLogin.data.status === 200) {
				return {
					ok: true,
					data: resultLogin.data
				};
			} else {
				return {
					ok: false,
					error: 'status not 200'
				};
			}

			//console.log("resultLogin =", resultLogin);
		} catch (error) {
			return {
				ok: false,
				error: 'Sai api'
			};
		}

}


$(document).ready(function(){
    // tao event truyen actions vao 
  $("form[name='myForm']").click(function(e){
        // console.log('this.userAction = ',this.userAction);
        // lay du lieu tu o input bang javascript 
        e.preventDefault();
            var name = document.myForm.name.value;
            var password = document.myForm.password.value;
            // var email = document.myForm.email.value;

            console.log('name = ',name);
            console.log('password = ',password);
            // console.log('email = ',email);
            let data = {
                username:name,
                password:password
            }
            login(data).then(res=>{
                console.log(res)
            })

  });




});

