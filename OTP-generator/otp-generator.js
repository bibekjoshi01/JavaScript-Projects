//to generate OTP and regenerate it if it is same with the previous ones
let log = console.log;
let otpObj= {};


function OTPGenerator(length = 4)//default length of OTP is 4
{
    let otp = '';
    let digits='0123456789';    //all 10 digits

    for (let i=0; i<length; i++){
        otp += digits[Math.floor(Math.random()*10)];
        // log(otp);
    }

    //checking if it is same as previous or not

    if (otpObj[otp] == undefined)
    {
        otpObj[otp] = 1;
        log(otp);
        // log(otpObj);
        return otp;
    }
    else{
        otpObj[otp] ++;
        log(`The number of times this OTP ${otp} has been generated: ${otpObj[otp]}`);
        OTPGenerator();
    }
    window.localStorage.setItem("otp",otpObj);
}

