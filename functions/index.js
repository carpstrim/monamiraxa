const functions = require('firebase-functions')
const admin = require('firebase-admin')
// const axios = require('axios')
// const google = require('googleapis');
// const googleAuth = require('google-auth-library');
const nodemailer = require('nodemailer')

const gmailEmail = functions.config().gmail.email
const gmailPassword = functions.config().gmail.password

const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword
  }
})

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

admin.initializeApp()

exports.contact = functions.https.onCall((data, context) => {
  console.log('function/contact start')
  console.log({ data })
  /*
  data = {
    name: "安見光平",
    mail: "k.yasumi.jug@gmail.com",
    title: "スタイのサイズについて",
    text: "スタイの購入を検討しておりますが、サイズはどのような展開がありますでしょうか。"
  }
  */

  const { name, mail, title, content } = data

  const returnText =
    `${name}様\n\n※このメールは、ハンドメイドベビーグッズショップ、mon ami raxaでお問い合わせをされた際に自動的に送信されます。` +
    'この度はお問い合わせをいただき誠にありがとうございます。\n\n' +
    '以下の内容でお問い合わせを受け付けました。\n' +
    '後ほど、メールにてご回答させていただきますので、今しばらくお待ちください。\n' +
    '※回答には数日いただく場合があります。ご了承ください。\n\n\n' +
    '▼お問い合わせ内容\n' +
    `【お問い合わせタイトル】 ${title}\n` +
    `${content}` + '\n\n\n' +
    '▼ご連絡先メールアドレス\n' +
    `${mail}` + '\n\n\n' +
    '***************************************\n' +
    'mon ami raxa（モナミラシャ）\n\n' +
    '【E-Mail】 monamiraxa.handmade@gmail.com\n' +
    '【ホームページ】https://monamiraxa.com\n' +
    '【Instagram】ID：monamiraxa\n' +
    '***************************************\n'

  const email = {
    from: gmailEmail,
    to: mail,
    bcc: 'node.mental@gmail.com',
    subject: '【mon ami raxa】お問い合わせを受け付けました（自動配信メール）',
    text: returnText
  }
  mailTransport.sendMail(email, (err, info) => {
    if (err) {
      return console.log(err)
    }
    return console.log('success')
  })
})

exports.purchase = functions.https.onCall((data, context) => {
  console.log('test')
})
