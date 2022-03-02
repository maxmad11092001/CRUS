const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

const Product = mongoose.Schema({
    name: {type: 'string', required: true},
    price: {type: 'number', required: true},
    description: {type: 'string', required: true},
    image: {type: 'string', required: true},
    categoryId: {type: 'string', required: true},
    brand: {type: 'string', required: true},
    slug: {type: 'string', slug: 'name'},
},
{
    timestamp: true
}
)

mongoose.plugin(slug);

module.exports = mongoose.model('product', Product);