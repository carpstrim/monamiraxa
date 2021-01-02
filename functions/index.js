/* eslint-disable */
const functions = require('firebase-functions')
const admin = require('firebase-admin')
//const nodemailer = require('nodemailer')
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(functions.config().sendgrid.apikey)

const { createClient } = require('contentful-management')

const gmailEmail = functions.config().gmail.email
const gmailPassword = functions.config().gmail.password

const accessToken = functions.config().contentful.accesstoken

/* const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword
  }
}) */



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
    `${name}様\n\n※このメールは、ハンドメイドベビーグッズショップ、mon ami raxaでお問い合わせをされた際に自動的に送信されます。\n\n` +
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
    bcc: ['monamiraxa.handmade@gmail.com', 'dayabv@gmail.com', 'k.yasumi.jug@gmail.com'],
    //bcc: ['k.yasumi.jug@gmail.com', 'of.importance1109@gmail.com'],
    subject: '【mon ami raxa】お問い合わせを受け付けました（自動配信メール）',
    text: returnText
  }
  /* mailTransport.sendMail(email, (err, info) => {
    if (err) {
      return console.log(err)
    }
    return console.log('success')
  }) */

  sgMail.send(email).then(() => {
    console.log("mail sent")
    return null
  })
  //return null
})

exports.purchase = functions.https.onCall(async (data, context) => {
  console.log('function/purchase start')
  console.log({ data })

  const {
    name,
    furigana,
    mail,
    postCode,
    address,
    tel,
    shipName,
    shipFurigana,
    shipPostCode,
    shipAddress,
    shipTel,
    total,
    note
  } = data.customerInfo

  const cartItems = data.cartItems

  const productsText = cartItems.map((p) => {
    return `【　商　　品　　名　】${p.name}\n` +
      `【　価　格(税込) 】${p.price}円\n` +
      `【　　数　　　量　　】${p.selected}\n` +
      `【　　小　　　計　　】${p.price * p.selected}円\n` +
      '----------------------------------------'
  }).join('\n')

  const now = new Date()
  const date = now.toISOString().substr(0, 10);

  const returnText =
    `${name}様\n\n※このメールは、ハンドメイドベビーグッズショップ、mon ami raxaでご注文いただきますと自動的に送信されます。` +
    'このメールに心当たりのない場合や、ご不明な点がございましたら、' +
    'monamiraxa.handmade@gmail.comまでご連絡ください。\n\n\n' +
    'このたびは、ご注文いただき誠にありがとうございます。\n\n' +
    '以下の申し込みを承りましたので、ご確認をお願いします。\n' +
    '後ほど、在庫や送料を確認のうえ、別途ご注文受付メールをお送りさせていただきます。\n' +
    'それまで、このメールは大切に保管しておいてくださいますようお願い申し上げます。\n\n\n' +
    '▼お客様情報\n' +
    `【　お　　名　　前　】 ${name} （${furigana}）\n` +
    `【　メールアドレス　】 ${mail}\n` +
    `【　郵　便　番　号　】 ${postCode}\n` +
    `【　ご　　住　　所　】 ${address}\n` +
    `【　電　話　番　号　】 ${tel}\n` +
    `【　注　　文　　日　】 ${date}\n` +
    '【　決　済　方　法　】 三菱UFJ銀行へのお振込\n\n' +
    '▼配送先情報\n' +
    `【　お　　名　　前　】 ${shipName} （${shipFurigana}）\n` +
    `【　メールアドレス　】 ${mail}\n` +
    `【　郵　便　番　号　】 ${shipPostCode}\n` +
    `【　ご　　住　　所　】 ${shipAddress}\n` +
    `【　電　話　番　号　】 ${shipTel}\n\n` +
    '▼ご注文商品\n' +
    '---------------------------------------\n' +
    productsText + '\n\n' +
    '［合計］\n' +
    '【　　送　　　料　　】 後ほどご連絡します\n' +
    `【　　合　　　計　　】 ${total}円\n\n` +
    '［備考］\n' +
    `${note}\n\n\n` +
    '***************************************\n' +
    'mon ami raxa（モナミラシャ）\n\n' +
    '〒664-0846\n' +
    '兵庫県伊丹市伊丹2丁目1-31-301\n\n' +
    '【E-Mail】 monamiraxa.handmade@gmail.com\n' +
    '【ホームページ】https://monamiraxa.com\n' +
    '【Instagram】ID：monamiraxa\n' +
    '***************************************\n'

  console.log({ returnText })

  const email = {
    from: gmailEmail,
    to: mail,
    bcc: ['monamiraxa.handmade@gmail.com', 'dayabv@gmail.com', 'k.yasumi.jug@gmail.com'],
    //bcc: ['k.yasumi.jug@gmail.com', 'of.importance1109@gmail.com'],
    subject: '【mon ami raxa】ご注文ありがとうございます（自動配信メール）',
    text: returnText
  }

  console.log("mail made")

  /* await mailTransport.sendMail(email, async (err, info) => {
    if (err) {
      return console.log(err)
    }

    const client = await createClient({ accessToken })
    const space = await client.getSpace("wb3luzhg5wca")
    const environment = await space.getEnvironment("master");

    for (var i in cartItems) {
      await contentUpdate(cartItems[i], environment)
    }


  }) */

  sgMail.send(email).then(async () => {
    console.log("mail sent")

    const client = await createClient({ accessToken })
    const space = await client.getSpace("wb3luzhg5wca")
    const environment = await space.getEnvironment("master");

    for (var i in cartItems) {
      await contentUpdate(cartItems[i], environment)
    }

    return null
  }).catch((error) => {
    functions.logger.error("sendMail error");
    functions.logger.error(JSON.stringify(error));
    return console.log("Error sending message:", error);
  })

  //return null

})


async function contentUpdate(item, environment) {


  const entry = await environment.getEntry(item.entryId)
  console.log({ field: entry.fields.stock })
  entry.fields.stock["en-US"] = item.stock - item.selected
  console.log({ field: entry.fields.stock })

  const updated = await entry.update()
  await updated.publish().then(() => { console.log("updated: " + item.name) })
}
