const express = require('express')
const app = express()

// test.jsonファイルの内容をレスポンス
app.post('/test', (req, res) => res.json(require('./mocks/profile/test.json')))

app.listen(5000, () => console.log('API Mock Server is running'))
