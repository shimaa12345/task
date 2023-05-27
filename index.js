import express from "express";
const app = express();

let students = [
    {
    
        name: "shimaa",
    
    },
    {
        
        name: "aya",
        
    },
    {
        
        name: "asmaa",
        
    },
    {
       
        name: "shebl",
        
    }
];
const studentsFunction = (req, res) => {
    let output = "<ul>";
   for (let i=0; i< students.length;i++) {
        const student = students[i];
        output += '<li>' + student.name +'</li>';
    };
    output += "</ul>";
    res.send(output);
};
app.get("/students", studentsFunction);
app.listen(8080);