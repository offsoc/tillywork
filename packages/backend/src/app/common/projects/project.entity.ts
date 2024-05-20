import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
} from "typeorm";
import { Workspace } from "../workspaces/workspace.entity";
import { ProjectUser } from "./project-users/project.user.entity";

@Entity()
export class Project {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ type: "varchar", length: 255 })
    name: string;

    @Column({ type: "bigint" })
    ownerId: number;

    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;
    @UpdateDateColumn({ type: "timestamp" })
    updatedAt: Date;

    @OneToMany(() => ProjectUser, (user) => user.project)
    users: ProjectUser[];

    @OneToMany(() => Workspace, (workspace) => workspace.project)
    workspaces: Workspace[];
}
