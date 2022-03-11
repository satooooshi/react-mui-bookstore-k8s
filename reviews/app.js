const express = require('express')
const cors = require("cors");
const app = express()
const host='0.0.0.0'
const port = 3003

let comments=['素晴らしい入門書', '感慨ぶかい', '不朽の名作をこのお値段で観られるなんて！', '集中して楽しめると思います', '懐かしい', 'おもしろい', '気持ちよく読める新訳']



let corsOptions = {
  origin: "http://localhost:3000"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


//ミドルウェア関数をロード
// https://expressjs.com/ja/guide/writing-middleware.html
var requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  console.log(req.requestTime)// terminalに出力
  next()// next() 関数を呼び出して、スタック内の次のミドルウェア関数へのリクエストに移ります。
}
// ミドルウェアのロード。最初にロードされたミドルウェア関数が常に最初に実行されます。
app.use(requestTime)

app.get('/api/reviews/hello', function (req, res) {
  return res.send({
    data:'hello reviews'
  })
})

function getReviewsByProductId(productId) {
  return reviews.filter(
    review => review.product_id === productId
  );
}

app.get('/api/reviews/:productId', function (req, res) {
  console.log(req.params.productId)
  return res.send(getReviewsByProductId(req.params.productId))
})


app.listen(port,host, () => {
  console.log(`review API listening on ${host}:${port}`)
})





