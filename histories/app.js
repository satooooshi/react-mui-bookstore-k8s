
// https://github.com/redis/node-redis
import { createClient } from 'redis'
const client = createClient()

import express from "express"
const app = express()
const host = '0.0.0.0'
const port = 3005

import cors from "cors"
app.use(cors());
app.listen(port, host, () => console.log('API is running on '+host+':'+port))


app.get('/api/histories/add/visited/:customerId/:productId', function (req, res) {
  //console.log(req.params)
  const customerId = req.params.customerId
  const productId = req.params.productId
  const visited = Date.now()
  addToSortedSet(customerId, productId, visited)
  res.send({
    customer_id: customerId,
    product_id: productId,
    visited_date: visited
  })
})

app.get('/api/histories/get/visited/:customerId', function (req, res) {
  //console.log(req.params)
  const customerId = req.params.customerId
  async function getSortedSet() {
    await client.connect()
    // Get all of the values/scores from the sorted set using
    // the scan approach:
    // https://redis.io/commands/zscan
    let arr=[]
    for await (const memberWithScore of client.zScanIterator('history-visited-'+customerId)) {
      //console.log('a'+memberWithScore)
      arr.push(memberWithScore)
    }
    await client.quit()
    console.log(arr)
    res.send(arr)
  }
  getSortedSet()
})




async function addToSortedSet(customerId, productId, visiteddate) {
  await client.connect()
  await client.zAdd('history-visited-'+customerId,
    {
      score: visiteddate,
      value: productId,
    })

  // Get all of the values/scores from the sorted set using
  // the scan approach:
  // https://redis.io/commands/zscan
  //for await (const memberWithScore of client.zScanIterator('history-visited-'+customerId)) {
  //  console.log(memberWithScore)
  //}
  await client.quit()
  
}


