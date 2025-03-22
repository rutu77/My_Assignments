import { IRecordSet } from "mssql";
import { AdminService } from "../services/adminService";
import { Request, Response } from "express";
import { Book } from "../models/bookModel";
const adminService = new AdminService();
class AdminController {
  async addBook(req: Request, res: Response) {
    try {
      const book = await adminService.addBook( req.body.title, req.body.author, +req.body.price);
      res.status(200).json({message: "Success",data: book});
    } catch (error) {
      res.status(500).json({ error});
  }
}
  
  async updateBook(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const book = await adminService.updateBook({ ...req.body, id: +id });
      if (book) {res.status(200).json({message: "Updated Successfully"});}
    } catch (error) {
      res.status(500).json({ error});
  }
}

  async deleteBook(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const book = await adminService.deleteBook(+id);
      if(book){res.status(200).json({message: "Deleteed Successfully",});}
      return;
    } catch (error) {
      res.status(500).json({ error});
  }
}
}

export { AdminController };
