const {constants} = require('../Routes/constants');
const errorHandler = (err,res,req,next) =>{
    const statusCode = res.statusCode ? res.statusCode:500;

    switch(statusCode){
        case constants.VALIDATION_ERROR:
            res.json({title:"Validadtion Field", message:err.message, stackTrace:err.stack})
            break;

        case constants.UNATHORIZED_ERROR:
            res.json({title:"Unauthorized", message:err.message, stackTrace:err.stack});
            break;  
            
        case constants.FORBIDDEN:
            res.json({title:"Forbidden", message:err.message, stackTrace:err.stack});
            break;  
                
        case constants.NOT_FOUND:
            res.json({title:"Not Found", message:err.message, stackTrace:err.stack});
            break; 
        case constants.SERVER_ERROR:
            res.json({title:"Server Error", message:err.message, stackTrace:err.stack});
            break;              
        default:
            break;
    }

    
}

module.exports = errorHandler;