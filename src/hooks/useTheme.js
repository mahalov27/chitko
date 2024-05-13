import { useLayoutEffect, useState } from "react"


export const useTheme = () => {
    const isDarkSystemTheme =  window?.matchMedia('(prefers-color-scheme: dark').matches
    const theme = isDarkSystemTheme ? 'White' : '';
    const [newTheme, setNewTheme] = useState(theme);

    useLayoutEffect(() => {
        const linkIcon32 = document.querySelector("#icon32")
        const linkIcon16 = document.querySelector("#icon16")

        console.log("ok")
        
        if(linkIcon32 && linkIcon16){
          linkIcon32.href = `favicons/favicon${newTheme}-32x32.png`
          linkIcon16.href = `favicons/favicon${newTheme}-16x16.png`
        }

    },[newTheme]);

    return {}
}