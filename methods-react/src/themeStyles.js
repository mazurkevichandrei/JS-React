import THEME_BUTTON_NAME from './const/themeButtonConst';

const themesList = {
    dayTheme : {
        buttonName: THEME_BUTTON_NAME.BUTTON_TO_NIGHT,
        backgroundDivMain: '#e1e3e5',

        background: '#b1b1ba',
        color: '#494b4d',

        backgroundLiSource: '#6579ab',
        backgroundLiMutable: '#65ab74',
        backgroundLiUnmutable: '#ebac4d',

        borderUlSource: '#6579ab',
        borderUlMutable: '#65ab74',
        borderUlUnmutable: '#ebac4d',

        listNameFontColor: '#494b4d',
        linkColor: '#f5f5f5',

        tableBackground: '#fff',
        // gradient: 'linear-gradient(180deg, rgba(250,248,248,1) 0%, rgba(233,233,233,1) 100%)',
        gradient: 'linear-gradient(180deg, rgba(49,49,49,1) 0%, rgba(13,13,13,1) 100%)',
    },
    nightTheme : {
        buttonName: THEME_BUTTON_NAME.BUTTON_TO_DAY,
        backgroundDivMain: '#444e57',

        background: 'rgb(49,49,49)',
        color: '#f0f0f0',

        // backgroundLiSource: '#56b6cc',
        // backgroundLiMutable: '#5693cc',
        // backgroundLiUnmutable: '#56cccc',

        backgroundLiSource: '#7395AE',
        backgroundLiMutable: '#ab959e',
        backgroundLiUnmutable: '#B1A296',

        borderUlSource: '#8f8e91',
        borderUlMutable: '#8f8e91',
        borderUlUnmutable: '#8f8e91',

        listNameFontColor: '#f0f0f0',
        linkColor: '#f5f5f5',

        tableBackground: '#484a49',
        gradient: 'linear-gradient(180deg, rgba(49,49,49,1) 0%, rgba(13,13,13,1) 100%)',
    }
}

export default themesList