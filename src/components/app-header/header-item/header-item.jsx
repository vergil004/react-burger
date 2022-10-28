import React from "react";
import headerItemStyles from './header-item.module.css'

function HeaderItem(props){
    const itemClass = props.active ? headerItemStyles.headerItemActive : headerItemStyles.headerItem;

    return(
        <div className={`${itemClass} text text_type_main-default pt-4 pr-5 pb-4 pl-5`}>
            {props.children}
        </div>
    )
}

HeaderItem.defaultProps = {
    active: false
}


export default HeaderItem