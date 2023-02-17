function createElem(tag, properties = [], styles = [], parentElem){

    let elem = document.createElement(tag);

    let parentElemPosition = document.querySelector(parentElem);
    console.log(parentElem);
    parentElemPosition.append(elem);
    // document.body.append(elem);
     
    for (let propertie of properties) {
        elem[propertie[0]] = propertie[1]
    };
    
    for (let styleType of styles) {
        elem.style[styleType[0]] = styleType[1]
    }
    
}
createElem("input", [["innerHTML", "Lorem ipsum"],["placeholder","pizza"]], [["fontSize", "18px"],["color","red"]], ".coolDiv");
createElem("span",[["class","hello"]] ,[["width", "300px"], ["height","200px"]],"div")
createElem("h1", [["innerHTML", "Знатоки внимание вопрос, где Андреи?"]], [["fontSize","34px"],["border","2px green solid"], ["border-radius", "3px"]],"span")
// let b = document.createElement("h1");
// b.innerHTML = "privet";
// document.body.append(b);
// console.log(b.innerHTML)