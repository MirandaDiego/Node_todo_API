import { Model, DataTypes} from 'sequelize';
import { sequelize } from '../instances/pg';
import { BIGINT } from 'sequelize';


export interface TodoInstance extends Model{
    id: number;
    descricao: string;
    data: Date;
    done: boolean;
    id_usuario:bigint;
}

export interface UserInstance extends Model{
    id:number;
    nome: string;
    idade: number
}

export const Todo = sequelize.define<TodoInstance>('Todo', {
    id:{
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER

    },
    descricao: {
        type: DataTypes.STRING
    },
    data: {
        type: DataTypes.DATE 
    },
    done: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    id_usuario: {
        type: DataTypes.BIGINT
    }
}, {
    tableName: 'todo',
    timestamps: false
});
export const User = sequelize.define<UserInstance>('User',{
    id:{
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    nome: {
        type: DataTypes.STRING
    },
    idade: {
        type: DataTypes.INTEGER
    }
},{
    tableName: 'usuario',
    timestamps:false
})

