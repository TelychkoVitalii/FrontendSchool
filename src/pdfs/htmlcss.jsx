import * as jsPDF from 'jspdf';

export const onHTMLCSSPDF = (courseName) => {
    const doc = new jsPDF();
    doc.setFontSize(30);
    doc.text(`${courseName}`, 77, 15);
    doc.setFontSize(20);
    doc.text('Program Course', 77, 30);
    doc.setFontSize(15);
    doc.text('Stack of development for the site', 20, 45);
    doc.text('Basic principles of web page layout', 20, 55);
    doc.text('How to work with text, colors and fonts', 20, 65);
    doc.text('Images, formats and background', 20, 75);
    doc.text('Block Layout', 20, 85);
    doc.text('Rules for semantic layout', 20, 95);
    doc.text('HTML5 new tags', 20, 105);
    doc.text('Adaptive Layout', 20, 115);
    doc.text('HTML5 Form and Inputs', 20, 125);
    doc.text('Intro to CSS', 20, 135);
    doc.text('BEM', 20, 145);
    doc.text('Intro to preprocessors - LESS, SASS, SCSS', 20, 155);
    doc.text('How many lessons per week - 2 times per week', 45, 170);
    doc.text('Duration of one lesson - 2.5 hours', 45, 180);
    doc.text('How will the classes take place - individually', 45, 190);
    doc.text('In what mode does the course take place - online', 45, 200);
    doc.text('Course Price - 300$ (7 800 UAH)', 45, 210);
    doc.save(`${courseName}CourseProgram.pdf`);
};