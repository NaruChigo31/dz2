function createElem(tag, properties = [], styles = [], parentElem){

    let elem = document.createElement(tag);

    parentElemPosition = document.querySelector(parentElem);
    document.body.parentElemPosition.append(elem);
     
    for (let propertie of properties) {

        if(propertie[0] === "innerHTML") {
            elem.innerHTML = propertie[1];
        }

        if(propertie[0] === "type") {
            elem.type = propertie[1];
        }

        if(propertie[0] === "placeholder") {
            elem.placeholder = propertie[1];
        }
    };
    
    // for (let styleType of styles) {
    //     elem.style.styleType[0] = styleType[1]
    // };
    // чет не работает

    for (let styleType of styles){

        if (styleType[0] === "color"){
            elem.style.color = styleType[1]
        }

        if (styleType[0] === "backgroundColor"){
            elem.style.backgroundColor = styleType[1]
        }

        if (styleType[0] === "width"){
            elem.style.width = styleType[1]
        }

        if (styleType[0] === "height"){
            elem.style.height = styleType[1]
        }
        if (styleType[0] === "fontSize"){
            elem.style.fontSize = styleType[1]
        }
    }
}


createElem("input", [["innerNTML", "Lorem ipsum"],["placeholder","gde seichas"]], [["fontSize", "18px"],["color","red"]], ".coolDiv")

// оно не работает