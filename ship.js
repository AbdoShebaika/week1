let shipName = "Royal"
let fuelLevel = 100
let inventoryCount = 0
let isEngineFunctional = true
let destinationSector = "Alpha"

let crateType = "Fuel"
switch(crateType){
    case "Medical":
        inventoryCount = inventoryCount + 5
        break

    case "Fuel":
        fuelLevel = fuelLevel + 50
        //console.log("hello")
        break
        
    case "EngineParts":
        isEngineFunctional = true
        break
        
    case "Hazardous":
        fuelLevel = flulLevel - 10
        inventoryCount = inventoryCount - 2
       // console.log("well done!")
        break
        
    default:
        console.log("Unknown item detected. Scanning failed.")
        break    

}

if(fuelLevel > 80 && isEngineFunctional){
    console.log("Successfully dodged all asteroids!")
}else if(fuelLevel > 30 && fuelLevel > 80){
    console.log("Minor damage sustained. Fuel lost.")
    fuelLevel = fuelLevel - 15
}else{
    console.log("CRITICAL HIT: Ship grounded.")
}
