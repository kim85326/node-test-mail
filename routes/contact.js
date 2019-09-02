var express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer");

router.get("/", function(req, res) {
    res.render("contact");
});

router.get("/review", function(req, res) {
    res.render("contactReview");
});

router.post("/post", function(req, res) {
    var transport = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: process.env.GMAIL_USERNAME,
            pass: process.env.GMAIL_PASSWORD,
        },
    });

    var mailOptions = {
        from: "Elaine 測試帳號",
        to: process.env.GMAIL_USERNAME,
        subject: req.body.title,
        text: `姓名：${req.body.username}\n電子郵件：${req.body.email}\n內容：${req.body.description}`,
    };

    transport.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
            res.render("error", { message: "寄送失敗", error: error });
        }
        res.redirect("review");
    });
});

module.exports = router;
