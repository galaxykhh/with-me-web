import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './theme';

interface ITheme {
    theme: ThemeType,
}

const GlobalStyle = createGlobalStyle<ITheme>`

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
        font-size: 28px;
        font-weight: normal;
        letter-spacing: -1px;
        padding-bottom: 10px;
        color: ${({ theme }) => theme.colors.black};
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