import { createNewContact } from '../controllers/controller.js';
import { getContacts } from '../controllers/controller.js';
import { getContactWithID } from '../controllers/controller.js';
import { updateContact } from '../controllers/controller.js';

const routes=(app)=>{
 app.route("/contact")
 .get((req,res,next)=>{
    //middleware
    console.log(`Get request received: ${req.method} ${req.url}`);
    next();



 },getContacts)

 .post(createNewContact)
 .delete((req,res)=>{
    res.send("Delete Request");
 });
 app.route("/contact/:id").get(getContactWithID).put(updateContact);

};

export default routes;