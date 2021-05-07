const express = require('express')
const app = express()
app.use(require('morgan')('tiny'))
const routesReport = require('rowdy-logger').begin(app)
const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')
const cartRoutes = require('./routes/cartRoutes')
app.use(express.json())
app.use(require('cors')())

app.use('/users', userRoutes)
app.use('/products', productRoutes)
app.use('/carts', cartRoutes)
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
  routesReport.print()
})

