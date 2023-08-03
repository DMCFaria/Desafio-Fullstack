import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("clients")
class Client {
    
    @PrimaryGeneratedColumn("uuid")
    id:string
    
    @Column()
    name:string
    
    @Column({unique:true})  
    email:string
    
    @Column({unique:true})
    number:string
 
}
export {Client}