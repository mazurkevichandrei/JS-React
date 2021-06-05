import React from 'react'
// import PropTypes from 'prop-types'

const styles = {
    li: {
        padding: '5px',
        margin: '5px 0',
        background: 'khaki',
        borderRadius: '3px'
    }
}

function ListItem (props) {
    return(
        <li style={styles.li}>{props.data.name}</li>
    )
}

export default ListItem