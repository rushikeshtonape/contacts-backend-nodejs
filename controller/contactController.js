//@des get all contact
//router GET /api/contacts
// Access Public

const getContacts = (req,res)=>{
    res.status(200).json( {message : "get all messsage "});
};


//@des create contact
//router POSt /api/contacts
// Access Public

const createContact = (req,res)=>{
    console.log("The request is : ",req.body);
    const {name,email,phone} = req.body;

    if(!name || !email || !phone){
        res.status(400);
        throw new Error("all flieds are mandatory");
    }
    res.status(200).json( {message : " create messsage "});
};

//@des get contact
//router GET /api/contacts/:id
// Access Public

const getContact = (req,res)=>{
    res.status(200).json( {message : `get messsage ${req.params.id}`});
};

//@des uppdate contact
//router PUT /api/contacts/:id
// Access Public

const updateContact = (req,res)=>{

    res.status(200).json( {message : `update messsage ${req.params.id}`});
}

//@des delete contact
//router DELETE /api/contacts/:id
// Access Public

const deleteContact = (req,res)=>{
    res.status(200).json( {message : `delete messages ${req.params.id}`});
}
module.exports = {getContacts,createContact,getContact,updateContact,deleteContact};