// var express = require('express');
// var router = express.Router();
// var standupCtrl = require('../controllers/standup.server.controller');

// /* GET home page. */
// router.get('/', function(req, res) {
//   return standupCtrl.list(req, res);
// });

// /* POST filter by member name - home page. */
// router.post('/', function(req, res) {
//     return standupCtrl.filterByMember(req, res);
// });

// /* GET New Note page. */
// router.get('/newnote', function(req, res) {
//     return standupCtrl.getNote(req, res);
// });

// /* POST New Note page. */
// router.post('/newnote', function(req, res) {
//     return standupCtrl.create(req, res);
// });

// module.exports = router;



import { getUsers, deleteUser } from '../api/userApi';

//Populate table of users via API call.

getUsers().then(result => {
  let usersBody = "";

  result.forEach(user => {
    usersBody += `<tr>
    <td><a href="#" data-id="${user.id}" class = "deleteUser">Delete</a> </td>
    <td>${user.id}</td>
    <td>${user.firstName}</td>
    <td>${user.lastName}</td>
    <td>${user.email}</td>
    </tr>`
  });
  global.document.getElementById('users').innerHTML = usersBody;

  const deleteLinks = global.document.getElementsByClassName('deleteUser');

  Array.from(deleteLinks, link => {
    link.onclick = function (event) {
      const element = event.target;
      event.preventDefault();
      deleteUser(element.attributes["data-id"].value);
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row);
    };
  });
});


