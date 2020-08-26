import React from "react";

const Link = ({href, content, cls}) => {
    return (
        <a href={href}
           className={cls}
        >
            {content}
        </a>
    )
};

export default Link;
