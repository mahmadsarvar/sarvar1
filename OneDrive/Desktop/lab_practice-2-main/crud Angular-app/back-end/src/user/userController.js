var userService = require('./userService');

var getDataConntrollerfn = async (req, res) =>
{
    var empolyee = await userService.getDataFromDBService();
    res.send({ "status": true, "data": empolyee });
}

var createUserControllerFn = (req, res) => {
    userService.createUserDBService(req.body)
        .then(() => {
            res.send({ "status": true, "message": "Student Added Successfully" });
        })
        .catch((error) => {
            res.send({ "status": false, "message": "Error creating user" });
        });
} 

var updateUserController = async (req, res) => {
    try {
      console.log(req.params.id);
      console.log(req.body);

      var result = await userService.updateUserDBService(req.params.id, req.body);
      if (result) {
        res.send({ "status": true, "message": "student updated" });
      } else {
        res.send({ "status": false, "message": "User Update Failed" });
      }
    } catch (error) {
      res.send({ "status": false, "message": "An error occurred while updating the user" });
    }
  }

var deleteUserController = async (req, res) => {
    try {
      console.log(req.params.id);
      var result = await userService.removeUserDBService(req.params.id);
      if (result) {
        res.send({ "status": true, "message": "User Deleted" });
      } else {
        res.send({ "status": false, "message": "User Deletion Failed" });
      }
    } catch (error) {
      res.send({ "status": false, "message": "An error occurred while deleting the user" });
    }
  }
  
module.exports = { getDataConntrollerfn, createUserControllerFn,deleteUserController,updateUserController };