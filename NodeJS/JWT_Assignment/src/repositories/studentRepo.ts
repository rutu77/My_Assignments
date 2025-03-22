import { ConnectionPool } from "mssql";
import { poolPromise, sql } from "../config/database";

class studentRepo {
  async searchBook(title: string) {
    const pool = await poolPromise
    const result = await pool.request()
      .input("title", sql.VarChar, title)
      .query(`SELECT * FROM book_tbl_11 WHERE title = @title`);
    return result.recordset;
  }

  async viewBook() {
    const pool = await poolPromise
    const result = await pool.request().query(`SELECT * FROM book_tbl_11`);
    return result.recordset;
  }

  async borrowBook(studentId: number, bookId: number) {
    const pool = await poolPromise
    return pool.request()
      .input("student_id", sql.Int, studentId)
      .input("book_id", sql.Int, bookId)
      .query(`INSERT INTO borrowed_books_tbl_11 (student_id, book_id, borrow_date) VALUES (@student_id, @book_id, GETDATE());`);
  }

  async returnBook(student_id: number, book_id: number) {
    const pool = await poolPromise
    return pool.request()
      .input("student_id", sql.Int, student_id)
      .input("book_id", sql.Int, book_id)
      .query(`DELETE FROM borrowed_books_tbl_11 WHERE student_id = @student_id AND book_id = @book_id;`);
  }
}

export { studentRepo };