let reviews=[
  {
    review_id: 'review_86627e8f-7911-4fbd-aab8-aa2c5f3b7e75',
    title: 'Quos totam facilis fuga qui illum maiores qui.',
    stars: 5,
    date: 'Tue Oct 05 2021 03:04:40 GMT+0900 (日本標準時)',
    content: 'Repellat aut qui doloribus excepturi quo. Eius beatae ut cupiditate ea nihil rem id. Incidunt cum soluta ut blanditiis.',
    customer_id: 'customer_5fc8f47f-cc6c-4535-b171-abdb276adb7b',
    product_id: 'prod_ZM8X5nL6Orwpv4'
  },
  {
    review_id: 'review_77f92b27-d43b-42e5-a61e-1683e4c018ea',
    title: 'Quia earum laboriosam maiores voluptatum nostrum veritatis dicta.',
    stars: 4,
    date: 'Tue Dec 14 2021 19:01:21 GMT+0900 (日本標準時)',
    content: 'Rerum reiciendis aut perspiciatis vel dolore culpa dolorum. Similique sequi id voluptatum. Assumenda molestiae odit ut.',
    customer_id: 'customer_64c31c1c-b964-473c-973f-87766a284ddd',
    product_id: 'prod_aZWNoyv9jj580J'
  },
  {
    review_id: 'review_aa4acb64-b0a6-4d19-839b-7c9c5a56ab27',
    title: 'Voluptatem quia optio molestias quis velit.',
    stars: 4,
    date: 'Tue Apr 27 2021 04:04:54 GMT+0900 (日本標準時)',
    content: 'Maxime inventore est tempore rem repellat maxime iure qui fugiat. Mollitia veniam nemo cum optio omnis illum molestiae unde. Ut aut temporibus et at voluptatum. Quos amet facere et quia qui eos sit et. Et adipisci voluptatem. Maiores quibusdam qui.',
    customer_id: 'customer_90b88b73-2cfb-4a91-a3c0-5337975eb50e',
    product_id: 'prod_gvRjwOVDjel4mN'
  },
  {
    review_id: 'review_158d2d7f-8bc7-4cdf-bf91-5b85ed67c826',
    title: 'Eum eligendi vero sit quos id dolores id voluptatem.',
    stars: 1,
    date: 'Sun May 02 2021 05:50:33 GMT+0900 (日本標準時)',
    content: 'Aliquid aut recusandae nobis quibusdam sit ipsum soluta cum et. Dignissimos quidem qui veniam debitis ea quidem saepe. Dolores voluptatem error officiis doloribus veniam saepe sunt. In sint aut placeat autem quia eligendi rerum id.',
    customer_id: 'customer_28606db7-58bc-443f-acaa-1783afccf629',
    product_id: 'prod_ZRjywMpyjZl7Y8'
  },
  {
    review_id: 'review_9a21dfe4-72f2-4c82-bd0c-59ac5418964a',
    title: 'Dolore commodi praesentium numquam fuga aut cum illo illum tempore.',
    stars: 1,
    date: 'Wed Feb 16 2022 20:42:40 GMT+0900 (日本標準時)',
    content: 'Quia nemo voluptate sequi qui at et odit est. Officiis labore sed ipsum voluptas. Esse molestiae voluptatem. Quidem odit quos facilis autem veritatis voluptate et voluptatum. Blanditiis fugiat mollitia dolorem nihil quo impedit. Ab expedita maxime deserunt vel recusandae est soluta quis beatae.',
    customer_id: 'customer_838c70dd-c59a-414e-89ad-de417184b18c',
    product_id: 'prod_aZWNoyv9jj580J'
  },
  {
    review_id: 'review_00c2776c-5600-4fcf-a054-27bb115af977',
    title: 'In et enim excepturi voluptates ipsum et rerum.',
    stars: 2,
    date: 'Fri May 07 2021 08:07:14 GMT+0900 (日本標準時)',
    content: 'Ad voluptatem quis totam aut quod nisi quisquam blanditiis. Velit voluptate enim quo nihil eius. Ipsa voluptatem voluptatem animi dolor ipsa eum vel porro molestiae.',
    customer_id: 'customer_ab5fef61-7879-45ee-b1e2-d3b25b34218f',
    product_id: 'prod_ZM8X5nL6Orwpv4'
  },
  {
    review_id: 'review_a1578cec-bbe3-4967-9c93-c6e5492af65e',
    title: 'Voluptas repellendus corrupti id voluptas minus qui ut ut necessitatibus.',
    stars: 3,
    date: 'Fri Oct 01 2021 08:39:26 GMT+0900 (日本標準時)',
    content: 'Eum quo explicabo. Voluptatem ut qui rem. Et deserunt totam deleniti. Temporibus eos architecto. Harum laborum nisi iusto. Maiores id eum.',
    customer_id: 'customer_c176a642-f1f5-4e4d-a03c-c9be7195e382',
    product_id: 'prod_BkyN5YABbx50b6'
  },
  {
    review_id: 'review_94649e26-ce00-4617-a235-d970b8011ef9',
    title: 'Doloribus dolores similique omnis voluptatibus suscipit.',
    stars: 2,
    date: 'Mon Feb 14 2022 14:55:10 GMT+0900 (日本標準時)',
    content: 'Rerum aut enim illum porro possimus laboriosam in. Harum dolores est eos illum delectus commodi. Enim quos aperiam et similique quia omnis et non. Distinctio possimus eius vitae accusamus et.',
    customer_id: 'customer_34d08d65-3123-4d05-b3f2-aff0cc3340ba',
    product_id: 'prod_mOVKl4GxXK5prR'
  },
  {
    review_id: 'review_07ff4cd7-cab8-476a-8d5b-beb5c682e8cf',
    title: 'Quaerat iste minima pariatur occaecati id non quia ut.',
    stars: 5,
    date: 'Tue Nov 09 2021 02:07:25 GMT+0900 (日本標準時)',
    content: 'Qui minima non nulla hic non. Qui maxime nostrum error est. Non sint sit non mollitia. Et fugit sed in nobis exercitationem autem perferendis voluptas. Cumque atque et ex adipisci velit sunt.',
    customer_id: 'customer_a75e5db0-b0e8-4bc2-8298-637f2325575d',
    product_id: 'prod_aZWNoyv9jj580J'
  },
  {
    review_id: 'review_323904ea-0875-4c25-af56-91a31bdeaa99',
    title: 'Vel velit pariatur dolor totam quis.',
    stars: 1,
    date: 'Thu Feb 10 2022 03:25:53 GMT+0900 (日本標準時)',
    content: 'Vel aliquid natus voluptates et tempore maxime et et sunt. Laboriosam doloribus aperiam. In nobis voluptas earum dolorem dolores similique inventore quo. Consequuntur excepturi incidunt dolorem. Quos eligendi sit officiis itaque. Veritatis quia molestias.',
    customer_id: 'customer_24d83fba-96d2-40e2-9dc6-2a13260afba6',
    product_id: 'prod_gvRjwOVDjel4mN'
  },
  {
    review_id: 'review_3515919a-66aa-4a21-ae5c-469f7c36687f',
    title: 'Quo voluptatibus suscipit doloribus praesentium illo nesciunt.',
    stars: 5,
    date: 'Tue May 04 2021 05:05:08 GMT+0900 (日本標準時)',
    content: 'Vel aut possimus laborum pariatur ut impedit debitis asperiores. Dolorem tempore odio nisi.',
    customer_id: 'customer_bf436c7b-949a-4864-8b13-d32c1289beb6',
    product_id: 'prod_aZWNoyv9jj580J'
  },
  {
    review_id: 'review_d2a06ada-6fc1-4dc4-af99-426f2f9fc96e',
    title: 'A quod vitae quo voluptatem molestias enim neque.',
    stars: 2,
    date: 'Mon Feb 21 2022 04:48:41 GMT+0900 (日本標準時)',
    content: 'Consequatur et accusamus natus corrupti et ipsum maiores aut. Occaecati ipsam accusamus odit non cum.',
    customer_id: 'customer_59bfbd80-c4f4-41d9-a802-d5e62b3e0e6d',
    product_id: 'prod_ZRjywMpyjZl7Y8'
  },
  {
    review_id: 'review_46d6d861-0514-480d-9239-7553197fe86b',
    title: 'Excepturi voluptas est dolore consequatur molestiae iusto minus.',
    stars: 4,
    date: 'Thu Jan 06 2022 00:49:34 GMT+0900 (日本標準時)',
    content: 'Voluptatem impedit excepturi soluta debitis qui. Libero autem mollitia minus veniam est porro. Magnam eligendi ab. Dolorem impedit voluptatibus sunt inventore ut excepturi corporis. Quos quasi perspiciatis optio deleniti. Vitae ipsa corrupti ex dolorem vel praesentium.',
    customer_id: 'customer_9cb92cbd-b30f-4d5a-a97f-3d88d768dfd8',
    product_id: 'prod_aZWNoyv9jj580J'
  },
  {
    review_id: 'review_c1810fa2-f96b-4aea-a85a-12b83933ecfd',
    title: 'Aliquam quam quos nobis molestiae debitis ipsum natus et consequatur.',
    stars: 1,
    date: 'Fri Oct 22 2021 11:40:32 GMT+0900 (日本標準時)',
    content: 'Quos quis accusantium enim ut sequi reprehenderit exercitationem ipsum voluptas. Pariatur quae est ut sit sint at ex. Sed dolorem repellendus omnis unde quis et accusamus. Omnis corrupti perspiciatis et nam nesciunt dicta. Perspiciatis hic officia.',
    customer_id: 'customer_7508aee7-f3cf-46c4-9506-d91a3e9bdbc2',
    product_id: 'prod_ZM8X5nL6Orwpv4'
  },
  {
    review_id: 'review_6108e186-cc59-4a85-8a9e-ce348c89fc9c',
    title: 'Est sequi aut sed dolorum id ipsa.',
    stars: 3,
    date: 'Mon Mar 29 2021 04:11:44 GMT+0900 (日本標準時)',
    content: 'Porro natus earum nesciunt veniam. Ut qui aliquid omnis vitae voluptas inventore unde. Eum dolores aut enim.',
    customer_id: 'customer_90b88b73-2cfb-4a91-a3c0-5337975eb50e',
    product_id: 'prod_gvRjwOVDjel4mN'
  },
  {
    review_id: 'review_357e7aed-e8c5-4a7b-9936-0b3b178f0f99',
    title: 'Itaque est natus iste tenetur provident.',
    stars: 5,
    date: 'Mon Jul 19 2021 15:23:13 GMT+0900 (日本標準時)',
    content: 'Aliquid reiciendis voluptas. Possimus aut sunt ut quas qui soluta dicta sunt.',
    customer_id: 'customer_8581c7d1-b695-4001-a7bc-ca66e1840f0d',
    product_id: 'prod_ZM8X5nL6Orwpv4'
  },
  {
    review_id: 'review_65f2a04f-f8f5-4229-83c3-75929098a409',
    title: 'Ab dicta aliquam ratione illo nihil.',
    stars: 1,
    date: 'Sat May 15 2021 04:02:39 GMT+0900 (日本標準時)',
    content: 'Commodi porro reprehenderit amet dignissimos sint qui. Eligendi rerum autem modi similique voluptate. Porro aspernatur aut optio eius tempora molestiae.',
    customer_id: 'customer_94182258-403a-468e-8239-ece5c5c04623',
    product_id: 'prod_aZWNoyv9jj580J'
  },
  {
    review_id: 'review_4a35194b-c05a-43dc-9a3b-983847c191f0',
    title: 'Numquam enim labore ut dolorem vitae molestiae.',
    stars: 1,
    date: 'Thu Jan 13 2022 23:34:23 GMT+0900 (日本標準時)',
    content: 'Cum beatae autem voluptatem. Maxime in et quibusdam rem.',
    customer_id: 'customer_d67e8337-e317-4d2c-ae64-9032e342c673',
    product_id: 'prod_gvRjwOVDjel4mN'
  },
  {
    review_id: 'review_0f113e4d-c2d1-42f8-915b-e5b796b625ba',
    title: 'Corrupti soluta dignissimos dolorem illum labore.',
    stars: 4,
    date: 'Tue Oct 19 2021 06:09:39 GMT+0900 (日本標準時)',
    content: 'Repudiandae sapiente fugiat adipisci sapiente voluptates illo aut vitae aut. Blanditiis velit maiores quibusdam sint. Recusandae nemo dolores sit ea repudiandae. Natus non voluptatibus nostrum sit eaque vitae numquam. Error sunt dolores iure qui fugit asperiores autem qui. Est et aut dolorem fugiat corporis est non blanditiis.',
    customer_id: 'customer_bee722ca-dd8d-40fa-a611-57a0fe3208e2',
    product_id: 'prod_N7GKwbB0gxw3EX'
  },
  {
    review_id: 'review_9f3c805d-8e8b-45ed-b5e4-764cad4fe0d0',
    title: 'Ab vitae veniam.',
    stars: 5,
    date: 'Thu Jul 01 2021 11:25:12 GMT+0900 (日本標準時)',
    content: 'Id quibusdam quia nisi et deleniti ut recusandae. Et rerum deserunt laboriosam nemo. Totam officia vel nisi quas hic sed. Voluptatem beatae quia amet reprehenderit. Unde voluptatem unde dolor optio recusandae ut. Qui autem tenetur esse blanditiis dolores.',
    customer_id: 'customer_523bfed6-2d93-44ec-bc9e-1431307c8568',
    product_id: 'prod_aZWNoyv9jj580J'
  },
  {
    review_id: 'review_1ea7dd35-afc9-421b-8238-d5bfc67386a0',
    title: 'Necessitatibus autem tenetur eligendi ipsam.',
    stars: 5,
    date: 'Sat Aug 07 2021 02:53:42 GMT+0900 (日本標準時)',
    content: 'Et soluta atque rem. Voluptatem molestiae perspiciatis assumenda alias repudiandae in.',
    customer_id: 'customer_4a104cc9-a3a6-457b-8adc-64e5f0acb3cc',
    product_id: 'prod_N7GKwbB0gxw3EX'
  },
  {
    review_id: 'review_b8dd9c2f-171e-4d52-891e-c3bd8ca07817',
    title: 'Provident odio eum est rerum molestiae adipisci quas nihil.',
    stars: 3,
    date: 'Sat Feb 12 2022 02:16:12 GMT+0900 (日本標準時)',
    content: 'Qui et minima natus est. Temporibus et nostrum molestias est. Sit quas natus natus vel quas accusamus.',
    customer_id: 'customer_642e7d4a-d513-4377-b0a8-75c3d2392497',
    product_id: 'prod_mOVKl4GxXK5prR'
  },
  {
    review_id: 'review_1b064d77-0187-4918-8f89-48826bde5730',
    title: 'Esse aspernatur modi et cumque aut maxime doloribus nihil.',
    stars: 4,
    date: 'Wed Feb 16 2022 08:29:15 GMT+0900 (日本標準時)',
    content: 'Possimus ab culpa aut alias non. Minima aliquid possimus dignissimos quasi qui est. Occaecati laudantium sit molestiae. Et et architecto error aut magni.',
    customer_id: 'customer_ff106085-21aa-464e-97eb-559cecd6e6d0',
    product_id: 'prod_aZWNoyv9jj580J'
  },
  {
    review_id: 'review_66f8a97f-2152-44a0-a58a-7450ba9df2c7',
    title: 'Harum qui quo voluptatibus quia tenetur blanditiis voluptates excepturi veniam.',
    stars: 5,
    date: 'Mon Apr 12 2021 08:22:59 GMT+0900 (日本標準時)',
    content: 'Quae fugit animi ducimus quos atque. Eos cupiditate ratione. Voluptas in aut. Ea deserunt ipsam ea et qui et et officiis omnis. Et quam modi magnam laboriosam impedit quam voluptatem optio.',
    customer_id: 'customer_e800d6d6-7920-4284-b010-013eff4f57de',
    product_id: 'prod_aZWNoyv9jj580J'
  },
  {
    review_id: 'review_a0542e80-592d-480f-8511-c1bb96354fe4',
    title: 'Aut expedita quae in.',
    stars: 3,
    date: 'Wed Nov 10 2021 07:22:38 GMT+0900 (日本標準時)',
    content: 'Veniam id animi rerum perferendis fuga. Ullam consectetur amet natus explicabo debitis dolorem quia tempore ullam.',
    customer_id: 'customer_3ead3520-c131-4cab-a01f-4184213f74c1',
    product_id: 'prod_BkyN5YABbx50b6'
  },
  {
    review_id: 'review_74dd4ddc-1263-400a-8b7b-c90ba4b714bd',
    title: 'Fuga maiores provident aut repellendus repudiandae modi veritatis est.',
    stars: 2,
    date: 'Mon Feb 07 2022 05:56:48 GMT+0900 (日本標準時)',
    content: 'Delectus recusandae et nemo dolorem. Itaque exercitationem reiciendis asperiores est.',
    customer_id: 'customer_eacd367c-4c50-4501-ac49-9c6e07292b87',
    product_id: 'prod_aZWNoyv9jj580J'
  },
  {
    review_id: 'review_2423a05a-cdae-40a5-b7fa-85fbaa769b9b',
    title: 'Cumque consequuntur sunt omnis.',
    stars: 1,
    date: 'Sat Sep 25 2021 23:16:15 GMT+0900 (日本標準時)',
    content: 'Et animi deleniti ut dignissimos dolorem. Voluptatem quo ea nobis quas veniam maiores voluptas. Hic magnam aut.',
    customer_id: 'customer_ae231264-3742-4003-aa65-84fdcc07241e',
    product_id: 'prod_BkyN5YABbx50b6'
  },
  {
    review_id: 'review_a5247505-988d-460e-853a-6fe92e97075f',
    title: 'Exercitationem aut optio ea repudiandae beatae voluptas.',
    stars: 3,
    date: 'Sun Dec 05 2021 02:46:12 GMT+0900 (日本標準時)',
    content: 'Vitae est culpa. Omnis quod sint ut autem similique.',
    customer_id: 'customer_34d08d65-3123-4d05-b3f2-aff0cc3340ba',
    product_id: 'prod_gvRjwOVDjel4mN'
  },
  {
    review_id: 'review_fe9bf777-5049-472a-bef0-88079f52566c',
    title: 'Fugiat corrupti assumenda.',
    stars: 4,
    date: 'Tue Mar 02 2021 08:41:19 GMT+0900 (日本標準時)',
    content: 'Hic sit ducimus cupiditate consequatur consequatur possimus consequatur. Ipsum doloremque atque numquam aut non. Atque facilis quas dolorem dolores laboriosam aut non.',
    customer_id: 'customer_f839bf3a-db04-49a9-a66f-0507373a725f',
    product_id: 'prod_ZM8X5nL6Orwpv4'
  },
  {
    review_id: 'review_798b8920-6bb4-482f-9827-c8bd3f7c89e8',
    title: 'Doloribus voluptate sint enim magnam non voluptatem fuga libero.',
    stars: 5,
    date: 'Sun Dec 05 2021 17:21:17 GMT+0900 (日本標準時)',
    content: 'Perspiciatis omnis porro at qui eveniet. Aut doloremque temporibus dolore.',
    customer_id: 'customer_7674ac8e-55e5-4f4c-a2c5-092540615242',
    product_id: 'prod_mOVKl4GxXK5prR'
  },
  {
    review_id: 'review_44ae002a-af22-4153-bd35-834f602f3f99',
    title: 'Inventore provident totam eveniet.',
    stars: 5,
    date: 'Sat Sep 11 2021 11:25:00 GMT+0900 (日本標準時)',
    content: 'Fuga laboriosam consequuntur officiis minima qui assumenda nulla nihil. Magni nisi qui sequi iste aut praesentium laudantium et ab.',
    customer_id: 'customer_bf436c7b-949a-4864-8b13-d32c1289beb6',
    product_id: 'prod_gvRjwOVDjel4mN'
  },
  {
    review_id: 'review_75957594-3c83-4c2a-8c74-f062f01dcd34',
    title: 'Quia fugiat ut sit ut natus temporibus dolor voluptates.',
    stars: 4,
    date: 'Sat Oct 16 2021 17:46:13 GMT+0900 (日本標準時)',
    content: 'Modi deserunt quo illum rem cupiditate est id. Ullam quae ut.',
    customer_id: 'customer_2a8bfd19-c4d9-4e30-95d0-9a37c569c0bc',
    product_id: 'prod_ZRjywMpyjZl7Y8'
  },
  {
    review_id: 'review_f3882c8d-2d76-4c45-87ff-73e7c7705145',
    title: 'Facilis fugit corporis qui vero maiores ut.',
    stars: 4,
    date: 'Fri Dec 10 2021 16:39:10 GMT+0900 (日本標準時)',
    content: 'Temporibus dolore odit quia quis doloremque. Velit qui consectetur. Ipsam reprehenderit odit consequatur quaerat voluptatibus voluptatum est repellendus. Nemo eligendi quis nostrum repellat nesciunt eum deserunt et. Adipisci magni sint sed dolores in atque. A ipsum consequatur.',
    customer_id: 'customer_2c917929-401c-43d0-8904-90389878d949',
    product_id: 'prod_ZM8X5nL6Orwpv4'
  },
  {
    review_id: 'review_0135b117-9599-455c-91e1-ca8b9ce35630',
    title: 'Culpa vero quia enim et temporibus iste minima.',
    stars: 5,
    date: 'Thu Aug 19 2021 04:46:39 GMT+0900 (日本標準時)',
    content: 'Pariatur ea enim. Deserunt aut consequatur dolor soluta dolores. Dolor rerum autem et est rerum.',
    customer_id: 'customer_cb08f76f-6dd3-409f-87c8-7d8c5f9f412f',
    product_id: 'prod_mOVKl4GxXK5prR'
  },
  {
    review_id: 'review_0519d975-e70f-488b-bc30-e2792b59b52e',
    title: 'Hic dolores quod qui ut commodi illum.',
    stars: 2,
    date: 'Mon May 31 2021 15:30:22 GMT+0900 (日本標準時)',
    content: 'Doloremque impedit nemo dolorem eos sed. Placeat repellat et architecto aliquid quibusdam non nostrum dolorem. Aut voluptas impedit est eligendi vitae fugit voluptatibus.',
    customer_id: 'customer_4b6fc15f-8e34-4af7-984a-06bc7abba09d',
    product_id: 'prod_aZWNoyv9jj580J'
  },
  {
    review_id: 'review_0b479bc3-e844-43b4-8fde-7404b25aa527',
    title: 'Voluptatem veritatis veniam voluptas ad et inventore iure mollitia.',
    stars: 5,
    date: 'Sun Sep 12 2021 01:56:13 GMT+0900 (日本標準時)',
    content: 'Nulla omnis velit consequatur nihil tenetur rerum. Non non dignissimos ut. Et excepturi voluptatem non fugiat est. Accusantium omnis rerum blanditiis mollitia nostrum voluptates. Expedita dignissimos excepturi.',
    customer_id: 'customer_206a7a12-e984-4262-94b5-0b11022b19b6',
    product_id: 'prod_gvRjwOVDjel4mN'
  },
  {
    review_id: 'review_ae3ba7b9-cc1b-404a-bde0-1eeb04e303c7',
    title: 'Nisi laudantium saepe nobis quia nihil saepe sunt vitae soluta.',
    stars: 2,
    date: 'Sat Oct 02 2021 22:12:44 GMT+0900 (日本標準時)',
    content: 'Delectus ut corporis praesentium incidunt molestiae. Itaque sed quibusdam sit est. Aspernatur id dolores voluptatem laudantium.',
    customer_id: 'customer_4d886046-94bc-41ef-9843-563be91258ff',
    product_id: 'prod_ZRjywMpyjZl7Y8'
  },
  {
    review_id: 'review_538d3871-a542-43da-ad86-6a5c4799fe54',
    title: 'Facere perspiciatis dolores dolor libero accusamus aut provident consequatur sit.',
    stars: 5,
    date: 'Wed May 19 2021 07:41:28 GMT+0900 (日本標準時)',
    content: 'Sit rerum et est porro velit facere vel et. Voluptas tenetur aut sit impedit accusantium. Eos labore ut excepturi incidunt. Alias laboriosam accusamus ut.',
    customer_id: 'customer_3f13436e-4c65-4a14-9475-4b3074c978eb',
    product_id: 'prod_gvRjwOVDjel4mN'
  },
  {
    review_id: 'review_1476d910-4eff-49b9-9990-16593472dd7d',
    title: 'Qui quisquam quia est labore vel ut est aut.',
    stars: 4,
    date: 'Thu Jun 24 2021 12:06:23 GMT+0900 (日本標準時)',
    content: 'Natus voluptatem esse expedita assumenda et et animi animi est. Occaecati laboriosam quas qui.',
    customer_id: 'customer_34d08d65-3123-4d05-b3f2-aff0cc3340ba',
    product_id: 'prod_aZWNoyv9jj580J'
  },
  {
    review_id: 'review_a5c477ba-4949-4803-bec5-5c5818b25cce',
    title: 'Nostrum aut cupiditate.',
    stars: 3,
    date: 'Tue May 25 2021 03:32:34 GMT+0900 (日本標準時)',
    content: 'Nesciunt doloremque placeat. Provident est et nemo commodi.',
    customer_id: 'customer_f3b19834-2106-45cf-8520-68aae35d39f7',
    product_id: 'prod_mOVKl4GxXK5prR'
  },
  {
    review_id: 'review_1a41b3ae-e125-4755-9efe-5311099cf00d',
    title: 'Corporis nesciunt repellendus.',
    stars: 1,
    date: 'Tue Mar 23 2021 01:13:05 GMT+0900 (日本標準時)',
    content: 'Enim excepturi ratione asperiores. Amet similique ullam et ut dolores et nihil sapiente. Perferendis reprehenderit laudantium odit voluptatum repudiandae dolorem tempore consequatur qui. Iste autem numquam. Quia eius et iusto cum quia et itaque non.',
    customer_id: 'customer_ab5fef61-7879-45ee-b1e2-d3b25b34218f',
    product_id: 'prod_ZRjywMpyjZl7Y8'
  },
  {
    review_id: 'review_1c6c2266-8ff4-40be-9477-9f81c53df960',
    title: 'Libero eius dicta beatae pariatur eum assumenda in facere perferendis.',
    stars: 5,
    date: 'Wed Oct 20 2021 02:09:52 GMT+0900 (日本標準時)',
    content: 'Unde natus totam et consectetur ut. Autem sequi ullam sint sunt natus non. Facilis totam culpa.',
    customer_id: 'customer_ae231264-3742-4003-aa65-84fdcc07241e',
    product_id: 'prod_N7GKwbB0gxw3EX'
  },
  {
    review_id: 'review_2943fb14-c51f-4146-b94a-7d0701d96990',
    title: 'Ut vel sit minus dicta maxime.',
    stars: 2,
    date: 'Mon May 24 2021 09:22:29 GMT+0900 (日本標準時)',
    content: 'Cumque nesciunt sed et et aliquam ipsam voluptas molestiae modi. Aut ut et similique quam quis soluta. Et quis et magnam hic culpa hic sapiente corrupti repellendus. Error voluptatem et nisi et et omnis deleniti atque sit. Sit nobis corrupti aut.',
    customer_id: 'customer_796ad424-088d-42e6-abc2-16eb7f0cc819',
    product_id: 'prod_ZM8X5nL6Orwpv4'
  },
  {
    review_id: 'review_e2a4faa4-8bd8-4832-ba43-4afc52b81ce8',
    title: 'Dolores rerum officia.',
    stars: 4,
    date: 'Sun Dec 19 2021 17:04:32 GMT+0900 (日本標準時)',
    content: 'Tempore rem consequatur molestiae tempora est quis fugiat animi et. Et quas eligendi. Necessitatibus vero ut.',
    customer_id: 'customer_b2eb0842-2857-43ce-8cfe-7b9c46392254',
    product_id: 'prod_gvRjwOVDjel4mN'
  },
  {
    review_id: 'review_34823845-2195-4d58-b2f1-7270337d8f8b',
    title: 'Totam tenetur quisquam nostrum id cum.',
    stars: 3,
    date: 'Mon Jul 12 2021 19:34:19 GMT+0900 (日本標準時)',
    content: 'Officia adipisci eaque aut quo culpa libero illum nulla eligendi. Sunt cumque ad velit. Eum officia similique magni numquam. Nisi et vel. Omnis maiores non rerum itaque magni unde ut iure.',
    customer_id: 'customer_f127c389-71a2-4bcb-b329-df9cbbb7cd72',
    product_id: 'prod_mOVKl4GxXK5prR'
  },
  {
    review_id: 'review_64abb5cf-1750-4f23-8132-098b505c8b99',
    title: 'Ducimus a nobis provident est eveniet.',
    stars: 5,
    date: 'Thu Mar 25 2021 09:09:41 GMT+0900 (日本標準時)',
    content: 'Omnis recusandae qui sunt et doloribus qui enim voluptatum quia. Sed non nam dolorem. Aut ut consequatur. Quidem voluptates sed labore iste adipisci fuga omnis dicta. Quis officiis eum sit et id. Velit dignissimos voluptas.',
    customer_id: 'customer_0f7187fa-4b53-4738-96c5-625eb9441ffd',
    product_id: 'prod_N7GKwbB0gxw3EX'
  },
  {
    review_id: 'review_46ee950b-e8b9-4874-bbb5-4ac76bebdbc9',
    title: 'Et quidem aut itaque harum quos qui ratione.',
    stars: 4,
    date: 'Fri Feb 11 2022 20:45:20 GMT+0900 (日本標準時)',
    content: 'Sint quo illo sed enim optio ea. Quisquam aut id possimus sit et ut corporis molestias. Eveniet quia culpa.',
    customer_id: 'customer_f3b19834-2106-45cf-8520-68aae35d39f7',
    product_id: 'prod_BkyN5YABbx50b6'
  },
  {
    review_id: 'review_d3ec5eac-146c-4949-a8fd-4a0da679d1b7',
    title: 'Omnis et voluptate sit iure ut libero aut modi.',
    stars: 2,
    date: 'Wed Feb 02 2022 01:23:19 GMT+0900 (日本標準時)',
    content: 'Distinctio ut ipsa aut ut ipsam dicta voluptatem expedita commodi. Ex beatae sint nihil et. Quia quibusdam consequuntur rem perspiciatis eveniet harum voluptatem.',
    customer_id: 'customer_99b060bb-9052-41d3-bbee-072a4d86cdf4',
    product_id: 'prod_gvRjwOVDjel4mN'
  },
  {
    review_id: 'review_4740b621-a627-4a48-9881-49bf980db2ff',
    title: 'Dicta qui enim quos nulla quis minus.',
    stars: 2,
    date: 'Fri Jan 28 2022 12:00:06 GMT+0900 (日本標準時)',
    content: 'Sit sed eveniet ullam natus quasi. Facilis officiis explicabo neque blanditiis.',
    customer_id: 'customer_59bfbd80-c4f4-41d9-a802-d5e62b3e0e6d',
    product_id: 'prod_ZRjywMpyjZl7Y8'
  },
  {
    review_id: 'review_541e0df6-829d-41d9-843c-b1942fb8f81f',
    title: 'Nulla dolorem et.',
    stars: 5,
    date: 'Sat Aug 28 2021 11:52:35 GMT+0900 (日本標準時)',
    content: 'Qui sed est aspernatur. Voluptate perspiciatis nisi impedit dolorum. Minus quidem vero a odit iure sint possimus sed aliquid.',
    customer_id: 'customer_189b872c-05ff-4b49-b8f5-cdf3eaaf0c1f',
    product_id: 'prod_mOVKl4GxXK5prR'
  },
  {
    review_id: 'review_ee61f415-e9d0-4b88-8aff-2d3766863d92',
    title: 'Quia architecto doloremque tempora occaecati et eius.',
    stars: 3,
    date: 'Thu Feb 17 2022 02:04:05 GMT+0900 (日本標準時)',
    content: 'Dolores et officiis vel qui debitis pariatur iste. Voluptatem eligendi voluptatem est modi aut. Vel iusto eaque consequatur neque. Soluta non cumque perspiciatis quia itaque accusantium. Repellat eum mollitia fugiat iste.',
    customer_id: 'customer_189b872c-05ff-4b49-b8f5-cdf3eaaf0c1f',
    product_id: 'prod_ZRjywMpyjZl7Y8'
  },
  {
    review_id: 'review_c97aad21-0fd8-472d-81b9-a33e58b41007',
    title: 'Rerum voluptatem et omnis qui ut architecto temporibus.',
    stars: 3,
    date: 'Sun Oct 31 2021 17:40:05 GMT+0900 (日本標準時)',
    content: 'Enim non dignissimos est molestias. Est alias iusto dolor non qui architecto voluptas debitis est.',
    customer_id: 'customer_94182258-403a-468e-8239-ece5c5c04623',
    product_id: 'prod_ZRjywMpyjZl7Y8'
  },
  {
    review_id: 'review_8058794e-d66c-4675-aacf-e57e5d85b86d',
    title: 'Aut voluptates debitis ea non.',
    stars: 5,
    date: 'Fri Jul 16 2021 10:18:37 GMT+0900 (日本標準時)',
    content: 'Iste omnis voluptas id aut recusandae eos. Iusto molestias libero impedit labore. Incidunt vel doloribus dolor doloribus. Et voluptas at. Reprehenderit numquam omnis non quaerat quis. Aut dolor nemo adipisci in beatae qui vel.',
    customer_id: 'customer_f991e57d-7172-4f93-9f47-066516f394c9',
    product_id: 'prod_mOVKl4GxXK5prR'
  },
  {
    review_id: 'review_e3ecfa5e-fa52-4c95-bd02-f0ef9ea81063',
    title: 'Consequatur eos ipsam autem sit beatae.',
    stars: 4,
    date: 'Wed Feb 23 2022 07:10:06 GMT+0900 (日本標準時)',
    content: 'Fugit illum libero. Minus quod ab accusamus nobis et deserunt reiciendis quia repellat. Doloremque et aut inventore. Consectetur et et.',
    customer_id: 'customer_42dfce15-bd79-43e0-810c-6c4134b4f825',
    product_id: 'prod_ZM8X5nL6Orwpv4'
  },
  {
    review_id: 'review_a2961222-77c5-4651-9949-5010fb4431b0',
    title: 'Itaque asperiores dolore doloremque vero.',
    stars: 2,
    date: 'Tue Oct 12 2021 01:23:44 GMT+0900 (日本標準時)',
    content: 'Optio velit voluptate molestiae et. Ea et eos id. In placeat et odio aut non et architecto magni. Modi sint nobis voluptatem est dolorum consequatur pariatur. Excepturi rem voluptatibus inventore deleniti sit iusto doloremque voluptatem aperiam. Dolorem tenetur dicta eos rerum hic.',
    customer_id: 'customer_f21beb4a-296d-44c4-b9f3-c7c5af35e24f',
    product_id: 'prod_BkyN5YABbx50b6'
  },
  {
    review_id: 'review_b28ff540-8060-409e-828c-69ad722b9d2d',
    title: 'Cupiditate debitis aut sed aliquid ratione velit pariatur.',
    stars: 2,
    date: 'Fri Nov 12 2021 01:03:20 GMT+0900 (日本標準時)',
    content: 'Nisi sint consequuntur illo eaque pariatur similique et amet. Quo ipsum hic cumque labore debitis. Omnis nostrum aliquam ut magnam non rem voluptate illo optio. Nesciunt maiores itaque ut reprehenderit et quae ut. Quae facilis dolorum.',
    customer_id: 'customer_4d886046-94bc-41ef-9843-563be91258ff',
    product_id: 'prod_ZRjywMpyjZl7Y8'
  },
  {
    review_id: 'review_c567750d-9ffd-45ba-9f76-72a5f8a0224a',
    title: 'Reprehenderit eum quia enim ipsum natus neque earum fugiat rem.',
    stars: 3,
    date: 'Mon May 24 2021 19:01:25 GMT+0900 (日本標準時)',
    content: 'Voluptatem suscipit beatae qui voluptatem. Fugit adipisci et. Perferendis minus id facere nihil recusandae voluptas dolor quia consectetur. Voluptas similique voluptatibus et accusantium.',
    customer_id: 'customer_d60007e2-d49a-4c98-876c-6db0b6823004',
    product_id: 'prod_ZRjywMpyjZl7Y8'
  },
  {
    review_id: 'review_83a8a05e-3d64-414f-b4c5-ef0472100f3d',
    title: 'Mollitia ducimus alias nam enim nesciunt est minus at.',
    stars: 2,
    date: 'Wed Mar 31 2021 08:51:23 GMT+0900 (日本標準時)',
    content: 'Facere praesentium iste nihil officiis aliquid. Repudiandae voluptatem deserunt qui quos sunt. Et itaque et laboriosam dolorum doloribus doloremque et fugit. Iste et modi voluptate. Voluptatem ipsa laborum nemo minima ducimus dolor ratione.',
    customer_id: 'customer_f3b19834-2106-45cf-8520-68aae35d39f7',
    product_id: 'prod_mOVKl4GxXK5prR'
  },
  {
    review_id: 'review_fa6bf3df-9125-417f-8af3-7e06e825a57d',
    title: 'Quia sequi repellendus est et voluptatem ea et et.',
    stars: 4,
    date: 'Sun May 30 2021 05:01:48 GMT+0900 (日本標準時)',
    content: 'Et voluptatem quo repellat cupiditate non quia sit. Sed nihil repudiandae est natus voluptas. Minima esse eius ut est et dolor cupiditate exercitationem autem. Optio aliquam autem aspernatur non. Hic beatae facilis eveniet fugiat veritatis.',
    customer_id: 'customer_850063ae-46bb-407e-a3ad-5f0ecec38e5f',
    product_id: 'prod_mOVKl4GxXK5prR'
  },
  {
    review_id: 'review_55e18e9b-cda0-4dbc-bc25-5ad0a1a6c233',
    title: 'Incidunt maiores non sed nihil culpa vero tenetur et.',
    stars: 2,
    date: 'Sat Sep 18 2021 13:14:29 GMT+0900 (日本標準時)',
    content: 'Vitae explicabo et quis. Voluptate voluptas dolore eaque. Ad beatae voluptatibus. Accusamus soluta atque sed aut quaerat voluptatem dolor consequatur.',
    customer_id: 'customer_642e7d4a-d513-4377-b0a8-75c3d2392497',
    product_id: 'prod_ZRjywMpyjZl7Y8'
  },
  {
    review_id: 'review_0a077e49-7823-4c8d-9754-70f1deb8ff5f',
    title: 'Error accusamus error.',
    stars: 2,
    date: 'Mon Jan 31 2022 01:48:03 GMT+0900 (日本標準時)',
    content: 'Provident quod soluta quos totam omnis quia nihil. Rerum veritatis blanditiis ipsa. Dolor iure dolor alias placeat. Nesciunt dolores aspernatur.',
    customer_id: 'customer_f21beb4a-296d-44c4-b9f3-c7c5af35e24f',
    product_id: 'prod_gvRjwOVDjel4mN'
  },
  {
    review_id: 'review_10a0f11b-cb76-449c-95ae-931777a3028a',
    title: 'Doloremque ea qui sit labore.',
    stars: 3,
    date: 'Thu Apr 01 2021 03:59:05 GMT+0900 (日本標準時)',
    content: 'Et consequuntur modi ut rerum optio nobis libero. Et et dicta qui laboriosam maiores vero similique.',
    customer_id: 'customer_cd0fbfce-fac0-4a47-86ff-e7735c034b48',
    product_id: 'prod_aZWNoyv9jj580J'
  },
  {
    review_id: 'review_db64eb31-9716-4648-a375-dc9912016154',
    title: 'Tempore excepturi omnis rerum et.',
    stars: 1,
    date: 'Thu Nov 11 2021 01:02:03 GMT+0900 (日本標準時)',
    content: 'Aperiam corporis id. Voluptatum nesciunt quo.',
    customer_id: 'customer_64582546-d9ba-47de-a5bf-382f830abf7e',
    product_id: 'prod_ZM8X5nL6Orwpv4'
  },
  {
    review_id: 'review_252908a8-843d-4eb6-8d3a-cff7c43c4085',
    title: 'Voluptas vero nihil pariatur itaque esse.',
    stars: 5,
    date: 'Mon Oct 04 2021 04:02:44 GMT+0900 (日本標準時)',
    content: 'Quo qui esse error voluptatem assumenda et. Ut in modi assumenda hic ad unde. Doloribus molestiae asperiores ipsa quam facere aut maiores. Ut quisquam itaque molestiae quidem repellat quaerat. Cumque necessitatibus voluptate dolores est ut neque est corporis. Quo suscipit praesentium quibusdam quam sed quam et saepe labore.',
    customer_id: 'customer_3ead3520-c131-4cab-a01f-4184213f74c1',
    product_id: 'prod_aZWNoyv9jj580J'
  },
  {
    review_id: 'review_ed7322ea-e156-44ac-94e2-4328d4dd937f',
    title: 'Porro sed velit veniam et dignissimos molestiae excepturi voluptas ea.',
    stars: 1,
    date: 'Sat May 01 2021 23:34:45 GMT+0900 (日本標準時)',
    content: 'Est fugit voluptatem quod repellat commodi est et. Eum sit omnis et quaerat vitae totam pariatur sint exercitationem. Iste vero facilis quis soluta maiores qui praesentium qui eum. Iusto accusamus impedit ut. Vel temporibus aliquam.',
    customer_id: 'customer_7674ac8e-55e5-4f4c-a2c5-092540615242',
    product_id: 'prod_ZRjywMpyjZl7Y8'
  },
  {
    review_id: 'review_12b61734-6eb3-4e62-876e-d735b2143cf0',
    title: 'Deserunt molestiae eum quidem nemo earum voluptatem modi optio.',
    stars: 4,
    date: 'Tue Apr 13 2021 13:41:12 GMT+0900 (日本標準時)',
    content: 'Maiores velit repellat placeat quia dolorem minima explicabo quia. Minus ipsa deserunt doloribus veritatis. Sunt quia eveniet distinctio deserunt eaque. Et et explicabo. Eligendi sed expedita est ut. Ullam qui et deserunt qui id perspiciatis laudantium.',
    customer_id: 'customer_2ce5558c-0718-40a0-b9f4-c595def2dc37',
    product_id: 'prod_ZRjywMpyjZl7Y8'
  },
  {
    review_id: 'review_a15697f7-d06a-4bc3-8bb8-ffe26558ae1b',
    title: 'Ex placeat laudantium praesentium sunt voluptas eaque assumenda dolores autem.',
    stars: 2,
    date: 'Mon Dec 27 2021 05:32:19 GMT+0900 (日本標準時)',
    content: 'Omnis qui repudiandae ut ut illum ut. Ipsa laborum dolore non earum assumenda odit sed. Natus eaque autem veniam. Sed unde corrupti vero at omnis.',
    customer_id: 'customer_f21beb4a-296d-44c4-b9f3-c7c5af35e24f',
    product_id: 'prod_gvRjwOVDjel4mN'
  },
  {
    review_id: 'review_f2c43df9-2f29-4da1-87f9-b0e3660685b6',
    title: 'Cumque ipsa dolores commodi sit doloremque molestiae.',
    stars: 5,
    date: 'Sat Oct 16 2021 05:00:58 GMT+0900 (日本標準時)',
    content: 'Vitae consectetur repellat voluptates reprehenderit dignissimos vel id voluptatem qui. Reprehenderit nisi culpa amet quas. Debitis repudiandae aliquam quod voluptas amet aut porro laborum. Qui qui architecto.',
    customer_id: 'customer_2ce5558c-0718-40a0-b9f4-c595def2dc37',
    product_id: 'prod_ZM8X5nL6Orwpv4'
  },
  {
    review_id: 'review_acb16224-dc31-430d-9972-47f57faa0293',
    title: 'Optio quo saepe molestias aspernatur ipsa aut et illum adipisci.',
    stars: 2,
    date: 'Wed Oct 20 2021 15:17:52 GMT+0900 (日本標準時)',
    content: 'Quia tenetur nihil quod qui dolorem pariatur porro. Qui laudantium aut ea.',
    customer_id: 'customer_523bfed6-2d93-44ec-bc9e-1431307c8568',
    product_id: 'prod_ZM8X5nL6Orwpv4'
  },
  {
    review_id: 'review_c5d29bd6-5c99-43e8-a5da-4522e8b06f9e',
    title: 'Modi corrupti amet.',
    stars: 2,
    date: 'Tue Nov 16 2021 20:20:43 GMT+0900 (日本標準時)',
    content: 'Modi explicabo aut iste impedit. Nesciunt commodi deserunt dolor autem. Sed accusantium cum voluptates iste quod asperiores voluptatem. Possimus hic consequatur excepturi placeat vel nobis dicta et. Eius exercitationem ipsam nobis rerum error nulla sed. Consequatur suscipit odit ut vitae.',
    customer_id: 'customer_70ead465-d8a7-4202-bc2d-df07c8ffdeca',
    product_id: 'prod_ZM8X5nL6Orwpv4'
  },
  {
    review_id: 'review_38a1c9ba-5102-4e30-a33a-2cf744d8a15c',
    title: 'Totam nesciunt hic praesentium beatae perspiciatis.',
    stars: 3,
    date: 'Thu Dec 23 2021 06:41:25 GMT+0900 (日本標準時)',
    content: 'Est enim eligendi nesciunt molestias expedita repellendus aliquam. Et consequatur eos et. Deserunt repellat debitis.',
    customer_id: 'customer_4d886046-94bc-41ef-9843-563be91258ff',
    product_id: 'prod_mOVKl4GxXK5prR'
  },
  {
    review_id: 'review_f7482d48-98af-480b-8394-e55c23a63922',
    title: 'Sit veniam cumque molestiae velit voluptatem dolorem tenetur nam.',
    stars: 2,
    date: 'Fri Dec 10 2021 06:04:54 GMT+0900 (日本標準時)',
    content: 'Assumenda at exercitationem. Consequatur ex quae nisi eveniet dolore aut aut.',
    customer_id: 'customer_3f13436e-4c65-4a14-9475-4b3074c978eb',
    product_id: 'prod_ZM8X5nL6Orwpv4'
  },
  {
    review_id: 'review_2ac85579-8fa1-4aec-8f87-a74ccb0187eb',
    title: 'Eum sed quos eos reiciendis tempora tempore possimus.',
    stars: 5,
    date: 'Fri Oct 15 2021 04:51:28 GMT+0900 (日本標準時)',
    content: 'Est omnis ut animi. Culpa optio tempore.',
    customer_id: 'customer_786205e2-f075-40cb-b598-1c8aa9ab90ba',
    product_id: 'prod_ZM8X5nL6Orwpv4'
  },
  {
    review_id: 'review_0acf6c64-7eb6-4de0-86f8-18988c501f25',
    title: 'Qui eos ea in fugiat est dolore eaque perferendis.',
    stars: 2,
    date: 'Mon Apr 26 2021 16:26:21 GMT+0900 (日本標準時)',
    content: 'Omnis labore quia quas vel nisi iste incidunt rerum impedit. Praesentium quis esse eveniet saepe ab. Perspiciatis nobis ipsum vel aut praesentium voluptates.',
    customer_id: 'customer_2a8bfd19-c4d9-4e30-95d0-9a37c569c0bc',
    product_id: 'prod_aZWNoyv9jj580J'
  },
  {
    review_id: 'review_0e9e24fc-c44a-4242-b859-35a69fc199f5',
    title: 'Voluptatem quas ea pariatur saepe aliquam.',
    stars: 3,
    date: 'Mon Mar 08 2021 23:26:11 GMT+0900 (日本標準時)',
    content: 'Mollitia et voluptas accusantium voluptatem maiores sunt. Aspernatur officiis aliquid quibusdam.',
    customer_id: 'customer_2ce5558c-0718-40a0-b9f4-c595def2dc37',
    product_id: 'prod_gvRjwOVDjel4mN'
  },
  {
    review_id: 'review_4d08a0cc-12cb-48c2-bfe5-b55218cd50e2',
    title: 'Molestias laboriosam repellat repellendus iure libero voluptatem a fuga.',
    stars: 2,
    date: 'Fri Mar 05 2021 19:19:51 GMT+0900 (日本標準時)',
    content: 'Iure tempora aut rerum est sed suscipit. Enim aperiam rem iusto voluptas omnis distinctio. Accusamus eos adipisci et quia reiciendis. Eos nostrum ullam hic non voluptatem et laboriosam accusantium ad. Fugiat quibusdam voluptas id. Non sit ut iusto libero qui.',
    customer_id: 'customer_d43bdf7b-473d-4c6b-9d0f-65542c116a68',
    product_id: 'prod_BkyN5YABbx50b6'
  },
  {
    review_id: 'review_0c797302-0b69-4a2e-9fe9-7b773adbdddb',
    title: 'Vel cumque vel quas harum accusantium neque facere.',
    stars: 4,
    date: 'Mon Jun 28 2021 12:38:08 GMT+0900 (日本標準時)',
    content: 'Optio culpa nemo veniam aut quos est voluptas. Et adipisci explicabo aperiam rerum inventore vel. Fugit ad non qui cupiditate.',
    customer_id: 'customer_0b02bdce-f9fd-4c6e-a624-c09a93d521dc',
    product_id: 'prod_ZM8X5nL6Orwpv4'
  },
  {
    review_id: 'review_a616a2c6-5261-4578-8681-b645f413d179',
    title: 'Voluptatum deserunt aspernatur et aut culpa sunt cupiditate.',
    stars: 5,
    date: 'Tue Apr 27 2021 18:17:04 GMT+0900 (日本標準時)',
    content: 'Totam voluptatem molestias quia tempora amet ut quia autem aut. Occaecati quos omnis velit magnam fugit dolore et corrupti. Suscipit illo et enim ut. Eligendi perspiciatis at enim voluptas. Tempore unde aut quae tempore.',
    customer_id: 'customer_52780b10-9f25-499b-8562-569fdcfd17ea',
    product_id: 'prod_gvRjwOVDjel4mN'
  },
  {
    review_id: 'review_ef5d8f46-31b6-4a66-aef4-af8e5413363d',
    title: 'Dolores in adipisci et.',
    stars: 2,
    date: 'Thu Apr 15 2021 16:20:33 GMT+0900 (日本標準時)',
    content: 'Aut sint sunt doloremque incidunt odio vel. Praesentium a eum magnam ut aut repudiandae labore.',
    customer_id: 'customer_e800d6d6-7920-4284-b010-013eff4f57de',
    product_id: 'prod_mOVKl4GxXK5prR'
  },
  {
    review_id: 'review_024f2742-0e1b-418e-b20b-3de13d23711a',
    title: 'Qui soluta animi error.',
    stars: 5,
    date: 'Fri Jun 18 2021 14:52:27 GMT+0900 (日本標準時)',
    content: 'Non iure ipsam quis magnam rerum. Numquam distinctio repudiandae maiores ad in tempore. Quos natus ullam nihil omnis repellendus. Et qui nihil.',
    customer_id: 'customer_0b02bdce-f9fd-4c6e-a624-c09a93d521dc',
    product_id: 'prod_gvRjwOVDjel4mN'
  },
  {
    review_id: 'review_38b65481-c9f4-4328-b488-80b029d3fc47',
    title: 'Dolores sit delectus enim quidem aut hic ipsum.',
    stars: 5,
    date: 'Thu Jul 22 2021 15:48:01 GMT+0900 (日本標準時)',
    content: 'Perferendis iusto qui numquam inventore nihil vel ut. Nam veritatis illo. Est consectetur eaque aliquid molestias sunt saepe earum fuga modi. Et dicta soluta. Reprehenderit et qui voluptates magni.',
    customer_id: 'customer_0b64af81-98a4-475f-ab71-fae0b61533d0',
    product_id: 'prod_ZM8X5nL6Orwpv4'
  },
  {
    review_id: 'review_6dfe02c9-457c-4290-a91c-371dc7ccc1e3',
    title: 'Aspernatur repellat soluta saepe facilis et voluptas ut qui.',
    stars: 4,
    date: 'Fri Apr 30 2021 13:03:21 GMT+0900 (日本標準時)',
    content: 'Velit minima dolore delectus reprehenderit suscipit soluta sit. Ut eum quae reiciendis tenetur praesentium nemo.',
    customer_id: 'customer_c1fa4bea-5410-4a5a-a812-94d224338b94',
    product_id: 'prod_aZWNoyv9jj580J'
  },
  {
    review_id: 'review_f876f904-e1b0-420d-92a3-1bfffd472527',
    title: 'Qui saepe eos vero id consequuntur suscipit ea.',
    stars: 4,
    date: 'Sun Nov 14 2021 08:37:50 GMT+0900 (日本標準時)',
    content: 'Quia quidem non pariatur error. Perspiciatis assumenda aperiam reiciendis reiciendis mollitia numquam perspiciatis.',
    customer_id: 'customer_0b64af81-98a4-475f-ab71-fae0b61533d0',
    product_id: 'prod_BkyN5YABbx50b6'
  },
  {
    review_id: 'review_d60bf8b6-bbbf-4bec-bff7-2ac43fc02a8f',
    title: 'Asperiores dolores placeat sit qui totam corrupti nostrum et magni.',
    stars: 5,
    date: 'Fri Sep 03 2021 16:35:59 GMT+0900 (日本標準時)',
    content: 'Natus delectus nihil ratione maxime debitis non corporis facilis vitae. Consectetur necessitatibus temporibus non expedita.',
    customer_id: 'customer_64c31c1c-b964-473c-973f-87766a284ddd',
    product_id: 'prod_ZM8X5nL6Orwpv4'
  },
  {
    review_id: 'review_958eb79d-6f57-4690-bf65-9e004003e474',
    title: 'Deleniti esse quaerat et libero assumenda ducimus.',
    stars: 3,
    date: 'Sun Jan 02 2022 02:31:34 GMT+0900 (日本標準時)',
    content: 'Rerum sapiente aut qui voluptas. Fugit autem et ut rerum.',
    customer_id: 'customer_8a544420-e9a9-4dce-b532-a9665f29bce0',
    product_id: 'prod_mOVKl4GxXK5prR'
  },
  {
    review_id: 'review_394bd53b-9191-4800-bdff-34e9dd183ed2',
    title: 'Est et consequatur iure sint.',
    stars: 5,
    date: 'Wed Sep 29 2021 10:09:15 GMT+0900 (日本標準時)',
    content: 'Dolorem laborum ullam. Nobis tempore nihil quibusdam dolorum omnis. Ipsam alias harum sequi qui aut quasi aut. Et autem et recusandae ab quod. Sit laboriosam et ut ea. Repudiandae blanditiis est praesentium necessitatibus provident accusamus rerum et eius.',
    customer_id: 'customer_67e32d20-02e0-4258-b3bc-00cafcb59265',
    product_id: 'prod_ZRjywMpyjZl7Y8'
  },
  {
    review_id: 'review_b2393f23-b125-41d4-9c72-964f09bad548',
    title: 'Ea et iusto ducimus rerum voluptate corrupti dolor.',
    stars: 4,
    date: 'Thu Jul 01 2021 05:23:32 GMT+0900 (日本標準時)',
    content: 'Omnis aliquid dolores est aspernatur. Ipsum eum quaerat. Dolorem ut qui ut unde. Voluptatibus aut dignissimos ullam. Blanditiis modi error pariatur eum accusantium.',
    customer_id: 'customer_94182258-403a-468e-8239-ece5c5c04623',
    product_id: 'prod_BkyN5YABbx50b6'
  },
  {
    review_id: 'review_c0ec6c74-9492-4463-9b32-311580c4c4b6',
    title: 'Nihil fuga omnis in qui nostrum aut.',
    stars: 1,
    date: 'Fri Mar 19 2021 02:37:33 GMT+0900 (日本標準時)',
    content: 'Voluptates blanditiis et amet debitis omnis impedit saepe. Id natus aut laboriosam a eaque cupiditate. Vel et aut et et asperiores consequuntur nulla.',
    customer_id: 'customer_d67e8337-e317-4d2c-ae64-9032e342c673',
    product_id: 'prod_ZM8X5nL6Orwpv4'
  },
  {
    review_id: 'review_e6bb5f48-0fe6-40ad-9dab-ac4bd95a7156',
    title: 'Ad enim molestias similique quibusdam aut.',
    stars: 4,
    date: 'Fri Apr 09 2021 09:32:04 GMT+0900 (日本標準時)',
    content: 'Quod et in exercitationem ullam omnis vitae velit. Quia dicta nam harum tenetur maiores non.',
    customer_id: 'customer_c3c3830e-3e87-4c51-91bb-636943082300',
    product_id: 'prod_mOVKl4GxXK5prR'
  },
  {
    review_id: 'review_8579ce88-6bd9-4ded-be6e-9f9aa3fce37b',
    title: 'Ipsum et voluptates occaecati dolor cupiditate fugit est.',
    stars: 2,
    date: 'Sat Jun 19 2021 05:53:53 GMT+0900 (日本標準時)',
    content: 'Facilis possimus blanditiis. Qui exercitationem est. Facere laborum ab sunt dolorem. Amet odio asperiores ab porro quis.',
    customer_id: 'customer_9cb92cbd-b30f-4d5a-a97f-3d88d768dfd8',
    product_id: 'prod_aZWNoyv9jj580J'
  },
  {
    review_id: 'review_791c3f4b-1e89-4adf-a99e-ccbd9b09134e',
    title: 'Animi non quae.',
    stars: 1,
    date: 'Mon Apr 12 2021 09:01:25 GMT+0900 (日本標準時)',
    content: 'Maxime quam suscipit magnam repellat repudiandae harum. Non illum quasi qui vel reiciendis et.',
    customer_id: 'customer_2a8bfd19-c4d9-4e30-95d0-9a37c569c0bc',
    product_id: 'prod_mOVKl4GxXK5prR'
  },
  {
    review_id: 'review_722ff59b-0868-4315-a511-599b4020898a',
    title: 'Non eligendi labore voluptatem et ut qui dicta odit placeat.',
    stars: 5,
    date: 'Mon Nov 15 2021 05:34:14 GMT+0900 (日本標準時)',
    content: 'Exercitationem cumque quo molestias. Laudantium esse odio modi deleniti aspernatur numquam. Non et possimus vel quia magnam ut cum perferendis molestias. Ipsam consequuntur dolorem consequatur. Illum autem adipisci culpa voluptatem velit necessitatibus et quia. Repellendus sit sunt dolore illum sed repellat sequi.',
    customer_id: 'customer_f8f43da2-9d67-41df-9901-1218a005b738',
    product_id: 'prod_aZWNoyv9jj580J'
  },
  {
    review_id: 'review_8fc15ea6-672e-49f5-a20f-add123845e35',
    title: 'Id iure nemo eum.',
    stars: 4,
    date: 'Wed Jan 19 2022 19:23:57 GMT+0900 (日本標準時)',
    content: 'Quis magnam ut hic non voluptatem quas tenetur sapiente quia. Dicta ea magnam consequatur velit odio voluptate impedit aperiam sed.',
    customer_id: 'customer_4d246374-e17d-45b8-adb7-41b4fb70171b',
    product_id: 'prod_ZRjywMpyjZl7Y8'
  },
  {
    review_id: 'review_53ca994f-2df3-4cfe-8b83-cc6ff657eef1',
    title: 'Rerum explicabo praesentium voluptas voluptatem aperiam dolore dolor aut sunt.',
    stars: 2,
    date: 'Sun Feb 06 2022 05:03:38 GMT+0900 (日本標準時)',
    content: 'Est molestiae non perspiciatis optio aut illum ut. Hic consequatur aperiam sapiente omnis eligendi illum porro optio sunt.',
    customer_id: 'customer_4d886046-94bc-41ef-9843-563be91258ff',
    product_id: 'prod_ZRjywMpyjZl7Y8'
  },
  {
    review_id: 'review_bd215219-3b32-4ced-b817-02e44d176001',
    title: 'Ut tempora sunt repellendus sit.',
    stars: 4,
    date: 'Sat Oct 30 2021 05:50:54 GMT+0900 (日本標準時)',
    content: 'Est at ipsa vero et et non. Perferendis sed autem doloremque. Omnis sit similique.',
    customer_id: 'customer_4a104cc9-a3a6-457b-8adc-64e5f0acb3cc',
    product_id: 'prod_BkyN5YABbx50b6'
  },
  {
    review_id: 'review_1fd1ee86-5fcc-4988-ad8a-2935db44f17d',
    title: 'Dolor iure non eum numquam eum natus est non vitae.',
    stars: 4,
    date: 'Sat May 08 2021 22:48:14 GMT+0900 (日本標準時)',
    content: 'Quo officia porro iure a amet sit. Id dolore voluptatem praesentium rerum aut voluptatem aliquam consequatur.',
    customer_id: 'customer_c3c3830e-3e87-4c51-91bb-636943082300',
    product_id: 'prod_gvRjwOVDjel4mN'
  },
  {
    review_id: 'review_845044e4-ce23-483f-92d6-8ac100e092e4',
    title: 'Sed voluptates corrupti.',
    stars: 5,
    date: 'Thu Mar 04 2021 08:35:11 GMT+0900 (日本標準時)',
    content: 'Atque a adipisci expedita autem. Modi exercitationem est aut ipsam aspernatur. Est necessitatibus dolorum enim amet et voluptatem quas. Dolore qui vel molestias qui et sed. Suscipit molestiae et repellat sit non odit esse est reiciendis.',
    customer_id: 'customer_92f6908d-1ec7-44f4-ac15-e25a354651ac',
    product_id: 'prod_ZM8X5nL6Orwpv4'
  },
  {
    review_id: 'review_1a2ffcb0-967f-4a6c-8a1f-32d0cc7307c8',
    title: 'Facere aspernatur repudiandae numquam commodi dolores.',
    stars: 1,
    date: 'Tue Aug 10 2021 23:31:53 GMT+0900 (日本標準時)',
    content: 'Sit dignissimos aspernatur minus quia necessitatibus illo sint. Deleniti non sed et.',
    customer_id: 'customer_642e7d4a-d513-4377-b0a8-75c3d2392497',
    product_id: 'prod_gvRjwOVDjel4mN'
  },
  {
    review_id: 'review_caf32353-7352-4f1b-8484-f54773f30129',
    title: 'Cum a magni dolor aut.',
    stars: 5,
    date: 'Sun Jan 09 2022 23:32:07 GMT+0900 (日本標準時)',
    content: 'Nemo qui aliquam accusantium totam qui quia. Et tempore eius ipsa non facere dignissimos. Voluptas repellat necessitatibus. Perferendis dolor quisquam ab velit quasi aperiam.',
    customer_id: 'customer_09150173-3222-4216-81d0-88a1bd30fe31',
    product_id: 'prod_ZRjywMpyjZl7Y8'
  },
  {
    review_id: 'review_5a326670-3bee-444d-8d91-b8f37dc77bde',
    title: 'Quidem ut sapiente iure.',
    stars: 2,
    date: 'Thu Jan 27 2022 23:53:53 GMT+0900 (日本標準時)',
    content: 'Sit assumenda vel dolores at autem ex. Et molestiae ut error ut fuga omnis et autem sint. Suscipit sed maxime sequi blanditiis aut nemo. Et consequatur natus. Iusto explicabo nam.',
    customer_id: 'customer_7c44970e-1161-4f6e-b75b-703660bdc488',
    product_id: 'prod_ZM8X5nL6Orwpv4'
  }
]