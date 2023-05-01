# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort and a model called Student. The cohort model has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: The foreign key will be called whatever you want it to be called & it would be added in the student model because each cohort should have many student but each student cannot have many cohorts. So to fix the mistake of not adding a FK you can do add_foreign_key which should add a foreign key.

Researched answer:



























2. Which RESTful routes must always be passed params? Why?

Your answer:

Researched answer:














3. Name three rails generator commands. What is created by each?

Your answer:

Rails generate model: creates a new file called model in the apps/models directory. Models essentially represent all data and provide an interface , like one you'd see while online shopping to interact with the databse table aka whats in stock.

Rails generate migrate: Creates a new file in db/migrate and allows you to modify database schema and lets you modify the data types and add/remove. Such as removing or adding more items to an online store.

Rails generate channel: creates a action cabel channel in apps/channel . What this command does is tht it creates a channel class that has methods that can for example handle subscription request and serve as broadcasting msgs to said subscribers

Researched answer: 















4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

GET - Index /show method
POST- Create methods 
PATCH- Update/replace methods
PUT- update/modify methodss
DELETE- destroy methods


action: "GET" location: /students  
//Index
// It'll show a list of all students


action: "POST" location: /students
//Create
//This allows us to create a new student record with certain parameteres , saving it to our database.

action: "GET" location: /students/new
//It says it there , new.
// This allows us to create a new student by making a form .

action: "GET" location: /students/2
//thisw will just call upon show.
// This just displays the student with ID 2

action: "GET" location: /students/2/edit
//It says it there that it will call upon edit.
//This should get the student ID 2 and display it for us to edit.



action: "PATCH" location: /students/2
//it will call upon update.
//This should allow us to update the student with ID of 2 only and save it to database.

action: "DELETE" location: /students/2
//It would call  destroy
// This should delete the student with ID of 2














5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).
