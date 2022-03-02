class adminController{
    index(req, res){
        res.render('admin');
    }
    add_user(req, res){
        res.render('add_user');
    }
}

module.exports = new adminController();