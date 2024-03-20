export default class User {

    private id: number
    private email: string
    private roles: object[]

    constructor (id:number, email: string, roles: object[]) {

        this.id = id
        this.email = email
        this.roles = roles
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRoles() {
        return this.roles
    }
}