import React from 'react';
import { translate } from "react-i18next";
import '../../styles/Materials.css';

function Materials(props) {
    const { t } = props;
    return (
        <div className='materials'>
            <div className='bgcMaterials' />
            <div className='publicBgc materialsMainBlock'>
                <h2 className='tl'>{t('materialsDocs')}</h2>
                <div className='docsLinks'>
                    <h4 className='hc'><a href="https://www.w3.org/standards/webdesign/htmlcss.html" target='_blank' rel="noopener noreferrer">HTML/CSS</a></h4>
                    <h4><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_Resources" target='_blank' rel="noopener noreferrer">Javascript</a></h4>
                    <h4><a href="https://reactjs.org/" target='_blank' rel="noopener noreferrer">React</a></h4>
                    <h4><a href="https://redux.js.org/" target='_blank' rel="noopener noreferrer">Redux</a></h4>
                    <h4><a href="https://angular.io/" target='_blank' rel="noopener noreferrer">Angular</a></h4>
                </div>
                <h2 className='ytChannels'>{t('materialsChannels')}</h2>
                <div className='ytLinks'>
                    <h4><a href="https://www.youtube.com/user/flashbuilding/playlists" target='_blank' rel="noopener noreferrer">Adam Khoury (HTML/CSS)</a></h4>
                    <h4><a href="https://www.youtube.com/watch?v=yQaAGmHNn9s&list=PL46F0A159EC02DF82" target='_blank' rel="noopener noreferrer">Beginner Javascript Tutorial</a></h4>
                    <h4><a href="https://www.youtube.com/watch?v=_MAD4Oly9yg&t=1670s" target='_blank' rel="noopener noreferrer">Building React From Scratch</a></h4>
                    <h4><a href="https://www.youtube.com/watch?v=93p3LxR9xfM" target='_blank' rel="noopener noreferrer">Redux Crash Course</a></h4>
                </div>
                <h2 className='tl'>{t('materialsBooks')}</h2>
                <div className='booksLinks'>
                    <h4><a href="http://www.itp.uzh.ch/~suzanne/ebooks/The%20Web%20Book-A4-HM.pdf" target='_blank' rel="noopener noreferrer">The Web Book</a></h4>
                    <h4><a href="http://sd.blackball.lv/library/JavaScript_Patterns_%282010%29.pdf" target='_blank' rel="noopener noreferrer">Javascript Patterns</a></h4>
                    <h4><a href="http://www.stilson.net/documentation/javascript.pdf" target='_blank' rel="noopener noreferrer">Javascript The Definite Guide</a></h4>
                    <h4><a href="https://www.ng-book.com/2/" target='_blank' rel="noopener noreferrer">Angular Book</a></h4>
                </div>
            </div>
        </div>
    );
}

export default translate()(Materials);