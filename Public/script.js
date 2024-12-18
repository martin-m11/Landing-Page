function scrollToElement(elementSelector, instance = 0){
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching the selector and if the requested instance exists
    if(elements.length > instance){
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({behavior: 'smooth' });
    }
    };

    const link1 = document.getElementById("about_button");
    const link2 = document.getElementById("services_button");
    const link3 = document.getElementById("pricing_button");
    
    link1.addEventListener('click', () =>{
        scrollToElement('.center_title_text');
    });
    link2.addEventListener('click', () =>{
        scrollToElement('#services_title');
    });
    link3.addEventListener('click', () =>{
        scrollToElement('#pricing_title');
    });
