import THEME_BUTTON_NAME from './const/themeButtonConst';

const themesList = {
    dayTheme : {
        buttonName: THEME_BUTTON_NAME.BUTTON_TO_NIGHT,
        backgroundDivMain: '#fff',

        background: '#b1b1ba',
        color: 'black',

        backgroundLiSource: '#6579ab',
        backgroundLiMutable: '#65ab74',
        backgroundLiUnmutable: '#ebac4d',

        borderUlSource: '#6579ab',
        borderUlMutable: '#65ab74',
        borderUlUnmutable: '#ebac4d',

        listNameFontColor: '#000',
        linkColor: '#f5f5f5',

        tableBackground: '#fff',
    },
    nightTheme : {
        buttonName: THEME_BUTTON_NAME.BUTTON_TO_DAY,
        backgroundDivMain: '#303030',

        background: 'rgb(49,49,49)',
        color: 'white',

        backgroundLiSource: '#56b6cc',
        backgroundLiMutable: '#569bcc',
        backgroundLiUnmutable: '#56ccb0',

        borderUlSource: '#8f8e91',
        borderUlMutable: '#8f8e91',
        borderUlUnmutable: '#8f8e91',

        listNameFontColor: '#fff',
        linkColor: '#f5f5f5',

        tableBackground: '#484a49',
    }
}

export default themesList