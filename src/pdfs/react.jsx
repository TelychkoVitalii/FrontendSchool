import * as jsPDF from 'jspdf';

export const onReactPDF = (courseName) => {
    const doc = new jsPDF();
    doc.setFontSize(30);
    doc.text(`${courseName}`, 90, 15);
    doc.setFontSize(20);
    doc.text('Program Course', 77, 30);
    doc.setFontSize(15);
    doc.text('Introducing JSX and Components', 20, 45);
    doc.text('Understanding Props and State', 20, 55);
    doc.text('Handling Events and Lifecycle', 20, 65);
    doc.text('Lists and Forms', 20, 75);
    doc.text('Composition and Inheritance', 20, 85);
    doc.text('Static Type Checking', 20, 95);
    doc.text('Reconciliation', 20, 105);
    doc.text('React without JSX & ES6', 20, 115);
    doc.text('Understanding Context API', 20, 125);
    doc.text('Controlled & Uncontrolled Components', 20, 135);
    doc.text('Portals & Fragments', 20, 145);
    doc.text('High-Order Components', 20, 155);
    doc.text('React with other libraries', 20, 165);
    doc.text('How many lessons per week - 2 times per week', 45, 180);
    doc.text('Duration of one lesson - 2.5 hours', 45, 190);
    doc.text('How will the classes take place - individually', 45, 200);
    doc.text('In what mode does the course take place - online', 45, 210);
    doc.text('Course Price - 400$ (10 400 UAH)', 45, 220);
    doc.save(`${courseName}CourseProgram.pdf`);
};