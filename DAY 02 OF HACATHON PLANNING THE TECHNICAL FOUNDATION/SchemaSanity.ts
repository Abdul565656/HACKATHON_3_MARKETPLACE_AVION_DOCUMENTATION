import { defineType } from 'sanity';

// Product Schema
export const Product = defineType({
  name: 'product',
  type: 'document',
  fields: [
    { name: 'id', type: 'string', title: 'ID' },
    { name: 'name', type: 'string', title: 'Name' },
    { name: 'description', type: 'text', title: 'Description' },
    { name: 'price', type: 'number', title: 'Price' },
    { name: 'discount', type: 'number', title: 'Discount' },
    { name: 'availability', type: 'boolean', title: 'Availability' },
    { name: 'popularity', type: 'number', title: 'Popularity' },
    { name: 'category', type: 'string', title: 'Category' },
    { name: 'images', type: 'array', of: [{ type: 'string' }], title: 'Images' },
  ],
});

// User Schema
export const User = defineType({
  name: 'user',
  type: 'document',
  fields: [
    { name: 'id', type: 'string', title: 'ID' },
    { name: 'name', type: 'string', title: 'Name' },
    { name: 'email', type: 'string', title: 'Email' },
    { name: 'password', type: 'string', title: 'Password' },
    { name: 'phone', type: 'string', title: 'Phone' },
    { 
      name: 'address', 
      type: 'array', 
      of: [{ 
        type: 'object',
        fields: [
          { name: 'street', type: 'string', title: 'Street' },
          { name: 'city', type: 'string', title: 'City' },
          { name: 'state', type: 'string', title: 'State' },
          { name: 'zip', type: 'string', title: 'Zip' },
        ],
      }], 
      title: 'Address'
    },
    { name: 'wishlist', type: 'array', of: [{ type: 'string' }], title: 'Wishlist' },
  ],
});

// Order Schema
export const Order = defineType({
  name: 'order',
  type: 'document',
  fields: [
    { name: 'id', type: 'string', title: 'ID' },
    { name: 'userId', type: 'string', title: 'User ID' },
    { 
      name: 'products', 
      type: 'array', 
      of: [{ 
        type: 'object',
        fields: [
          { name: 'productId', type: 'string', title: 'Product ID' },
          { name: 'quantity', type: 'number', title: 'Quantity' },
          { name: 'price', type: 'number', title: 'Price' },
        ],
      }], 
      title: 'Products' 
    },
    { name: 'totalAmount', type: 'number', title: 'Total Amount' },
    { name: 'paymentStatus', type: 'string', options: { list: ['Pending', 'Completed', 'Failed'] }, title: 'Payment Status' },
    { name: 'shipmentId', type: 'string', title: 'Shipment ID' },
    { 
      name: 'shippingAddress', 
      type: 'object',
      fields: [
        { name: 'street', type: 'string', title: 'Street' },
        { name: 'city', type: 'string', title: 'City' },
        { name: 'state', type: 'string', title: 'State' },
        { name: 'zip', type: 'string', title: 'Zip' },
      ], 
      title: 'Shipping Address'
    },
  ],
});

// Payment Schema
export const Payment = defineType({
  name: 'payment',
  type: 'document',
  fields: [
    { name: 'id', type: 'string', title: 'ID' },
    { name: 'orderId', type: 'string', title: 'Order ID' },
    { name: 'method', type: 'string', options: { list: ['Stripe', 'PayPal'] }, title: 'Method' },
    { name: 'status', type: 'string', options: { list: ['Pending', 'Completed', 'Failed'] }, title: 'Status' },
    { name: 'amount', type: 'number', title: 'Amount' },
  ],
});
