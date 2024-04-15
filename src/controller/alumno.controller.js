const { response } = require("../app");
const { connection } = require("../database");


const getAlumno = async (request, response) => 
{
    try
    {
    
        let sql;
        if(request.query.student_id == null){
            console.log(request.query.student_id);
            sql = "SELECT * FROM student";
        } else { 
            sql = "SELECT * FROM student  WHERE student_id=" + request.query.student_id                
        }
        let [result] = await connection.query(sql)
        response.send(result)
   
    }
    
    catch(err)
    {
        console.log(err);
    }

}

const postAlumno = async (request, response) =>
{
    try
    {
        console.log(request.body);
        let sql = "INSERT INTO student (first_name, last_name, grupo_id, admitYear) VALUES ('" + request.body.first_name + "', '" +
                                                                                                request.body.last_name + "', '" +
                                                                                                request.body.grupo_id + "', '" +
                                                                                                request.body.admitYear + "')";

    let [result] = await connection.query(sql)

    if(result.insertId)
    response.send(String(result.insertId))

    else 
    response.send("-1")
    }
    catch(error)
    {
        console.log(error);
    }
    
}

const putAlumno = async (request, response) => {
    try {

        console.log(request.body);
        let params = [ request.body.first_name, 
                      request.body.last_name, 
                      request.body.grupo_id, 
                      request.body.admitYear,
                      request.body.student_id]
        
        let sql = "UPDATE student SET first_name = COALESCE(?, first_name), last_name = COALESCE(?, last_name), grupo_id = COALESCE(?, grupo_id), admitYear = COALESCE(?, admitYear) WHERE student_id = ?";

        let [result] = await connection.query(sql, params);
        response.send(result);
    } catch (error) 
    {
        console.log(error);
    }
}

const deleteAlumno = async (request,response) => 
{
    try
    {
        console.log(request.body);
        let params = [request.body.student_id]

        let sql = "DELETE FROM student WHERE student_id = ?"

        let [result] = await connection.query(sql, params);
        response.send(result);        

    }
    catch(error)
    {
        console.log(error);
    }
}
module.exports = {getAlumno, postAlumno, putAlumno, deleteAlumno}

