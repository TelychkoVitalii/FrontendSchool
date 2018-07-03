import * as jsPDF from 'jspdf';

export const onReduxPDF = (courseName) => {
    const doc = new jsPDF();
    doc.setFontSize(30);
    doc.text(`${courseName}`, 85, 15);
    doc.setFontSize(20);
    doc.text('Program Course', 77, 30);
    doc.setFontSize(15);
    doc.text('Core Concepts and 3 Principles', 20, 45);
    doc.text('Actions', 20, 55);
    doc.text('Reducers', 20, 65);
    doc.text('Store', 20, 75);
    doc.text('Data Flow', 20, 85);
    doc.text('Usage with React Router', 20, 95);
    doc.text('Async Actions', 20, 105);
    doc.text('Middleware', 20, 115);
    doc.text('How many lessons per week - 2 times per week', 45, 130);
    doc.text('Duration of one lesson - 2.5 hours', 45, 140);
    doc.text('How will the classes take place - individually', 45, 150);
    doc.text('In what mode does the course take place - online', 45, 160);
    doc.text('Course Price - 300$ (7 800 UAH)', 45, 170);
    doc.save(`${courseName}CourseProgram.pdf`);
};