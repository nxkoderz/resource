import { User } from "./User";

export class UserBuilder {
    private user: User;
    constructor(){
        this.user = new User();
    }

    setId(id: number): UserBuilder {
        this.user.id = id;
        return this;
    }

    setCreatedAt(createdAt: Date){
        this.user.createdAt = createdAt;
        return this;
    }

    setUpdatedAt(updatedAt: Date){
        this.user.updatedAt = updatedAt;
        return this;
    }
    
    setName(name: string): UserBuilder {
        this.user.name = name;
        return this;
    }

    build(): User {
        return this.user;
    }
}