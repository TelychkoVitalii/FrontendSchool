import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Rocket.css';

function Rocket() {
    return (
        <Link to='/path' className="container">
            <svg xmlns="http://www.w3.org/2000/svg">
                <g>
                    <path fill="#d9d9d9" fillRule="evenodd" stroke="#000000" strokeWidth="10" strokeLinejoin="round" id="path663" d="m17.80632,31.099018c78.857002,1.695702 278.117996,33.916607 354.430984,229.786694c-26.28598,5.088013 -90.72699,67.834015 -100.901978,102.598022c-194.174004,-99.206024 -249.289406,-256.072014 -253.529007,-332.384716z"/>
                    <path fill="#bfbfbf" fillRule="evenodd" stroke="#000000" strokeWidth="10" strokeLinejoin="round" id="path664" d="m163.649323,292.258728c0,0 3.390991,86.488007 3.390991,87.335999c0,0.847992 104.295013,48.332001 110.230011,50.876007l-5.087006,-67.834015c-9.326996,0.847992 -92.423996,-52.570984 -108.533997,-70.377991z"/>
                    <path fill="#bfbfbf" fillRule="evenodd" stroke="#000000" strokeWidth="10" strokeLinejoin="round" id="path665" d="m304.73349,151.352798c0,0 85.530975,3.820038 86.378693,3.840881c0.847748,0.020828 45.754395,105.451248 48.151794,111.446976l-67.688538,-6.752472c-9.098633,-33.045578 -46.892822,-88.600128 -66.841949,-108.535385z"/>
                    <path fill="#bfbfbf" fillRule="evenodd" stroke="#000000" strokeWidth="10" strokeLinejoin="round" id="path666" d="m235.316772,210.169052c0,0 14.259979,34.122604 16.66716,39.685852c2.953842,3.748337 77.589035,64.656357 83.067612,68.074173l-3.178864,-21.680725c-7.994232,-7.698639 -76.803391,-68.015976 -96.555908,-86.0793z"/>
                    <path fill="#bfbfbf" fillRule="evenodd" stroke="#000000" strokeWidth="10" strokeLinejoin="round" id="path667" d="m232.636536,209.39949l-16.768509,24.280228l118.644791,101.733917l25.753967,22.744385l17.387604,-24.545471l-109.991364,-96.240036l-35.026489,-27.973022z"/>
                    <path fill="#bfbfbf" fillRule="evenodd" stroke="#000000" strokeWidth="12.5" strokeLinejoin="round" id="path668" d="m124.644997,131.154007c-28.829796,39.003998 30.52401,87.335999 58.506004,52.570999c33.916992,-42.396011 -24.589005,-83.096008 -58.506004,-52.570999z"/>
                    <path fill="#aeffff" fillRule="evenodd" stroke="#000000" strokeWidth="10" strokeLinejoin="round" id="path669" d="m132.276001,135.393005c21.197998,-20.350006 70.376999,4.23999 48.332001,40.700989c-24.589996,31.372009 -74.617004,-8.478989 -48.332001,-40.700989z"/>
                    <path fill="#ffffff" fillOpacity="0.75" fillRule="evenodd" strokeWidth="12.5" strokeLinejoin="round" id="path670" d="m148.386002,134.501999c-6.860886,4.737549 -24.900513,19.623886 -10.175003,37.352005c12.718994,3.391998 30.524994,-35.656006 10.175003,-37.352005z"/>
                </g>
            </svg>
            <div className="trail" />
        </Link>
    )
}

export default Rocket;