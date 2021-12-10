import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './theme';

const GlobalStyle = createGlobalStyle`

    ${normalize};

    @font-face {
        font-family: 'Nanum Gothic';
        src: local('Nanum Gothic'), url(fonts/NanumGothic-Regular.ttf) format('truetype');
    }

    @font-face {
        font-family: 'Kalam';
        src: local('Kalam'), url(fonts/Kalam-Regular.ttf) format('truetype');
    }

    h1 {
        font-size: 60px;
    }

    h2 {
        font-size: 45px;
    }

    h3 {
        font-size: 30px;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Nanum Gothic';
        -ms-overflow-style: none; // 스크롤바 없애기
        ::-webkit-scrollbar {
            display: none;
        }
    };
    /* // 자동완성 박스 색
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
        transition: background-color 5000s ease-in-out 0s;
        -webkit-transition: background-color 9999s ease-out;
        -webkit-text-fill-color: #fff !important;
    } */
`;

export default GlobalStyle;