import { ConnectionPool } from "mssql";
import { poolPromise, sql } from "../config/database";

class UserRepo {

  async createUser(name: string,email: string,password: string,role: string){
    const pool = await poolPromise
    return pool
      .request()
      .input("name", sql.VarChar, name)
      .input("email", sql.VarChar, email)
      .input("password", sql.VarChar, password)
      .input("role", sql.VarChar, role)
      .query(
        "INSERT INTO user_tbl_11 (name, email, password,role) VALUES (@name, @email,@password,@role)"
      );
  }

  async getUserByEmail(email: string) {
    const pool = await poolPromise
      return pool.request()
      .input("email", sql.VarChar, email)
      .query("SELECT * FROM user_tbl_11 WHERE email=@email");
  }
}
export default new UserRepo();
