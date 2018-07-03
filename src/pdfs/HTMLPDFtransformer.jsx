import { onReactPDF } from "./react";
import { onAlgorithmsPDF } from "./algorithms";
import { onHTMLCSSPDF } from "./htmlcss";
import { onReduxPDF } from "./redux";
import { onAngularPDF } from "./angular";
import { onJavascriptPDF } from "./javascript";

export const onCreateTemplate = (courseName) => {
    switch (courseName) {
        case 'HTML/CSS':
            onHTMLCSSPDF(courseName);
            break;
        case 'Javascript':
            onJavascriptPDF(courseName);
            break;
        case 'React':
            onReactPDF(courseName);
            break;
        case 'Redux':
            onReduxPDF(courseName);
            break;
        case 'Angular':
            onAngularPDF(courseName);
            break;
        case 'Algorithms': {
            onAlgorithmsPDF(courseName);
            break;
        }
        default:
            break;
    }
};