let shipName = "Royal"
let flulLevel = 100
let inventoryCount = 0
let isEngineFunctional = true
let destinationSector = "Alpha"

let crateType = "Fuel"
switch(crateType){
    case "Medical":
        inventoryCount = inventoryCount + 5
        break

    case "Fuel":
        flulLevel = flulLevel + 50
        //console.log("hello")
        break
        
    case "EngineParts":
        isEngineFunctional = true
        break
        
    case "Hazardous":
        flulLevel = flulLevel - 10
        inventoryCount = inventoryCount - 2
       // console.log("well done!")
        break
        
    default:
        console.log("Unknown item detected. Scanning failed.")
        break    

}

if(flulLevel < 20){
    console.log("Warning: Insufficient fuel for maneuvers!")
}
if(isEngineFunctional = false){
    console.log("Engine failure! Drifting into deep space.")
}