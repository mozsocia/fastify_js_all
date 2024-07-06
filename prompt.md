in fastify js, Below is my   block model , i want to build Crud api for Blog table , i  also want to use HTML server render like tempalate engine, give me higly scallable folder and file structure,
- do not use typescript 
- i want seperate route, controller and view (HTML)  for server rendered html 
- please different folder for API and pages, api folder will have there routes and controller folder , also pages folder will have there folders
- i want to use nunjucks for template engine
- api controller , routes names "blogApiController", "blogApiRoutes"
- page controller , roustes names "blogPageController", "blogPageRoutes"



# blog Documentation

## Model

typescript
// src/models/blogModel.ts
export interface BlogPost {
    id: string;
    title: string;
    content: string;
    author: string;
    createdAt: Date;
  }








for now use an array to store data with 3 initial data, 
- use session authentication
- use session messages
- use rate limitter
- use logger
- use other security 
