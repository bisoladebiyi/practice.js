import React, { useEffect, useState } from 'react'

interface Props {
    size: 'small' | 'big' | 'large';
    outline?: 'true' | 'false';
    noTransparentBg?: 'true' | 'false'
    children: string;
    className?: string;
}

const Button = ({size, outline, children, noTransparentBg, className}: Props) => {
    const [outlineStyle, setOutlineStyle] = useState("")
    const [sizeStyle, setSizeStyle] = useState("")
    useEffect(()=> {
    if(outline === 'true'){
        setOutlineStyle(" bg-transparent border border-purp text-purp  hover:bg-purp hover:text-white")
    }else if(noTransparentBg){
        setOutlineStyle("bg-purp border border-purp text-white  hover:bg-light-purp")    }
    else{
        setOutlineStyle("bg-purp border border-purp text-white  hover:bg-transparent hover:text-purp")
    }
    if(size === 'big'){
        setSizeStyle("px-12 py-3 text-base")
    }else if(size === 'large'){
        setSizeStyle("w-9/12 px-12 py-3 text-base")
    }else{
        setSizeStyle("px-6 py-2")
    }
    }, [outline, size, noTransparentBg])
  

  return (
    <button className={`font-semibold text-sm rounded-sm  transition-colors ${outlineStyle} ${sizeStyle} ${className}`}>{children}</button>
  )
}

export default Button