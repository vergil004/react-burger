import React from "react";
import PropTypes from "prop-types";
import headerItemStyles from './header-item.module.css'

function HeaderItem({active, children}){
    const itemClass = active ? headerItemStyles.headerItemActive : headerItemStyles.headerItem;

    return(
        <div className={`${itemClass} text text_type_main-default pt-4 pr-5 pb-4 pl-5`}>
            {children}
        </div>
    )
}

HeaderItem.defaultProps = {
    active: false
}
HeaderItem.propTypes = {
    active : PropTypes.bool
}
export default HeaderItem