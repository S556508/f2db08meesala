var house = require('../models/house'); 
 
// List of all houses 
exports.house_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: house list'); 
}; 
 
// for a specific house. 
exports.house_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: house detail: ' + req.params.id); 
}; 
 
// Handle house create on POST. 
exports.house_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new house(); 
     
    document.house_Name = req.body.house_Name; 
    document.house_Type = req.body.house_Type; 
    document.house_Cost = req.body.house_Cost; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

 
// Handle house delete form on DELETE. 
exports.house_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: house delete DELETE ' + req.params.id); 
}; 
 
// Handle house update form on PUT. 
exports.house_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: house update PUT' + req.params.id); 
}; 

exports.house_list = async function(req, res) { 
    try{ 
        thehouses = await house.find(); 
        res.send(thehouses); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// VIEWS 
// Handle a show all view 
exports.house_view_all_Page = async function(req, res) { 
    try{ 
        thehouses = await house.find(); 
        res.render('house', { title: 'house Search Results', results: thehouses }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 