// ///////////////////////////////////
// //// Make dynamic pages in node js 


////////////////////////////////////////////////////////////////////////////////

const express = require('express')
const app = express()

const port = process.env.PORT || 5000


const path = require ("path")
const publicDirectory =  path.join(__dirname , '../public')
app.use (express.static (publicDirectory))



/////////////////////////////////////////////////////////////////////////////////


app.set('view engine', 'hbs');

  const viewsDirectory = path.join (__dirname , "../hbsFolders/views" )
  app.set( "views" , viewsDirectory)

  //////////////////////////////////////////////////////////////////

  var hbs = require ('hbs')

  const partialsPath = path.join (__dirname , "../hbsFolders/partials")

  hbs.registerPartials(partialsPath)

  ///////////////////////////////////////////////////////////////////





app.get('/' , (req , res) => {                                  
        res.render('index' , {     
            title : "Information About Each Stage",  
            name  : "Name" ,                               
            age   : "Age" ,        
            city  : "City" ,
            lectures : "Lectures",
            average : "Average" ,
            topStudents : "Top Students", 
            TeachingName : "Teaching Name",  
            img1  : "images/pic118.webp"                    
        })          
    })                                                      
     
   
                                      

app.get('/firstStage' , (req , res) => {      
    res.render('firstStage' , {                       
        title : "First Stage Data", 
        id    : "Id",                             
        name : "Name",
        age  : " Age",                                 
        city : "City",       
        lecture1 : "C++",    
        lecture2 : "Design",  
        lecture3 : "Architecture",                         
        average : "Average", 
        teaching : "Teaching Staff",
        TeachingName : "Teaching Name",  
        lectureName : "The Lecture Being Taught",
        lectureName1 : "C++",
        lectureName2 :  "Design",
        lectureName3 :  "Architecture",
        stud    :  "Students Who Will Not Take The Final Exam",
        img1 : "../images/pic101.webp",
        img2 : "../images/pic100.webp",
        img3 : "../images/pic103.webp",
       
              
           
                               
                 
                    
    })                          
})

      
app.get('/secStage' , (req , res) => {
    res.render('secStage' , {
        title : "Second Stage Data", 
        id    : "Id",  
        name : "Name",
        age  : " Age",
        city : "City",
        lecture1 : "Java",
        lecture2 : "Numerical Analysis",
        lecture3 : "Computational Theory",
        average : "Average",
        teaching : "Teaching Staff",
        TeachingName : "Teaching Name",  
        lectureName : "The Lecture Being Taught",
        lectureName1 : "Java",
        lectureName2 :  "Numerical Analysis",
        lectureName3 :  "Computational Theory",
        stud    :  "Students Who Will Not Take The Final Exam",
        img1 : "../images/pic104.jpg",
        img2 : "../images/pic106.jpeg",
        img3 : "../images/pic105.jpeg"   
     
                    
    })
})  
   
app.get('/thirdStage' , (req , res) => {
    res.render('thirdStage' , {
        title : "Third Stage Data", 
        id    :  "Id",
        name  : "Name",
        age   : " Age",
        city : "City",
        lecture1 : "Compiler",
        lecture2 : "Artificial Intelligence",
        lecture3 : "Graphic",
        average : "Average",
        teaching : "Teaching Staff",
        TeachingName : "Teaching Name",  
        lectureName : "The Lecture Being Taught",
        lectureName1 : "Compiler",
        lectureName2 :  "Artificial Intelligence",
        lectureName3 :  "Graphic",
        stud    :  "Students Who Will Not Take The Final Exam" ,
        img1 : "../images/pic115.avif",
        img2 : "../images/pic108.jpeg",
        img3 : "../images/pic116.webp"   
     
                                
    })  
})               
  


             
app.get('/fourthStage' , (req , res) => {
    res.render('fourthStage' , {          
        title : "Fourth Stage Data", 
        id    :  "Id",         
        name : "Name",  
        age  : " Age",        
        city : "City",          
        lecture1 : "Networks", 
        lecture2 : "Operating Systems",
        lecture3 : "Applications",
        average : "Average",
        teaching : "Teaching Staff",
        TeachingName : "Teaching Name",  
        lectureName : "The Lecture Being Taught",
        lectureName1 : "Networks",
        lectureName2 :  "Operating Systems",
        lectureName3 :  "Applications",
        stud    :  "Students Who Will Not Take The Final Exam",
        img1 : "../images/pic111.jpeg",
        img2 : "../images/pic112.avif",
        img3 : "../images/pic117.webp"   
           
                    
    })     
})            


app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})

////////////////////////////////////////////////////////////////////////////////
