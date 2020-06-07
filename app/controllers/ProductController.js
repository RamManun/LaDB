const Product = require('../models/Product');

function index(req, res) {
    Product.find({})
    .then(products => {
        if(products.length) return res.status(200).send({products});
        return res.status(204).send({message: 'NADA'});
    }).catch(error => res.status(500).send({error}));
}

function show(req, res){
    if(req.body.error) return res.status(500).send({error});
    if(req.body.products) return res.status(201).send({products});
    return res.status(404).send({message: 'No encontrado'});
}

function create(req, res){
    new Product(req.body).save().then(product => res.status(200).send({product})).catch(error => res.status(500).send({error}));
}

function update(req, res){
    if(req.body.error) return res.status(500).send(error);
    if(!req.body.products) return res.status(404).send({message: 'no encontrado'});
    let product = req.body.products[0];
    product = Object.assign(product,req.body);
    product.save().then(product => res.status(200).send({message: 'Actualizado', product})).catch(error => res.status(500).send({error}))
}

function remove(req, res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.products) return res.status(404).send({message: 'no encontrado'});
    req.body.products[0].remove().then(product => res.status(200).send({message: 'eliminado', product})).catch(error => res.status(500).send({error}));
}

function find(req, res, next){
    let query = {};
    query[res.params.key] = req.params.value;
    Product.find(query).then(products => {
        if(!products.length) return next();
        req.body.product = products;
        return next();
    }).catch(error => {
        req.body.error  = error;
        next();
    })
}

module.exports = {
    index,
    show,
    create,
    update,
    remove,
    find
}