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
        fuelLevel = fuelLevel - 10
        inventoryCount = inventoryCount - 2
       // console.log("well done!")
        break
        
    default:
        console.log("Unknown item detected. Scanning failed.")
        break    

}

if(fuelLevel > 80 && isEngineFunctional){
    console.log("Successfully dodged all asteroids!")
}else if(fuelLevel > 30 && fuelLevel < 80){
    console.log("Minor damage sustained. Fuel lost.")
    fuelLevel = fuelLevel - 15
}else{
    console.log("CRITICAL HIT: Ship grounded.")
}


let crewList = ["Alice", "Bob", "Charlie", "Diana"]
console.log(`the first name is ${crewList[0]} and the third name is ${crewList[2]}`)

if(crewList.length>3){
    console.log("Crew capacity reached.")
}

// 0000 as number?
let entercode = 1234
let isAuthorized = false
switch(entercode){
    case 1234:
        isAuthorized = false
        break
    
    case 0000:
        console.log("Emergency override")
        isAuthorized = true
        break
        
    default:
        isAuthorized = false
        break    
}

if(isAuthorized){
    console.log("Welcome, Captain.")
}else{
    console.log("ALARM: Intruder Alert!")
}
let suitType
 let planetGravity = 1.9
 if(planetGravity > 1.5){
     suitType =  "Heavy Armor"
 }else{
     suitType = "Lightweight Suit"
 }
 console.log( `Equipping ${suitType} for landing.`)
  

 let energyLost = 2
 energyLost = energyLost * 2
 energyLost = energyLost * 2
 if(energyLost > 10){
    console.log("Power core meltdown imminent!")
 }



 let missionStatus
 if(fuelLevel > 0){
    missionStatus = "Active"
 }else{
    missionStatus = "Lost in Space"
 }

 console.log(`=== STATUS REPORT: ${shipName} === `)
 console.log(` Curent fuel: ${fuelLevel}%`)
 console.log(`Cargo Held: ${inventoryCount}units`)
 console.log(`Mission Status: ${missionStatus}`)
 