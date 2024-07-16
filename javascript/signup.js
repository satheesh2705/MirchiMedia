
   let Upper  = 0;
   let Lower  = 0;
   let Number = 0;
   let Symbol = 0;

let userDetails = [
   
   {

     "id":"1",
     "name": "satheesh03",
     "password": "Satheesh3!",
     "mobileNumber": "6383591766",
     "email": "johndoe@example.com"
   
   },

   {

       "id":"2",
      "name": "black03",
      "password": "Black3!",
      "mobileNumber": "6383591767",
      "email": "black03@example.com" 
   },
 ];

 let OTP = ["1"];

 function LoginValidation() {
   console.log(" hello");
   const UserName = document.getElementById('UserName').value
   const UserPassword = document.getElementById('UserPassword').value
   console.log( UserName+" " +UserPassword );
   userDetails.map((userDetail) =>{

   if((userDetail.name == UserName || userDetail.email == UserName || userDetail.mobileNumber == UserName) ){
            if( userDetail.password == UserPassword ) {
               window.location.href = "/html/home.html";
               alert("Succefully Login")
            }
            else{
               alert("Enter Valid Password ");
            } 
         } 
     }
   )
   
 }

function SignUpValidation(){

   let Username = document.getElementById('Username').value
   let Phone = document.getElementById('PhoneNumber').value
   let EmailId = document.getElementById('EmailId').value
   let NewPass = document.getElementById('NewPassword').value
   let ConfirmPass = document.getElementById('ConfirmPassword').value
   

      //    NAME VALIDATION
      // ++++++++++++++++++++++++++++++++++++
  
      let PhoneFlag = false 
      let UsernameFlag = false
      let MailIdFlag   = true
      let PasswordFlag = true

      // CountChecking for user name

      let [Upper, Lower, Number, Symbol] = CountChecking(Username);
      console.log(Upper, Lower, Number, Symbol);


      if( Upper == 0 && Lower >= 1 && Number >=1  &&  Symbol == 0 && 
         ( Username.length>=8 &&  Username.length<=12) ){
         UsernameFlag=true
      }
      else{
         alert("InValid UserName")
      }

      // ================================
      // Validation for mobile number

      if(  Phone >= 6000000000 && Phone <= 9999999999){
            PhoneFlag = true
      }
      else{
         alert("Enter Valid Number")
      }

      // ================================
      // Validation for mailid

       [Upper, Lower, Number, Symbol] = CountChecking(EmailId)
       console.log(Upper, Lower, Number, Symbol);

      if( Upper == 0 && Lower >= 1 && Number >=1  && Symbol >= 1 && ( EmailId.length>=10 && EmailId.length<=30) ){
         MailIdFlag = true
      }
      else{
         alert("Enter Valid Mail id ")
         MailIdFlag = false
      }

// ===============================
// Validation for Newpassword


[Upper, Lower, Number, Symbol] = CountChecking(NewPass)
console.log(Upper, Lower, Number, Symbol);


if(   Upper >=1 && Lower >= 1 && Number >=1  &&  Symbol >= 1 && 
      ( NewPass.length>=8 && NewPass.length<=20) ){
   PasswordFlag = true
}
else{
   alert(" InValid Password ")
   PasswordFlag = false
}

//====================================
// validation for confirmpassword

if(NewPass==ConfirmPass){

}
else{
   alert("Mismatch Password")  
}
   if(UsernameFlag==true && PhoneFlag==true && MailIdFlag==true && PasswordFlag==true){
      
       let newUser = {
         "id":userDetails.length+1,
         "name": Username,
         "password": NewPass,
         "mobileNumber": Phone,
         "email": EmailId
     };

     // Add the new user to the users array
     userDetails.push(newUser);
      userDetails.map(
         (user) => {
            console.log("id is: "+user.id+" no : "+user.mobileNumber);
         }
      )
      alert("successfully login")
      window.location.href="./login.html"
   }
   else{
      alert("Invalid Details")
   }
   }

function ForgotValidation(){

   let mobile = document.getElementById('Mobile').value

   userDetails.map((userDetail)  => {
  
         if (userDetail.mobileNumber == mobile  || userDetail.email == mobile ) {
            if (userDetail.mobileNumber == mobile) {
                  sendOTP()
                  window.location.href = "./otpverify.html"
               }
            else{
               window.location.href="./otpverify.html"
               sendOTP()
            }
         }                  
      }
   )
 }

var otpArr = [] ;

function sendOTP() {
      let otplabel = document.getElementById('otplabel')
   let newotp = Math.floor(Math.random()*9999)
   alert("your otp is : "+newotp)

   otpArr[0] = newotp ;
   }

function verifyOTP() {
      console.log(otpArr[0]);
      let userotp = document.getElementById('verify').value
      if( otpArr[0]  == userotp){
            alert("OTP Verification")
            window.location.href="./newpassword.html"
      }
      else{
            alert("incorect otp")
      }

   
   }

function CountChecking(value) {

    Upper  = 0;
    Lower  = 0;
    Number = 0;
    Symbol = 0;

   for (let index = 0; index < value.length; index++) {
      if ((value[index] >= 'A'  && value[index] <= 'Z') ) {
         Upper++
      }
      else if ((value[index] >= 'a'  && value[index] <= 'z') ) {
         Lower++
      }
      else if ((value[index] >= 0  && value[index] <= 9) ) {
         Number++
      }
      else{
         Symbol++
      }         
   }

   return [Upper, Lower, Number, Symbol];
   }

// function handleLoginValidation() {
//     const UserName = document.getElementById('UserName').value  
//     const UserPassword = document.getElementById('UserPassword').value

//    userDetails.map((userDetail) =>{
//          if (
//          (userDetail.name == UserName || userDetail.email == UserName || userDetail.mobileNumber == UserName ) 
//          && ( userDetail.password == UserPassword )) {
//                window.location.href ="../home.html"
//             }
//          }
//       )
//    }

function NewPassValidation(){
   alert("hello")
      let MobileNo = document.getElementById('mobNo').value 
      let ConfirmPass = document.getElementById('c-password').value
      let PasswordFlag = true

         [Upper, Lower, Number, Symbol] = CountChecking(ConfirmPass);
      
          if(  ( Upper >=1 && Lower >= 1 && Number >=1  &&  Symbol >= 1 ) && 
               (ConfirmPass.length>=8 && ConfirmPass.length<=20) )
            {
              
              PasswordFlag = true
          }
          else{
              alert("Weak Password")
              PasswordFlag = false
          }
      userDetails.map((userDetail) => {
         if ( userDetail.mobileNumber == MobileNo || userDetail.email == MobileNo) {
            // console.log(" your mobileNumber is :  "+ MobileNo);
            // console.log( "new pass : "+ ConfirmPass);
            userDetail.password = ConfirmPass
            }
         }
      )
      console.log("=============================");
      userDetails.map((us) => {
          console.log("id"+us.id+"us pass"+us.password);
      }
   )
   }
