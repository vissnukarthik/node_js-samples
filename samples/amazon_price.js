const axios = require('axios');
const cheerio = require('cheerio');

const accountSid = '';
const authToken = '';

const client= require('twilio')(accountSid,authToken);


//const url = 'https://www.amazon.in/New-Apple-iPhone-12-128GB/dp/B08L5S1NT7?ref_=Oct_DLandingS_D_733975b9_60&smid=A14CZOWI0VEHLG';
const url = 'https://www.amazon.in/Samsung-Galaxy-Cloud-Lavender-Storage/dp/B08V9VMRQF?ref_=Oct_DLandingS_D_802a1d9d_62&smid=A14CZOWI0VEHLG&th=1';
const product ={name:'',price:'',link:''};

async function scrape(){
    const {data} = await axios.get(url);
    //console.log(data)
    const $  = cheerio.load(data);
    const item = $('div#dp-container');
    product.name = $(item).find('h1 span#productTitle').text();
    product.link = url;
    const price = $(item)
    .find('span .a-offscreen').first().text().replace(/[,₹.]/g,"");
    const priceNum = parseInt(price)
    product.price= priceNum/100;
    console.log(product.link);


    if(priceNum > 25000){
        console.log('price lower')
        client.messages
      .create({body: `the price of the ${product.name} is lower than ₹${price} get it in ${product.link}  `,
      from: '+18329792610',
        to: '+91962605588'})
      .then(message => console.log(message));
    }
}

scrape();

