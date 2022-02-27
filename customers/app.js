const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const host = '0.0.0.0'
const port = 3002

app.use(cors());

// urlencodedとjsonは別々に初期化する
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use('/testlogin', (req, res) => {
  res.send({
    token: 'test123'
  });
});

app.post('/login', (req, res) => {
  //console.log(req.body)
  const email = req.body.email;
  const password = req.body.password;
  

  for(let i=0;i<customers.length;i++){
    if( customers[i].email===email && customers[i].password===password ){
      res.send({
        token: customers[i].token
      })
    }
  }

  res.send({
    token: undefined
  })
  
});

app.listen(port, host, () => console.log('API is running on '+host+':'+port));


let customers=[
  {
    customer_id: 'customer_f6297ca3-4869-4700-bda6-af0968d2aadc',
    username: 'Alfred34',
    email: 'Hyman.Wisozk@example.com',
    password: 'Alfred34Hyman.Wisozk@example.com',
    token: 'Alfred34Hyman.Wisozk@example.com'
  },
  {
    customer_id: 'customer_f1a0c1c4-06ea-4903-9b4a-ad45378a1a4e',
    username: 'Wilfrid99',
    email: 'Tyrell.Nitzsche@example.com',
    password: 'Wilfrid99Tyrell.Nitzsche@example.com',
    token: 'Wilfrid99Tyrell.Nitzsche@example.com'
  },
  {
    customer_id: 'customer_0d15ada6-f875-4700-87a2-8d3e14d02ec9',
    username: 'Freida.Cruickshank',
    email: 'Scot1@example.net',
    password: 'Freida.CruickshankScot1@example.net',
    token: 'Freida.CruickshankScot1@example.net'
  },
  {
    customer_id: 'customer_d264aeb8-524b-41a5-8858-3851c728e44c',
    username: 'Neil29',
    email: 'Kurtis76@example.net',
    password: 'Neil29Kurtis76@example.net',
    token: 'Neil29Kurtis76@example.net'
  },
  {
    customer_id: 'customer_62a3b601-78c7-422a-ba32-805e0b03ab73',
    username: 'Eleazar.Abernathy50',
    email: 'Brown29@example.com',
    password: 'Eleazar.Abernathy50Brown29@example.com',
    token: 'Eleazar.Abernathy50Brown29@example.com'
  },
  {
    customer_id: 'customer_8d938467-fe27-4a0c-9f55-45a0c89c31d4',
    username: 'Gabe89',
    email: 'Elise.Bechtelar@example.com',
    password: 'Gabe89Elise.Bechtelar@example.com',
    token: 'Gabe89Elise.Bechtelar@example.com'
  },
  {
    customer_id: 'customer_ab219059-1b25-47fa-9815-8b5db5b6b044',
    username: 'Angeline80',
    email: 'Everette_Jacobs@example.net',
    password: 'Angeline80Everette_Jacobs@example.net',
    token: 'Angeline80Everette_Jacobs@example.net'
  },
  {
    customer_id: 'customer_861e3218-49ee-49fb-89b4-87b6db63f7c2',
    username: 'Mozell.Wyman',
    email: 'Jarvis77@example.org',
    password: 'Mozell.WymanJarvis77@example.org',
    token: 'Mozell.WymanJarvis77@example.org'
  },
  {
    customer_id: 'customer_a8c12a65-36fb-4f90-9c54-09556685f679',
    username: 'Stephany.Hermiston',
    email: 'Damion_Lowe45@example.net',
    password: 'Stephany.HermistonDamion_Lowe45@example.net',
    token: 'Stephany.HermistonDamion_Lowe45@example.net'
  },
  {
    customer_id: 'customer_13e8ebe3-dc9f-4104-ab08-29a78312f9d8',
    username: 'Jeramie.Homenick',
    email: 'Freeda_McClure48@example.com',
    password: 'Jeramie.HomenickFreeda_McClure48@example.com',
    token: 'Jeramie.HomenickFreeda_McClure48@example.com'
  },
  {
    customer_id: 'customer_51a30e43-10f5-48ed-b3ec-348af880c98a',
    username: 'Dayne_Blick',
    email: 'Glen_DAmore@example.org',
    password: 'Dayne_BlickGlen_DAmore@example.org',
    token: 'Dayne_BlickGlen_DAmore@example.org'
  },
  {
    customer_id: 'customer_3d906901-1fb2-45b8-a42d-a79bcc170a2f',
    username: 'Antwon.Kuhic60',
    email: 'Dedrick56@example.com',
    password: 'Antwon.Kuhic60Dedrick56@example.com',
    token: 'Antwon.Kuhic60Dedrick56@example.com'
  },
  {
    customer_id: 'customer_a61a1c1f-5603-4abe-972a-40b10bb535b9',
    username: 'Leonard.Lind95',
    email: 'Lyla93@example.net',
    password: 'Leonard.Lind95Lyla93@example.net',
    token: 'Leonard.Lind95Lyla93@example.net'
  },
  {
    customer_id: 'customer_a0ccdf63-fab8-42b9-96b0-16a617229c78',
    username: 'Zora_Schinner',
    email: 'Otha_Wilkinson87@example.net',
    password: 'Zora_SchinnerOtha_Wilkinson87@example.net',
    token: 'Zora_SchinnerOtha_Wilkinson87@example.net'
  },
  {
    customer_id: 'customer_aa3e28b1-0122-48a7-b11a-5981104d65e6',
    username: 'Henriette90',
    email: 'Lonzo98@example.org',
    password: 'Henriette90Lonzo98@example.org',
    token: 'Henriette90Lonzo98@example.org'
  },
  {
    customer_id: 'customer_08d71e08-fbf1-4466-b78c-9e91852e5fb1',
    username: 'Bud.Glover43',
    email: 'Kristina80@example.org',
    password: 'Bud.Glover43Kristina80@example.org',
    token: 'Bud.Glover43Kristina80@example.org'
  },
  {
    customer_id: 'customer_7b4e86ae-20e2-4652-bf1b-ddb289c47641',
    username: 'Mohammad.Windler',
    email: 'Paris5@example.org',
    password: 'Mohammad.WindlerParis5@example.org',
    token: 'Mohammad.WindlerParis5@example.org'
  },
  {
    customer_id: 'customer_a07dd7bd-585f-424a-a7db-2d4000b00f53',
    username: 'Wade.Pagac',
    email: 'Anabelle_Murazik70@example.net',
    password: 'Wade.PagacAnabelle_Murazik70@example.net',
    token: 'Wade.PagacAnabelle_Murazik70@example.net'
  },
  {
    customer_id: 'customer_23d00a4b-7cb3-417d-971d-4c811d4df7d3',
    username: 'Ashtyn46',
    email: 'Sarah_Stark@example.com',
    password: 'Ashtyn46Sarah_Stark@example.com',
    token: 'Ashtyn46Sarah_Stark@example.com'
  },
  {
    customer_id: 'customer_6286415a-0fe2-4a52-9d50-5db3afe243b8',
    username: 'Mohamed_Schamberger1',
    email: 'Gavin97@example.net',
    password: 'Mohamed_Schamberger1Gavin97@example.net',
    token: 'Mohamed_Schamberger1Gavin97@example.net'
  },
  {
    customer_id: 'customer_0e9f9dec-433e-44a1-808a-be5dd5db74c0',
    username: 'Jarod_Ledner',
    email: 'Abel5@example.org',
    password: 'Jarod_LednerAbel5@example.org',
    token: 'Jarod_LednerAbel5@example.org'
  },
  {
    customer_id: 'customer_08d2632d-eea4-4317-b72e-7cca0a8e5275',
    username: 'Gerardo.Koch94',
    email: 'Ora23@example.net',
    password: 'Gerardo.Koch94Ora23@example.net',
    token: 'Gerardo.Koch94Ora23@example.net'
  },
  {
    customer_id: 'customer_bab3296c-0f3f-4dcb-8260-335f1b44ae6f',
    username: 'Carmel87',
    email: 'Itzel.Krajcik@example.com',
    password: 'Carmel87Itzel.Krajcik@example.com',
    token: 'Carmel87Itzel.Krajcik@example.com'
  },
  {
    customer_id: 'customer_77f2e534-d15c-474f-a931-b76b58d9be9a',
    username: 'Lawson.Okuneva78',
    email: 'Maribel9@example.com',
    password: 'Lawson.Okuneva78Maribel9@example.com',
    token: 'Lawson.Okuneva78Maribel9@example.com'
  },
  {
    customer_id: 'customer_93981a5d-aa8c-451d-83ca-e0cdc1c9f05e',
    username: 'Landen.McCullough',
    email: 'Ines.Hodkiewicz@example.net',
    password: 'Landen.McCulloughInes.Hodkiewicz@example.net',
    token: 'Landen.McCulloughInes.Hodkiewicz@example.net'
  },
  {
    customer_id: 'customer_0d0f34d0-28b6-4a93-b790-a56fac162a61',
    username: 'Kristin26',
    email: 'Emile79@example.net',
    password: 'Kristin26Emile79@example.net',
    token: 'Kristin26Emile79@example.net'
  },
  {
    customer_id: 'customer_f6aed635-08b7-4183-82dc-ed65cb48cbe4',
    username: 'Valentina.Kemmer',
    email: 'Penelope.Rosenbaum78@example.com',
    password: 'Valentina.KemmerPenelope.Rosenbaum78@example.com',
    token: 'Valentina.KemmerPenelope.Rosenbaum78@example.com'
  },
  {
    customer_id: 'customer_37b525f1-8580-49cd-b9c7-39244078a4ec',
    username: 'Jerel_Wilkinson65',
    email: 'Sammie_Kovacek@example.com',
    password: 'Jerel_Wilkinson65Sammie_Kovacek@example.com',
    token: 'Jerel_Wilkinson65Sammie_Kovacek@example.com'
  },
  {
    customer_id: 'customer_8565310f-c1fa-422e-9360-a70c2932abb2',
    username: 'Jerel34',
    email: 'Veda_Wilderman86@example.org',
    password: 'Jerel34Veda_Wilderman86@example.org',
    token: 'Jerel34Veda_Wilderman86@example.org'
  },
  {
    customer_id: 'customer_1c39b0d7-bd2c-4706-9579-71edd82b0e5a',
    username: 'Joe_Daniel',
    email: 'Stan38@example.com',
    password: 'Joe_DanielStan38@example.com',
    token: 'Joe_DanielStan38@example.com'
  },
  {
    customer_id: 'customer_607511d3-2f99-43ad-9f1e-937e707fbfba',
    username: 'Leanne53',
    email: 'River.Blanda22@example.com',
    password: 'Leanne53River.Blanda22@example.com',
    token: 'Leanne53River.Blanda22@example.com'
  },
  {
    customer_id: 'customer_c83720b9-37bc-4933-8fc1-b6aa272051f1',
    username: 'Giles_Haag90',
    email: 'Troy86@example.net',
    password: 'Giles_Haag90Troy86@example.net',
    token: 'Giles_Haag90Troy86@example.net'
  },
  {
    customer_id: 'customer_a3e1503f-51ee-407c-8bf1-ce7554591dfd',
    username: 'Yvette.Harvey98',
    email: 'Hilton_Rau@example.org',
    password: 'Yvette.Harvey98Hilton_Rau@example.org',
    token: 'Yvette.Harvey98Hilton_Rau@example.org'
  },
  {
    customer_id: 'customer_11c7cd06-5f39-4b9a-95cc-781cfa530287',
    username: 'Demarcus6',
    email: 'Terrence.Jacobson@example.com',
    password: 'Demarcus6Terrence.Jacobson@example.com',
    token: 'Demarcus6Terrence.Jacobson@example.com'
  },
  {
    customer_id: 'customer_b1424b2e-6e3d-4da7-b2b8-58552b913485',
    username: 'Darien62',
    email: 'Lillian53@example.org',
    password: 'Darien62Lillian53@example.org',
    token: 'Darien62Lillian53@example.org'
  },
  {
    customer_id: 'customer_38c6702c-4eec-4a00-b4c0-78def4d0dd79',
    username: 'Ludie21',
    email: 'Yoshiko.DAmore@example.com',
    password: 'Ludie21Yoshiko.DAmore@example.com',
    token: 'Ludie21Yoshiko.DAmore@example.com'
  },
  {
    customer_id: 'customer_04d126aa-bbdf-41bc-9154-c2d4b8eff21d',
    username: 'Haleigh.Swaniawski52',
    email: 'Dangelo_Rippin17@example.org',
    password: 'Haleigh.Swaniawski52Dangelo_Rippin17@example.org',
    token: 'Haleigh.Swaniawski52Dangelo_Rippin17@example.org'
  },
  {
    customer_id: 'customer_45f53acd-be0e-4d96-947a-ede05eab1ead',
    username: 'Chaz69',
    email: 'Adriana.Conn@example.com',
    password: 'Chaz69Adriana.Conn@example.com',
    token: 'Chaz69Adriana.Conn@example.com'
  },
  {
    customer_id: 'customer_c44a0249-b84c-4a45-877b-c7b5b8e97081',
    username: 'Louvenia.Flatley48',
    email: 'Johanna19@example.net',
    password: 'Louvenia.Flatley48Johanna19@example.net',
    token: 'Louvenia.Flatley48Johanna19@example.net'
  },
  {
    customer_id: 'customer_1191eaec-4cf2-45f2-834e-0c17d73c0d93',
    username: 'Nadia20',
    email: 'Ned.Fahey99@example.org',
    password: 'Nadia20Ned.Fahey99@example.org',
    token: 'Nadia20Ned.Fahey99@example.org'
  },
  {
    customer_id: 'customer_db75bbac-1372-4497-ab47-60d604eb0c7e',
    username: 'Frankie_Bergstrom60',
    email: 'Perry.Jakubowski11@example.com',
    password: 'Frankie_Bergstrom60Perry.Jakubowski11@example.com',
    token: 'Frankie_Bergstrom60Perry.Jakubowski11@example.com'
  },
  {
    customer_id: 'customer_759fe9ab-22cf-4125-867f-d01b2bbce145',
    username: 'Damon_Paucek',
    email: 'Rogers65@example.com',
    password: 'Damon_PaucekRogers65@example.com',
    token: 'Damon_PaucekRogers65@example.com'
  },
  {
    customer_id: 'customer_a77c333c-2a5a-4cfa-8e8a-1e5c1beaae19',
    username: 'Elmer50',
    email: 'Sally_Schulist@example.org',
    password: 'Elmer50Sally_Schulist@example.org',
    token: 'Elmer50Sally_Schulist@example.org'
  },
  {
    customer_id: 'customer_c775fa02-ebdf-44c2-bc41-5466a5ab0188',
    username: 'Dylan.Nolan18',
    email: 'Caitlyn_Jones@example.net',
    password: 'Dylan.Nolan18Caitlyn_Jones@example.net',
    token: 'Dylan.Nolan18Caitlyn_Jones@example.net'
  },
  {
    customer_id: 'customer_4e99d977-d659-4328-bd4f-52d08d251754',
    username: 'Archibald13',
    email: 'Jazmyne94@example.net',
    password: 'Archibald13Jazmyne94@example.net',
    token: 'Archibald13Jazmyne94@example.net'
  },
  {
    customer_id: 'customer_d2a4bc6d-345f-4bde-8d86-b9a5244b2e63',
    username: 'Mariam_McGlynn',
    email: 'Reece_Hamill1@example.net',
    password: 'Mariam_McGlynnReece_Hamill1@example.net',
    token: 'Mariam_McGlynnReece_Hamill1@example.net'
  },
  {
    customer_id: 'customer_9e242bf6-0e59-44c7-b333-d4c564c3649f',
    username: 'Valerie65',
    email: 'Sister_Fadel36@example.org',
    password: 'Valerie65Sister_Fadel36@example.org',
    token: 'Valerie65Sister_Fadel36@example.org'
  },
  {
    customer_id: 'customer_ab26e183-2ba5-4ae1-b801-138d4059052a',
    username: 'Destiny_Hand96',
    email: 'Delmer_Bergstrom62@example.org',
    password: 'Destiny_Hand96Delmer_Bergstrom62@example.org',
    token: 'Destiny_Hand96Delmer_Bergstrom62@example.org'
  },
  {
    customer_id: 'customer_a7967996-e801-40e2-bc55-d4c7944167c0',
    username: 'Rose_Bins0',
    email: 'Dallas.Fahey66@example.org',
    password: 'Rose_Bins0Dallas.Fahey66@example.org',
    token: 'Rose_Bins0Dallas.Fahey66@example.org'
  },
  {
    customer_id: 'customer_4809f17b-480f-4cf6-9d1e-43fb2b529005',
    username: 'Kelly93',
    email: 'Keeley.Greenholt70@example.com',
    password: 'Kelly93Keeley.Greenholt70@example.com',
    token: 'Kelly93Keeley.Greenholt70@example.com'
  },
  {
    customer_id: 'customer_42e00db0-428c-45d0-a4b4-e84ad64be92b',
    username: 'Justine.Koelpin',
    email: 'Ruthe.Crist@example.org',
    password: 'Justine.KoelpinRuthe.Crist@example.org',
    token: 'Justine.KoelpinRuthe.Crist@example.org'
  },
  {
    customer_id: 'customer_93733066-b19a-42da-8046-9e8460f12548',
    username: 'Houston.Treutel2',
    email: 'Jamar.Reichert@example.net',
    password: 'Houston.Treutel2Jamar.Reichert@example.net',
    token: 'Houston.Treutel2Jamar.Reichert@example.net'
  },
  {
    customer_id: 'customer_994e8d6f-e240-4f40-a7e6-1c51af0800c3',
    username: 'Mya49',
    email: 'Antonietta.Dicki@example.net',
    password: 'Mya49Antonietta.Dicki@example.net',
    token: 'Mya49Antonietta.Dicki@example.net'
  },
  {
    customer_id: 'customer_659319a7-a081-461a-8dc9-544903d91714',
    username: 'Amiya.Huels',
    email: 'Josie_Rutherford8@example.com',
    password: 'Amiya.HuelsJosie_Rutherford8@example.com',
    token: 'Amiya.HuelsJosie_Rutherford8@example.com'
  },
  {
    customer_id: 'customer_96f37952-434e-4de2-a28f-a7f79a8b463f',
    username: 'Abdiel.Herman',
    email: 'Vivianne.Reichert@example.org',
    password: 'Abdiel.HermanVivianne.Reichert@example.org',
    token: 'Abdiel.HermanVivianne.Reichert@example.org'
  },
  {
    customer_id: 'customer_ff978f04-e24b-4c1a-ad95-1cb4209a561d',
    username: 'Hal_Spencer',
    email: 'Benny10@example.net',
    password: 'Hal_SpencerBenny10@example.net',
    token: 'Hal_SpencerBenny10@example.net'
  },
  {
    customer_id: 'customer_64e5f87b-18d2-44d1-bd1c-ce178300a07b',
    username: 'Edmond.Schmeler',
    email: 'Mervin.Prohaska46@example.net',
    password: 'Edmond.SchmelerMervin.Prohaska46@example.net',
    token: 'Edmond.SchmelerMervin.Prohaska46@example.net'
  },
  {
    customer_id: 'customer_9d79b305-f5fc-4c4f-a836-e1073493799d',
    username: 'Antonina.Kulas',
    email: 'Rhiannon_Yundt@example.net',
    password: 'Antonina.KulasRhiannon_Yundt@example.net',
    token: 'Antonina.KulasRhiannon_Yundt@example.net'
  },
  {
    customer_id: 'customer_18585c39-cd16-40b6-a609-15a939143547',
    username: 'Alda26',
    email: 'Tony.Simonis11@example.org',
    password: 'Alda26Tony.Simonis11@example.org',
    token: 'Alda26Tony.Simonis11@example.org'
  },
  {
    customer_id: 'customer_d30f3a98-6d2d-4588-a047-d21f6cf271d8',
    username: 'Arlie.OConnell83',
    email: 'Cade43@example.com',
    password: 'Arlie.OConnell83Cade43@example.com',
    token: 'Arlie.OConnell83Cade43@example.com'
  },
  {
    customer_id: 'customer_50d6f3d5-ad89-445f-985b-d6ed64b77532',
    username: 'Arlene33',
    email: 'Stefan25@example.org',
    password: 'Arlene33Stefan25@example.org',
    token: 'Arlene33Stefan25@example.org'
  },
  {
    customer_id: 'customer_c2d65e32-967d-40f1-adc8-844c4883682a',
    username: 'Durward_Mayert45',
    email: 'Juwan78@example.org',
    password: 'Durward_Mayert45Juwan78@example.org',
    token: 'Durward_Mayert45Juwan78@example.org'
  },
  {
    customer_id: 'customer_5c465ecf-4c01-4307-9057-3e36ac520d0c',
    username: 'Donavon6',
    email: 'Jeanne.Will@example.net',
    password: 'Donavon6Jeanne.Will@example.net',
    token: 'Donavon6Jeanne.Will@example.net'
  },
  {
    customer_id: 'customer_17287570-98e5-46f6-a3f6-0be772e4bb6b',
    username: 'Fae.Emmerich51',
    email: 'Luella60@example.com',
    password: 'Fae.Emmerich51Luella60@example.com',
    token: 'Fae.Emmerich51Luella60@example.com'
  },
  {
    customer_id: 'customer_a3ab0a9c-418c-4259-9cc6-415cbfecbcc1',
    username: 'Cydney.Wolff55',
    email: 'Cecil_Kirlin@example.org',
    password: 'Cydney.Wolff55Cecil_Kirlin@example.org',
    token: 'Cydney.Wolff55Cecil_Kirlin@example.org'
  },
  {
    customer_id: 'customer_dbf118e2-2fb9-460d-b0d1-93479faae86a',
    username: 'Ubaldo.Lakin93',
    email: 'Paige.Smitham@example.com',
    password: 'Ubaldo.Lakin93Paige.Smitham@example.com',
    token: 'Ubaldo.Lakin93Paige.Smitham@example.com'
  },
  {
    customer_id: 'customer_df2dad06-ff26-450c-8a3c-c069a8f5b8ff',
    username: 'Lolita23',
    email: 'Lexie.Cremin68@example.net',
    password: 'Lolita23Lexie.Cremin68@example.net',
    token: 'Lolita23Lexie.Cremin68@example.net'
  },
  {
    customer_id: 'customer_ad2fd455-8fae-49c9-8021-c7d59b483725',
    username: 'Jazmyn.Spinka9',
    email: 'Alessandra_Price33@example.net',
    password: 'Jazmyn.Spinka9Alessandra_Price33@example.net',
    token: 'Jazmyn.Spinka9Alessandra_Price33@example.net'
  },
  {
    customer_id: 'customer_c0360316-160b-4bf4-bfb3-7e15b354f3e6',
    username: 'Coty_Halvorson',
    email: 'Pasquale65@example.com',
    password: 'Coty_HalvorsonPasquale65@example.com',
    token: 'Coty_HalvorsonPasquale65@example.com'
  },
  {
    customer_id: 'customer_26024b17-0cfb-4ad3-9238-bc87cf164d35',
    username: 'Monique31',
    email: 'America.Romaguera71@example.org',
    password: 'Monique31America.Romaguera71@example.org',
    token: 'Monique31America.Romaguera71@example.org'
  },
  {
    customer_id: 'customer_7d0136e7-d39f-45df-b95d-dd4460d65152',
    username: 'Chaz_Metz',
    email: 'Jaquan.Kreiger@example.org',
    password: 'Chaz_MetzJaquan.Kreiger@example.org',
    token: 'Chaz_MetzJaquan.Kreiger@example.org'
  },
  {
    customer_id: 'customer_dc952834-1db9-4574-9f80-3716351a2ecc',
    username: 'Adan_Treutel35',
    email: 'Darby_Kautzer@example.com',
    password: 'Adan_Treutel35Darby_Kautzer@example.com',
    token: 'Adan_Treutel35Darby_Kautzer@example.com'
  },
  {
    customer_id: 'customer_7d67582b-a613-429d-9e10-cdd0c1d1402a',
    username: 'Sammie_Dickens',
    email: 'Gregorio23@example.net',
    password: 'Sammie_DickensGregorio23@example.net',
    token: 'Sammie_DickensGregorio23@example.net'
  },
  {
    customer_id: 'customer_07e6c212-9e99-41ad-9005-5642cd8031e0',
    username: 'Clair45',
    email: 'Hans.Kuhic86@example.com',
    password: 'Clair45Hans.Kuhic86@example.com',
    token: 'Clair45Hans.Kuhic86@example.com'
  },
  {
    customer_id: 'customer_b807b055-3862-4ca4-873d-c7c1f822e3be',
    username: 'Lesley_Nikolaus',
    email: 'Osvaldo10@example.org',
    password: 'Lesley_NikolausOsvaldo10@example.org',
    token: 'Lesley_NikolausOsvaldo10@example.org'
  },
  {
    customer_id: 'customer_751f2f35-2c0b-4a62-958a-ee98a4c31647',
    username: 'Kaia.Langworth19',
    email: 'Candido.Baumbach@example.net',
    password: 'Kaia.Langworth19Candido.Baumbach@example.net',
    token: 'Kaia.Langworth19Candido.Baumbach@example.net'
  },
  {
    customer_id: 'customer_6dc22569-17f1-4c09-9819-3afa1ebfa47d',
    username: 'Joey.Fritsch',
    email: 'Margaret.Brakus12@example.org',
    password: 'Joey.FritschMargaret.Brakus12@example.org',
    token: 'Joey.FritschMargaret.Brakus12@example.org'
  },
  {
    customer_id: 'customer_2ce0135f-fe9a-4994-8722-f85ff5fd50e0',
    username: 'Bianka_Ritchie',
    email: 'Krista_Lebsack53@example.com',
    password: 'Bianka_RitchieKrista_Lebsack53@example.com',
    token: 'Bianka_RitchieKrista_Lebsack53@example.com'
  },
  {
    customer_id: 'customer_79e51442-eb50-47f0-99bd-a155e6c79f64',
    username: 'Christiana.Vandervort85',
    email: 'Naomi85@example.com',
    password: 'Christiana.Vandervort85Naomi85@example.com',
    token: 'Christiana.Vandervort85Naomi85@example.com'
  },
  {
    customer_id: 'customer_ae7d81eb-83c2-4974-a7cc-dd284dd00717',
    username: 'Dillan2',
    email: 'Reilly87@example.net',
    password: 'Dillan2Reilly87@example.net',
    token: 'Dillan2Reilly87@example.net'
  },
  {
    customer_id: 'customer_2f7893bb-3f74-4a93-9cb0-9589f7bfe6d9',
    username: 'Adan_Wolff',
    email: 'Deangelo0@example.org',
    password: 'Adan_WolffDeangelo0@example.org',
    token: 'Adan_WolffDeangelo0@example.org'
  },
  {
    customer_id: 'customer_24e8f484-4394-42c5-9965-a45c667bf76a',
    username: 'Diego_Hermann',
    email: 'Phoebe75@example.com',
    password: 'Diego_HermannPhoebe75@example.com',
    token: 'Diego_HermannPhoebe75@example.com'
  },
  {
    customer_id: 'customer_dbeb62e4-90bd-4608-a517-93f5bc8682ea',
    username: 'John_Hermiston72',
    email: 'Kamren_Hamill@example.com',
    password: 'John_Hermiston72Kamren_Hamill@example.com',
    token: 'John_Hermiston72Kamren_Hamill@example.com'
  },
  {
    customer_id: 'customer_16c3daac-9350-49c1-b079-84bd6614f8b8',
    username: 'Roscoe.Pacocha',
    email: 'Skye82@example.com',
    password: 'Roscoe.PacochaSkye82@example.com',
    token: 'Roscoe.PacochaSkye82@example.com'
  },
  {
    customer_id: 'customer_51d651be-7204-413c-8f84-9a3a3246dd63',
    username: 'Juwan71',
    email: 'Napoleon.Connelly0@example.org',
    password: 'Juwan71Napoleon.Connelly0@example.org',
    token: 'Juwan71Napoleon.Connelly0@example.org'
  },
  {
    customer_id: 'customer_a51c4d02-0fc7-44aa-bddb-3aa7feaeee46',
    username: 'Macie65',
    email: 'Amie44@example.net',
    password: 'Macie65Amie44@example.net',
    token: 'Macie65Amie44@example.net'
  },
  {
    customer_id: 'customer_c42f037e-4695-4076-ae35-586efcf445e6',
    username: 'Judy.Padberg',
    email: 'Merritt.Cummings@example.org',
    password: 'Judy.PadbergMerritt.Cummings@example.org',
    token: 'Judy.PadbergMerritt.Cummings@example.org'
  },
  {
    customer_id: 'customer_41079788-7e50-4e65-9fb6-ab4db12db93e',
    username: 'Jan_Feeney63',
    email: 'Edgar4@example.org',
    password: 'Jan_Feeney63Edgar4@example.org',
    token: 'Jan_Feeney63Edgar4@example.org'
  },
  {
    customer_id: 'customer_2f661dbb-aab5-4c1c-ad98-0d424dd9812b',
    username: 'Blair.Gusikowski84',
    email: 'Art_Balistreri@example.com',
    password: 'Blair.Gusikowski84Art_Balistreri@example.com',
    token: 'Blair.Gusikowski84Art_Balistreri@example.com'
  },
  {
    customer_id: 'customer_df1dba30-d9e0-42ab-ae23-9851cf2a20f5',
    username: 'Doyle_Ebert29',
    email: 'Lon_Kuvalis73@example.net',
    password: 'Doyle_Ebert29Lon_Kuvalis73@example.net',
    token: 'Doyle_Ebert29Lon_Kuvalis73@example.net'
  },
  {
    customer_id: 'customer_7d867ecc-f81f-468d-a81c-408fb6e9ae69',
    username: 'Bradford17',
    email: 'Quinn3@example.net',
    password: 'Bradford17Quinn3@example.net',
    token: 'Bradford17Quinn3@example.net'
  },
  {
    customer_id: 'customer_f785bd43-7712-4823-9664-df234027762c',
    username: 'Coralie_Labadie',
    email: 'Dante_Gutmann83@example.org',
    password: 'Coralie_LabadieDante_Gutmann83@example.org',
    token: 'Coralie_LabadieDante_Gutmann83@example.org'
  },
  {
    customer_id: 'customer_5a24a54b-7b4b-4873-a21f-f19f7163a49a',
    username: 'Valentin43',
    email: 'Jamil_Dibbert68@example.net',
    password: 'Valentin43Jamil_Dibbert68@example.net',
    token: 'Valentin43Jamil_Dibbert68@example.net'
  },
  {
    customer_id: 'customer_933c1f05-79cb-4346-bcc8-13398b63a455',
    username: 'Gail.Greenfelder55',
    email: 'Kari.Koss@example.net',
    password: 'Gail.Greenfelder55Kari.Koss@example.net',
    token: 'Gail.Greenfelder55Kari.Koss@example.net'
  },
  {
    customer_id: 'customer_9d4e528c-47ed-4efd-b1e8-6301861266ad',
    username: 'Orlando_Veum',
    email: 'Edd_Kemmer@example.org',
    password: 'Orlando_VeumEdd_Kemmer@example.org',
    token: 'Orlando_VeumEdd_Kemmer@example.org'
  },
  {
    customer_id: 'customer_fef674f8-8091-4a09-bf67-60727c7de9a6',
    username: 'Coleman_Reinger',
    email: 'Adrienne52@example.net',
    password: 'Coleman_ReingerAdrienne52@example.net',
    token: 'Coleman_ReingerAdrienne52@example.net'
  },
  {
    customer_id: 'customer_153559a6-95e4-48ef-8a2d-3b325433bbe9',
    username: 'Halie_Mraz35',
    email: 'Bradley42@example.org',
    password: 'Halie_Mraz35Bradley42@example.org',
    token: 'Halie_Mraz35Bradley42@example.org'
  },
  {
    customer_id: 'customer_9d293907-c63f-4219-8946-ca6bf347d3db',
    username: 'Modesto_Witting26',
    email: 'Darren.Jast62@example.com',
    password: 'Modesto_Witting26Darren.Jast62@example.com',
    token: 'Modesto_Witting26Darren.Jast62@example.com'
  },
  {
    customer_id: 'customer_ed71c1bf-c02a-4ec9-8673-46cdc59c7c7f',
    username: 'Woodrow12',
    email: 'Eladio_Kris@example.net',
    password: 'Woodrow12Eladio_Kris@example.net',
    token: 'Woodrow12Eladio_Kris@example.net'
  },
  {
    customer_id: 'customer_6af23ff4-43f9-4eec-8108-10c7a0ae5a64',
    username: 'Gina_Greenfelder',
    email: 'Michele99@example.com',
    password: 'Gina_GreenfelderMichele99@example.com',
    token: 'Gina_GreenfelderMichele99@example.com'
  }
]