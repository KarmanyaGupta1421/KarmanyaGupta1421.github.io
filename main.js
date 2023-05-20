function change_theme(){
    let root_elem = document.querySelector(":root");
    let theme = getComputedStyle(root_elem).getPropertyValue("--theme");

    let txt_elem = document.getElementById('toggle-txt');
    // let main_bg_color = getComputedStyle(root_elem).getPropertyValue("--main-bg-color");
    // let main_color = getComputedStyle(root_elem).getPropertyValue("--main-color");
    // let h1_color = getComputedStyle(root_elem).getPropertyValue("--h1-color");
    // let h3_color = getComputedStyle(root_elem).getPropertyValue("--h3-color");
    // let td_color = getComputedStyle(root_elem).getPropertyValue("--td-color");
    // let th_color = getComputedStyle(root_elem).getPropertyValue("--th-color");
    // console.log(theme);
    // console.log(theme === "dark");

    if (theme === "dark"){
        document.getElementById('toggle').src = "images/switch-light.png";
        root_elem.style.setProperty('--theme' , "light");
        root_elem.style.setProperty('--main-bg-color' , "#FFFFFF");
        root_elem.style.setProperty('--main-color' , "#212529");
        root_elem.style.setProperty('--h1-color' , "#000000");
        root_elem.style.setProperty('--h3-color' , "#000000");
        root_elem.style.setProperty('--td-color' , "#212529");
        root_elem.style.setProperty('--th-color' , "#000000");

        root_elem.style.setProperty('--toggle-txt-color' , "#000000");
        txt_elem.classList.replace("toggle-txt-dark" , "toggle-txt-light");
        txt_elem.innerHTML = "Light";

    }else{
        document.getElementById('toggle').src = "images/switch-dark.png";
        root_elem.style.setProperty('--theme' , "dark");
        root_elem.style.setProperty('--main-bg-color' , "#212529");
        root_elem.style.setProperty('--main-color' , "#ADB5BD");
        root_elem.style.setProperty('--h1-color' , "#FFFFFF");
        root_elem.style.setProperty('--h3-color' , "#FFFFFF");
        root_elem.style.setProperty('--td-color' , "#ADB5BD");
        root_elem.style.setProperty('--th-color' , "#212529");

        root_elem.style.setProperty('--toggle-txt-color' , "#FFFFFF");
        txt_elem.classList.replace("toggle-txt-light" , "toggle-txt-dark")
        txt_elem.innerHTML = "Dark";
    }
}