import THEME_BUTTON_NAME from './const/themeButtonConst';

const themesList = {
    dayTheme : {
        buttonName: THEME_BUTTON_NAME.BUTTON_TO_NIGHT,
        backgroundDivMain: '#fff',

        background: '#dcdce0',
        color: 'black',

        backgroundLiSource: '#6579ab',
        backgroundLiMutable: '#65ab74',
        backgroundLiUnmutable: '#ebac4d',

        borderUlSource: '#6579ab',
        borderUlMutable: '#65ab74',
        borderUlUnmutable: '#ebac4d',
    },
    nightTheme : {
        buttonName: THEME_BUTTON_NAME.BUTTON_TO_DAY,
        backgroundDivMain: '#c0bfc7',

        background: '#575759',
        color: 'white',

        backgroundLiSource: '#545252',
        backgroundLiMutable: '#7f7f7d',
        backgroundLiUnmutable: '#747882',

        borderUlSource: '#8f8e91',
        borderUlMutable: '#8f8e91',
        borderUlUnmutable: '#8f8e91',
    }
}

export default themesList