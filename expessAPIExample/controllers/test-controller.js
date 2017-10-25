
exports.test=function(req,res,next){
    res.status(200).json({
        test: 'Good to go'
    });
}