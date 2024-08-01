'use client'
import { useEffect, useState } from 'react';
import {useTheme} from 'next-themes';

export default function ThemeSwitcher() {
    const [mount, setMount] = useState(false)
    const {theme, setTheme} = useTheme();
    useEffect(()=>{
    setMount(true);
    },[]);

    if(!mount){
        return null;
    }
  return (
    <div>
        The current theme is: {theme}
        <button onClick={()=> setTheme('light')}>Light Mode</button>
        <button onClick={()=> setTheme('dark')}>Dark Mode</button>
        </div>
  )
}
