class User {
    constructor(name, email, dateOfBirth) {
        this.name = name
        this.email = email
        this.birthdate = dateOfBirth
        this.city = ""
        this.street = ""
        this.number = NaN

        this.happy = null
        this.skydiving = null
        this.pocket = null

        this.image = ""
        this.hobbies = []
        this.accessLvl = 2
    }
}

function createUserInstance(name, email, birthdate) {
    return new User(name, email, birthdate)
}