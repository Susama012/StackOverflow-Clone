import React from "react";

const Avatar = ({ children, bagroundColor, px, py, color, borderRadius, fontSize, cursor }) => {
    const style = {
      bagroundColor,
      padding : `${py} ${px}`,
      color : color || 'black',
      borderRadius,
      fontSize,
      textAlign : "center",
      cursor : cursor || null
    }
    return(
        <div style={style}>
            { children }
        </div>
    )
}

export default Avatar