
var users=[];
function addUser(){
   var objs={ 
    name:prompt("please enter your name"),
    id:prompt("please enter your ID"),
    balance:prompt("please enter your balance")};
    users.push(objs);
}
console.log(addUser());
console.table(users);

function editeById(id,balance){
    var id = prompt("enter the id of the balance to be edited")
    var balance = prompt ("enter new balance")
    let found = users.find(element => element.id == id);
    found.balance=balance
    console.table(users);
}
editeById();
function deleteUser(id,balance){
    var id = prompt("enter the id of the user to be deleted")
    let found = users.find(element=>element.id==id);
    users.splice(id,3);
    console.table(users);
}
deleteUser();
