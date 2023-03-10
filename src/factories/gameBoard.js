import Ship from "./ship";

class Gameboard {

    constructor(board) {
        this.board = board || []

        if (!this.board.length) this.setBoard()
    }

    setBoard() {
        for (let i = 0; i < 100; i++) {
            this.board.push({containsShip: false, isHit: false});
        }
    }

    receiveAttack(location) {
        this.board[location].isHit = true 
    }

    checkHit(location) {
        return this.board[location].containsShip
    }

    shipCoordinates(ship, location, axis) {

        // method to check if place on board is free

        const shipLocation = []

        for(let i = 0; i < ship.length; i++) {
            if(axis === "x") {
                shipLocation.push(location + i) 
            } else shipLocation.push(location + i * 10)
        } 
        return shipLocation
    }

    placeShipTest(ship, location) {
        if (ship.isVertical) {
            for (let i = 0; i < ship.length; i++) {
                this.board[location + i * 10].ship = ship
            }
        } else {
            for (let i = 0; i < ship.length; i++) {
                this.board[location + i].ship = ship
            }
        } 
        return this.board
    }
           
}

export default Gameboard