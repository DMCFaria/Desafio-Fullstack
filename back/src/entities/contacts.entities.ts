import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";

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
}
export {Contacts}