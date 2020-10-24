const User = require('../models/user.model.js');

// Create and Save a new User
exports.create = (req, res) => {
    // Create a User
    const note = new User({
        
        firstName: req.body.firstName,
        lastName:req.body.lastName,
        emailId:req.body.emailId
    });

    // Save User in the database
    note.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the User."
        });
    });
};
// Retrieve and return all Users from the database.
exports.findAll = (req, res) => {
    User.find()
    .then(notes => {
        res.send(notes);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving users."
        });
    });
};
// Find a single User with a id
exports.findOne = (req, res) => {
    User.findById(req.params.id)
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.id
            });            
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.id
        });
    });
};
// Update a User identified by the id in the request
exports.update = (req, res) => {
   
    User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "no user found",
        });
      }
      res.status(200).send(user);
    })
    .catch((err) => {
      return res.status(404).send({
        message: "error while updating the post",
      });
    });
    
};
// Delete a User with the specified id in the request
exports.delete = (req, res) => {
    
    User.findByIdAndRemove(req.params.id)
    .then(note => {
       // if(!note) {
            //return res.status(404).send({
            //    message: "User not found with id " + req.params.id
            //});
       // }
        res.send({message: "User deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "User not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Could not delete User with id " + req.params.id
        });
    });
};
