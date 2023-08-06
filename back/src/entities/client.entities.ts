import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from "typeorm";
import { Contacts } from "./contacts.entities";

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
    
    @CreateDateColumn()
    created_at:Date 

    @OneToMany(()=>Contacts,(contacts)=>contacts.client)
    contacts:Contacts[]
}
export {Client}