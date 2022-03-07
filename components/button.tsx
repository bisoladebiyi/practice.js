import React, { useEffect, useState } from 'react'

interface Props {
    size: 'small' | 'big';
    outline?: 'true' | 'false';
    children: string;
    className?: string
}

const Button = ({size, outline, children, className}: Props) => {
    const [outlineStyle, setOutlineStyle] = useState("")
    const [sizeStyle, setSizeStyle] = useState("")
    useEffect(()=> {
    if(outline){
        setOutlineStyle(" bg-transparent border border-purp text-purp  hover:bg-purp hover:text-white")
    }else{
        setOutlineStyle("bg-purp border border-purp text-white  hover:bg-transparent hover:text-purp")
    }
    if(size === 'big'){
        setSizeStyle("px-12 py-3 text-base")
    }else{
        setSizeStyle("px-6 py-2")
    }
    }, [outline, size])
  

  return (
    <button className={`font-semibold text-sm rounded-sm  transition-colors ${className} ${outlineStyle} ${sizeStyle}`}>{children}</button>
  )
}

export default Button