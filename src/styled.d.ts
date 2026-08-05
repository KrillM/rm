import 'styled-components';

declare module 'styled-components'{
    export interface DefaultTheme {
        textColor?: string;
        bgColor?: string;
        accentColor?: string;
        btnColor?: string;
        boardColor?: string;
        cardColor?: string;

        red?: string;
        black?: {
            veryDark: string;
            darker: string;
            lighter: string;
        };
        white?: {
            darker: string;
            lighter: string;
        };
    }
}