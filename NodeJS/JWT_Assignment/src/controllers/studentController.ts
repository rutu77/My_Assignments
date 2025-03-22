import { error } from "console";
import studentService from "../services/studentService";
import { Request, Response } from "express";
class StudentController {
  async searchBook(req: Request, res: Response) {
    try {
      const { title } = req.body;
      const book = await studentService.searchBook(title);
      if(book){res.status(200).json({message: "success",data: book});}
    } catch (error) {
      res.status(500).json({ error});
  }
}

  async viewBook(req: Request, res: Response) {
    try {
      const book = await studentService.viewBook();
      if(book){res.status(200).json({ message: "success", data: book});}
    } catch (error) {
      res.status(500).json({ error});
  }
}

  async borrowBook(req: Request, res: Response) {
    try {
      const { student_id, book_id } = req.body;
      const book = await studentService.borrowBook(+student_id, +book_id);
      if(book){res.status(200).json({message: "success",data: book});}
    } catch (error) {
      res.status(500).json({ error});
  }
}

  async returnBook(req: Request, res: Response) {
    try {
      const { student_id, book_id } = req.body;
      const book = await studentService.returnBook(+student_id, +book_id);
      if(book){
      res.status(200).json({message: "success",data: book});}
    } catch (error) {
      res.status(500).json({ error});
  }
}
}

export default new StudentController();
