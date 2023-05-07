# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort and a model called Student. The cohort model has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: The foreign key will be called whatever you want it to be called & it would be added in the student model because each cohort should have many student but each student cannot have many cohorts. So to fix the mistake of not adding a FK you can do add_foreign_key which should add a foreign key.

Researched answer:  First create a migration file before ussing add_foreign_key. The FK would still be assigned to student model.



























2. Which RESTful routes must always be passed params? Why?

Your answer: Controller must always be used or is always used as its responsible for handling a request, such as going to the electronics category on Amazon. Action as well but this one represents specfic operations such as viewing a website or adding something to a cart whilst online shopping.

Researched answer: Controller makes the model data available to the user to see as well as save or update what the user does to the model. Action allows you to choose which attributes should be used for updating in large quantites so it doesn't expose something that shouldn't be exposed. 














3. Name three rails generator commands. What is created by each?

Your answer:

Rails generate model: creates a new file called model in the apps/models directory. Models essentially represent all data and provide an interface , like one you'd see while online shopping to interact with the databse table aka whats in stock.

Rails generate migrate: Creates a new file in db/migrate and allows you to modify database schema and lets you modify the data types and add/remove. Such as removing or adding more items to an online store.

Rails generate channel: creates a action cabel channel in apps/channel . What this command does is tht it creates a channel class that has methods that can for example handle subscription request and serve as broadcasting msgs to said subscribers

Researched answer: 
Rails generate scaffold : This  controller creates a basic skeleton for a web app. What I mean by that is that it creates a new controller, method and views.

Rails generate controller : Creates a new controller as well as methods in the controller & views in files .

Rails generate model: This just create a new model class with a class definition of 'app/models.example.rb' and a migration in 'db/migrate/*create_example.rb'













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


1. As a user I can add items to my to-do-list.
2. As a user I can check off items that are done on my to-do-list
3. As a user I can delete items off my to-do-list.
4. As a user I can update items in my to-do-list
5. As a user I create subcategories/lists in my to-do-list.
6. As a user , everytime I update , delete, or add items to my list it takes me back to the landing page. 
7. As a user, I can create multiple lists and have them be displayed on my landing page.
8. As a user , every list that's displayed on the landing page is clickable and takes me to said list.
9. As a user I can choose different templates for every to-do-list. ( background, style,color)
10. As a user , I can delete or add lists with a button on the landing page.
11. As a user there's a login page to login and see all my to-do-lists.