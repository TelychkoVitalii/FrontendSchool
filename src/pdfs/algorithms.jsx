import * as jsPDF from 'jspdf';

export const onAlgorithmsPDF = (courseName) => {
    const doc = new jsPDF();
    doc.setFontSize(30);
    doc.text(`${courseName}`, 80, 15);
    doc.setFontSize(20);
    doc.text('Program Course', 77, 30);
    doc.setFontSize(15);
    doc.text('Understanding algorithm conception', 20, 45);
    doc.text('Algorithm Computational Complexity', 20, 55);
    doc.text('Sorting Algorithms', 20, 65);
    doc.text('Crypto Algorithms', 20, 75);
    doc.text('Game Theory Algorithms', 20, 85);
    doc.text('Combinatorics', 20, 95);
    doc.text('Random Algoritms', 20, 105);
    doc.text('Math Algorithms', 20, 115);
    doc.text('Stable Marriage Problem', 20, 125);
    doc.text('Stable Roommates Problem', 20, 135);
    doc.text('Data Structures', 20, 145);
    doc.text('How many lessons per week - 2 times per week', 45, 170);
    doc.text('Duration of one lesson - 2.5 hours', 45, 180);
    doc.text('How will the classes take place - individually', 45, 190);
    doc.text('In what mode does the course take place - online', 45, 200);
    doc.text('Course Price - 300$ (7 800 UAH)   ', 45, 210);
    doc.save(`${courseName}CourseProgram.pdf`)
};