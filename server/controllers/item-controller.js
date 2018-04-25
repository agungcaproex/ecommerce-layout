const Item  = require('../models/item-model')

module.exports = {
    findAll : (req, res) => {
        Item.find({})
        .exec()
        .then((items) => {
            if(items) {
                res.status(200).json({
                    message : `get all item success !`,
                    data    : items
                })
            } else {
                res.status(202).json({
                    message : `accepted but there is no item yet !`,
                    data    : []
                })
            }
        })
        .catch((err) => {
            res.status(404).json({
                message : `An error occured`,
                error: err
            })
        })
    },

    create : (req, res) => {
        Item.create({
            name : req.body.name,
            title : req.body.title,
            category : req.body.category,
            picture : req.body.location,
            price : req.body.price,
            stock : req.body.stock
        },(err, newItem) => {
            if (err) {
                return res.status(400).json({
                    message: `create item erorr`,
                    error: err
                })
            } else {
                res.status(200).json({
                    message: `create item success`,
                    data: newItem
                })
            }
        })
    },

    findById : (req, res) => {
        Item.findById(req.params.id)
        .exec()
        .then((item) => {
            if (item) {
                res.status(200).json({
                    message: `item found !`,
                    data: item
                })
            } else {
                res.status(202).json({
                    message: `item not found !`,
                    data: {}
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                message : `An error occured`,
                error: err
            })
        })
    },

    deleteById : (req, res) => {
        Item.findByIdAndRemove(req.params.id,(err,deletedItem) => {
            if (err) {
                res.status(500).json({
                    message : `Error deleting item`,
                    error : err
                })
            } else {
                res.status(200).json({
                    message : `Delete item success !`,
                    data    : deletedItem
                })
            }
        })
    }
}