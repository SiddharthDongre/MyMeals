import { documentModel, documentContact } from "./mongoose.js";

export const contact = (req, res) => {
    const { name, email, phone, message } = req.body;

    documentContact.insertMany({
        name : name,
        email : email,
        phone : phone,
        message : message 
    }, (err, data) => {
        if(err){
            res.send({ message : "Some error occured" });
        }
        else{
            res.send({ message : "Message successfully submitted", data : data });
        }
    })
};

export const signup =  (req, res) => {
    const { name, email, password, reEnterPassword } = req.body;

    documentModel.findOne({email : email}, (err, data) => {
        if(err){
            res.send({ message : "Some error occured", err : err });
        }
        else if(data){
            res.send({ message : "User already registered" });
        }
        else {
            documentModel.insertMany({
                name : name,
                email : email,
                password : password,
                reEnterPassword : reEnterPassword
            }, (err, data) => {
                if(err){
                    console.log(err);
                    res.send({ message : "Some error occured", err : err });
                }
                else{
                    console.log(data);
                    res.send({ message : "Successfully Registered", data : data });
                };
            })
        };
    })
};

export const login = (req, res) => {
    const { email, password } = req.body;

    documentModel.findOne({email : email}, (err, data) => {
        if(err){
            res.send({ message : "Some error occured", err : err });
        }
        else if(data){
            if(password === data.password){
                res.send({ message : "Login Successfully", data : data });
            }
            else {
                res.send({ message : "Password did not matched" });
            }
        }
        else {
            res.send({ message : "User not registered" });
        }
    })
};