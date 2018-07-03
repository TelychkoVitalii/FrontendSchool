import * as jsPDF from 'jspdf';

export const onJavascriptPDF = (courseName) => {
    const doc = new jsPDF();
    doc.setFontSize(30);
    doc.text(`${courseName}`, 77, 15);
    doc.setFontSize(20);
    doc.text('Program Course', 77, 30);
    doc.setFontSize(15);
    doc.text('Intro to Javascript Concepts and Git', 20, 45);
    doc.text('How to connect the language to HTML page', 20, 55);
    doc.text('Comparison, conditional and logical operators', 20, 65);
    doc.text('Loops and Functions', 20, 75);
    doc.text('Arrays and Objects', 20, 85);
    doc.text('OOP in Javascript', 20, 95);
    doc.text('Call Context and Closure', 20, 105);
    doc.text('Events and HTTP', 20, 115);
    doc.text('Ways of storing data in the browser', 20, 125);
    doc.text('ES6 / ES7', 20, 135);
    doc.text('Design Patterns and antiPatterns', 20, 145);
    doc.text('How to work with NPM and Webpack', 20, 155);
    doc.text('Intro to Typescript and SPA Concept', 20, 165);
    doc.text('How many lessons per week - 2 times per week', 45, 180);
    doc.text('Duration of one lesson - 2.5 hours', 45, 190);
    doc.text('How will the classes take place - individually', 45, 200);
    doc.text('In what mode does the course take place - online', 45, 210);
    doc.text('Course Price - 1200$ (31 200 UAH)', 45, 220);
    doc.save(`${courseName}CourseProgram.pdf`);
};