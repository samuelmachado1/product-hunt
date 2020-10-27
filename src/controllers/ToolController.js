const mongoose = require('mongoose');

const Tool = mongoose.model("Tool");

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;
        const { tag } = req.query;
        const tools =  await Tool.paginate(tag == undefined ? ({}, {page, limit: 10}) : {tags: tag}, {page, limit: 10});
       
              
       return res.json(tools);
    },

    async filter(req, res) {
        
       return res.json(tools);
    },
    

    async show(req, res) {
        const tool = await Tool.findById(req.params.id);

        return res.json(tool);
    },

    async store(req, res) {                                                     
        const tool =  await Tool.create(req.body);
        res.setHeader("content-type", "application/json")
        
        return res.status(201).json(tool);
     },

    async update(req, res) {
        const tool =  await Tool.findByIdAndUpdate(req.params.id, req.body, {new: true});
    
        return res.json(tool);
    },

    async destroy(req, res) {
       await Tool.findByIdAndRemove(req.params.id);
        
        return res.send();
    },

 
 

};