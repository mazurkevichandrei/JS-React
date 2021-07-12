const Style = {
    tooltip: {
        cursor: 'pointer',
        position: 'fixed',
        fontSize: '15px',
        backgroundColor: 'grey',
        color: 'honeydew',
        padding: '5px',
        borderRadius: '5px',
        opacity: '.7',
        visibility: 'hidden'
    },
    section: {
        display: 'flex',
        flexDirection: 'column',
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        maxWidth: '1000px',
        width: '100%',
        margin: '0 auto',
        // border: '1px solid black',
        borderTop: '0',
        boxSizing: 'border-box',
      },
    counterData: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '10px',
        display: 'flex',
        margin: '0 auto',
        backgroundColor: '#4d4d63',
        width: '100%',
        color: '#fff',
    },
    counter: {
        color: '#f05181'
    },
    header:
    {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4d4d63',
        color: '#f5f5f7',
        // maxWidth: '1000px',
        width: '100%',
        // padding: '0 7px',
        margin: '0 auto',
        // border: '1px solid black',
        boxSizing: 'border-box',
        paddingBottom: '5px',
    },
    itemtext: {
        width: '100%'
    },
    h2: {
        margin: '5px',
        padding: '0'
    },
    h4: {
        margin: '5px',
        marginBottom: '10px',
        padding: '0'
    },
    h5: {
        margin: '0',
    },
    h1: {
        margin: '10px',
    }
}

export default Style