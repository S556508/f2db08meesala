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

// Handle a show one view with id specified by query
exports.house_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await house.findById( req.query.id)
    res.render('housedetail',
    { title: 'house Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };


// Handle Costume delete on DELETE.
exports.house_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await house.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
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
// for a specific house.
exports.house_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await house.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
    //Handle Costume update form on PUT.
    exports.house_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await house.findById( req.params.id)
    // Do updates of properties
    if(req.body.house_Type)
    toUpdate.house_Type = req.body.house_Type;
    if(req.body.house_Cost) toUpdate.house_Cost = req.body.house_Cost;
    if(req.body.house_Name) toUpdate.house_Name = req.body.house_Name;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
    };