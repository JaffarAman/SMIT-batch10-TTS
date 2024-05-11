export const EmailVerificationHtml = (OTP)=>{
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>OTP Verification</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 50px auto;
          padding: 20px;
          background-color: #fff;
          border-radius: 5px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        h2 {
          color: #333;
        }
        p {
          color: #666;
        }
        .otp-code {
          font-size: 24px;
          font-weight: bold;
          color: #007bff;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h2>OTP Verification</h2>
        <p>Dear User,</p>
        <p>Your OTP (One-Time Password) for verification is:</p>
        <p class="otp-code"> ${OTP} </p> <!-- Replace "123456" with the actual OTP -->
        <p>Please enter this OTP on the verification page to complete the process.</p>
        <p>If you did not initiate this verification, please ignore this email.</p>
        <p>Thank you,</p>
        <p>Your Company Name</p>
      </div>
    </body>
    </html>` 
}