class Spaceship{
  constructor(name, crew, phasers, shields){
    this.name = name
    this.crew = crew
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = "disengaged"
    this.phasersCharge = "uncharged"
    this.docked = crew.length === 0 ? true : this.assignShipToCrew()
  }

  assignShipToCrew(){
    this.crew.forEach((spaceman) =>{
      spaceman.currentShip = this
    })
    return false
  }

}
