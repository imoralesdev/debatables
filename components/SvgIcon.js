import React from 'react';

const SvgIcon = ({
    elements = [], // Default value for elements
    viewBox = "0 0 83.21 81.07", // Default value for viewBox
    style = { enableBackground: "new 0 0 83.21 81.07" }, // Default value for style
}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox} style={style}>
            {elements.map((element, index) => {
                const { type, props } = element;

                // Render the correct SVG element dynamically
                const Element = type;
                return <Element key={index} {...props} />;
            })}
        </svg>
    );
};

export default SvgIcon;