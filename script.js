function createElem(tag, properties = [], styles = [], parentElem){

    let elem = document.createElement(tag);

    parentElemPosition = document.querySelector(parentElem);
    parentElemPosition.append(elem);
     
    for (let propertie of properties) {
        elem[propertie[0]] = propertie[1]
    };
    
    for (let styleType of styles) {
        elem.style[styleType[0]] = styleType[1]
    }
    
}

createElem("input", [["innerHTML", "Lorem ipsum"],["placeholder","pizza"]], [["fontSize", "18px"],["color","red"]], ".coolDiv");

