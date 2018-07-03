import * as jsPDF from 'jspdf';

export const onAngularPDF = (courseName) => {
    const doc = new jsPDF();
    doc.setFontSize(30);
    doc.text(`${courseName}`, 85, 15);
    doc.setFontSize(20);
    doc.text('Program Course', 77, 30);
    doc.setFontSize(15);
    doc.text('Advantages of Angular CLI', 20, 45);
    doc.text('Bootstrapping & Ng Modules', 20, 55);
    doc.text('Intro to Modules, Components and Services', 20, 65);
    doc.text('Displaying Data and Template Syntax', 20, 75);
    doc.text('Component Interaction', 20, 85);
    doc.text('Lifecycle Hooks', 20, 95);
    doc.text('Dependency Injection', 20, 105);
    doc.text('Attribute and Structural Directives', 20, 115);
    doc.text('Pipes and Animations', 20, 125);
    doc.text('Angular Forms and Validation', 20, 135);
    doc.text('Routing & Navigation', 20, 145);
    doc.text('HTTP Client', 20, 155);
    doc.text('Angular Component Styles', 20, 165);
    doc.text('How many lessons per week - 2 times per week', 45, 180);
    doc.text('Duration of one lesson - 2.5 hours', 45, 190);
    doc.text('How will the classes take place - individually', 45, 200);
    doc.text('In what mode does the course take place - online', 45, 210);
    doc.text('Course Price - 400$ (10 400 UAH)', 45, 220);
    doc.save(`${courseName}CourseProgram.pdf`);
};