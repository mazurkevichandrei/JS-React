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
    },
    nightTheme : {
        buttonName: THEME_BUTTON_NAME.BUTTON_TO_DAY,
        backgroundDivMain: '#303030',

        background: 'rgb(49,49,49)',
        color: 'white',

        backgroundLiSource: '#4d4d63',
        backgroundLiMutable: '#397aa8',
        backgroundLiUnmutable: '#64648c',

        borderUlSource: '#8f8e91',
        borderUlMutable: '#8f8e91',
        borderUlUnmutable: '#8f8e91',

        listNameFontColor: '#fff',
        linkColor: '#f5f5f5',
    }
}

export default themesList