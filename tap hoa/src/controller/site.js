class site{
    index(req, res){
        res.render('index');
    }
};
module.exports = new site();