import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users =[
        {id :1, name: 'John Doe', email: 'john.doe@example.com'},
        {id :2, name: 'Jane Smith', email: 'jane.smith@example.com'}
    ]

    findAll(){
        return this.users;
    }

    findOne(id: number){
        return this.users.find(user => user.id === id);
    }

    create (user:{id: number; name: string; email: string}){
        this.users.push(user);
        return user;
    }

    
}
