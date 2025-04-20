![image](https://github.com/user-attachments/assets/298ef9eb-b364-46d3-8994-2b10540e65c2)
---
#This is a simple api to store information about trucks, order and messages.
##The routes are

'trucks' - renders an interactive table of all trucks. Support deleting individual trunks and creating a new one.

![image](https://github.com/user-attachments/assets/5b9b1f1a-8921-4d26-ba17-f28bbae4e7f8)

'api' - return the HATEOAS

![image](https://github.com/user-attachments/assets/f8e341cb-41a8-4886-9a02-7b27dc524d43)

'/api/trucks' 
  GET returns an array of all trucks

  ![image](https://github.com/user-attachments/assets/c2776549-a4d6-4e26-9b53-75695f8e0f9c)

  POST creates a new truck and returns the newly created object

  DELETE clears the trucks array

'api/trucks/:id'
  GET - return the truck with a selected ID or 404 resource not found
  PUT - inserts changes in the truck with the selected ID
  DELETE - deletes the truck with the selected ID 
  
'api/trucks/?truckId={id}' - api is designed to work with different requests using parameters or url string
  GET - return the truck with a selected ID
  
  ![image](https://github.com/user-attachments/assets/57d264ec-e8d3-433d-87fe-a2a12b2cf830)


'/api/orders'
  GET - returns an array of all orders

  ![image](https://github.com/user-attachments/assets/77b83f20-7098-4223-911a-80d9f596ff43)
  
  POST - creates a new order
  DELETE - deletes all orders
  PATCH - returns status 405

'/api/orders/:id'
  GET - returns the order with the selected ID or 404 resource not found
  PATCH - changes the order with the selected ID (changes only pending orders)
  DELETE - deletes the order with selected ID
  POST - creates a new order

'/api/messages'
  GET - returns an array of all messages
  
  ![image](https://github.com/user-attachments/assets/b3662d7b-7abd-4ac8-9acd-f39b3120fe84)

  POST - creates a new message
  DELETE - delete all messages
  PATCH - returns status 405

'/api/messages/:id'
  GET - returns the message with the selected ID
  PATCH - changes the message with the selected ID (affects only messages that have not been read)
  DELETE - delete the message with the selected ID
  POST - returns status 405

'teapot'
  GET - returns status 418

  ![image](https://github.com/user-attachments/assets/fa377409-3c63-465b-9055-050fc0bea4a7)

---
What could you have done differently during the planning stages of your project to make the execution easier?<br/>
I would select all functions that are similar for all data models and unite them in a single module (like get requests always returns array or functions to return status 405).

Were there any requirements that were difficult to implement?<br/>
The template view was not so easy. Also, I could not figure out how to make a front-end typescript file (scripts/trucks) to autocompile, so I made it mjs file.
What do you think would make them easier to implement in future projects?<br/>
Clear separation between front-end and back-end. Or other scripts in Node.js (I've used ts-node, but there is a variant to autocompile all ts files into mjs files)

What would you add to or change about your application if given more time?<br/>
More data validation (like forbidding the deletion of the truck if it has orders assigned). Clearer front-end with fewer reloads from the back-end.


