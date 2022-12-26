const get = (req, res) => {
    const user = [
        {
            id: 1,
            name: "Irfan",
            department:"IT"
        },
        {
            id: 2,
            name: "Imran",
            department:"NON-IT"

        },
        {
            id: 3,
            name: "Anand",
            department:"IT"
        }
    ]
    if(req.query.id){
        //you can also filter the data using url parameter
       const newUser = user.filter(value =>value.id === Number (req.query.id)) //filtering the data by using query parameter
       res.send(newUser)
    }else{
        res.send(user)
    }
}



module.exports.employeeGet = get