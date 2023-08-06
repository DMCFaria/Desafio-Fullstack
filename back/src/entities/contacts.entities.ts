import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from "typeorm";
import { Client } from "./client.entities";

@Entity("contacts")
class Contacts {
    
    @PrimaryGeneratedColumn("uuid")
    id:string
    
    @Column()
    name:string
    
    @Column({unique:true})  
    email:string
    
    @Column({unique:true})
    number:string
    
    @CreateDateColumn()
    created_at:Date 

    @Column()
    client_id:string
    
    @ManyToOne(()=>Client)
    client:Client
}
export {Contacts}