module.exports = (err, req, res, next) => {
    console.log(`err`, err)
    
    res.json({
        success: false,
        msg: err
    })
}