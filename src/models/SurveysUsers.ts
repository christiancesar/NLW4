import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("surveys_users")
class SurveysUsers {
    
    @PrimaryColumn()
    readonly id: string;

    @Column()
    user_id: string;

    @Column()
    survey_id: string;


    value: number;

    @CreateDateColumn()
    create_at: Date
}

export { SurveysUsers }