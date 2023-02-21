import db from '../services/db';
import { Request, Response, NextFunction} from 'express';

interface Post{
    id: Number;
    title: String;
    author: String;
    content: String;
}

const getPosts = async (req: Request, res: Response, next: NextFunction) => {
    db.query("SELECT * FROM test2", function(err, data, fields){
    res.status(200).json({
        message: data
    });
});
}


const getPost = async(req: Request, res:Response, next:NextFunction) => {
    let id:string = req.params.id;
    db.query("SELECT FROM test2 WHERE id = ?",id, function(err, data, fields){
    res.status(200).json({
        message: data
    });

});
}


const updatePost = async(req: Request, res: Response, next:NextFunction) => {
    let id: string = req.params.id;
    let title: string = req.body.title ?? null;
    let author: string = req.body.author ?? null;
    let content: string = req.body.content ?? null;
    db.query("UPDATE test2 SET status 'completed' WHERE id=?", id, function (err, data, fields){
    res.status(200).json({
        message: data
    });
});
}


const deletePost = async(req: Request, res: Response, next: NextFunction) => {
    let id: string = req.params.id;
    db.query("DELETE FROM test2 WHERE id=?", id, function (err, data, fields){
        res.status(200).json({
            message: "Deleted Successfully"
        });
    });
    }

const createPost = async(req: Request, res: Response, next: NextFunction) => {

    let title: string = req.body.title;
    let author: string = req.body.author;
    let content: string = req.body.content;
    const values = [title,author,content];
    db.query("INSERT INTO test2 (title, author, content) VALUES (?)",[values], 
        
        function (err, data, fields){
            res.status(200).json({
                message:"Post created successfully"
            });
        });
    }
    

export default {getPosts, getPost, updatePost, deletePost, createPost}