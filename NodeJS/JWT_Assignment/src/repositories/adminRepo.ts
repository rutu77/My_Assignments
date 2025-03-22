import { ConnectionPool, IResult } from "mssql";
import { poolPromise, sql } from "../config/database";
import { Book } from "../models/bookModel";

class AdminRepository {
  async addBook(title: string, author: string, price: number) {
    const pool = await poolPromise;
    return pool.request()
      .input("title", sql.VarChar, title)
      .input("author", sql.VarChar, author)
      .input("price", sql.Numeric, price)
      .query(
        "INSERT INTO book_tbl_11 (title,author,price) VALUES(@title,@author,@price)"
      );
  }


  async updateBook(book: Book) {
    const pool = await poolPromise;
    return pool.request()
      .input("title", sql.VarChar, book.title)
      .input("author", sql.VarChar, book.author)
      .input("price", sql.Numeric, book.price)
      .query(
        `UPDATE book_tbl_11 SET title=@title, author=@author, price=@price WHERE id=${book.id}`
      );
  }


  async deleteBook(id: number) {
    const pool = await poolPromise;
    return pool.request()
      .query(`DELETE FROM book_tbl WHERE id=${id}`);
  }
}

export { AdminRepository };
