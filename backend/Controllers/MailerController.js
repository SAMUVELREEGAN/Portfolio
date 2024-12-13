const nodemailer = require("nodemailer");

exports.insert = [async(req,res)=>{
    const { userEmail, message } = req.body;
    try {
        const transporter = nodemailer.createTransport({
          service: "gmail", 
          auth: {
            user: "samuelreegan372@gmail.com", 
            pass: "rfiu cbsp pznl styi", 
          },
        });
    
        // Email options
        const mailOptions = {
          from: userEmail, 
          to: "samuelreegan372@gmail.com", 
          text: `Message from ${userEmail}:\n\n${message}`,
        };
    
        // Send email
        await transporter.sendMail(mailOptions);
        res.status(200).send("Email sent successfully to your inbox!");
      } catch (error) {
        console.error(error);
        res.status(500).send("Error sending email");
      }
}]