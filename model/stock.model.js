const mongoose = require(mongoose)

const stockSchema = mongoose.Schema({
    symbol: {
        type: String,
        required: true,
      },
      data: {
        type: Object,
        required: true,
      },
      fetchedAt: {
        type: Date,
        default: Date.now,
      },
})

const stock = mongoose.model("stock", stockSchema)
