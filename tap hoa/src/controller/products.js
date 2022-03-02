class productsController{
    index(req, res){
        res.render('products');
    }
    categories(req, res){
        res.render('category');
    }
}

module.exports = new productsController();