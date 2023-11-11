const { Schema, model } = require('mongoose')

const collection = 'carts'

const CartSchema = new Schema({
  
  products: {
      type: [{
          product: {
              type: Schema.Types.ObjectId,
              ref: 'products'
          }            
      }]
  }
})

CartSchema.pre('findOne', function(){
  this.populate('products.product')
})

const cartModel = model(collection, CartSchema)

module.exports = { cartModel }
      
  