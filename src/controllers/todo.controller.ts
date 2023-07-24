import { Request, Response } from 'express';
import { Sequelize } from 'sequelize';
import { Todo, User } from '../models/Todo';

export const users = async(req: Request, res:Response)=>{
    const list = await User.findAll();
    res.json({list})
}

export const registerUser = async(req:Request, res:Response)=>{
    if(req.body.nome){
        let newUser = await User.create({
            nome: req.body.nome,
            idade: req.body.idade
        })
        newUser.save()
        

        res.status(201).json({ item: newUser })
    }else{
        res.json({error: 'usuario não cadastrado.'})

       
    }
  

};
export const updateUser = async( req: Request, res:Response)=>{
    const id = req.params.id
    let usuario = await User.findByPk(id);
    if(usuario){
    if(req.body.nome){
        usuario.nome = req.body.nome;
    }
    if(req.body.idade){
        usuario.idade = req.body.idade;
    }
    await usuario.save()
    res.json({item: usuario}) 

}else{
    res.json({error: 'Usuario não encontrado.'})
}

};
export const deleteUser = async(req:Request, res: Response)=>{
    let id = req.params.id;
    await User.destroy({where: {id}})
    res.json({})
}

export const allTodo = async (req: Request, res:Response) => {
    const list = await Todo.findAll();
    res.json({list})
    
}
export const addTodo = async (req: Request, res:Response) => {
    if(req.body.descricao){

        let newTodo = await Todo.create({
            descricao: req.body.descricao,
            data: req.body.data,
            done: req.body.done ? true : false,
            id_usuario: req.body.id_usuario
        })

        res.status(201).json({ item: newTodo })

    }else{
    res.json({error: 'Dados não enviados. '})
    }
    
}
export const updateTodo = async (req: Request, res:Response) => {
    //tudo que vem de params é string
    const id = req.params.id;

    let todo = await Todo.findByPk(id)
    if(todo){
        if(req.body.descricao){
            todo.descricao = req.body.descricao;
        }
        if(req.body.data){
            todo.data = req.body.data
        }
        if(req.body.done){
            switch(req.body.done.toLowerCase()){
                case 'true':
                case '1':
                    todo.done = true;
                    break;
                case 'false':
                case '0':
                    todo.done = false;
                    break;
            }
        }
        
        await todo.save()
        res.json({ item: todo})

    }else{
        res.json({error: "tarefa não encontrada"})
    }
}

export const removeTodo = async (req: Request, res:Response) => {
    let id = req.params.id;

    await Todo.destroy({where: {id}})

    // forma "correta":
    
   /* let todo = await Todo.findByPk(id);
    if(todo){
        await todo?.destroy();
    }
    */

    res.json({})
    
}