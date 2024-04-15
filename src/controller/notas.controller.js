const { connection } = require("../database");

const getMedia = async (request, response) => 
{
    try
    {
    
        let params = [request.query.student_id]
        let sql = "SELECT student_id, AVG(mark) FROM marks WHERE student_id = ?"
        let [result] = await connection.query(sql, params)
        response.send(result)
        console.log(result);
   
    }
    
    catch(err)
    {
        console.log(err);
    }

}

const getApuntadas = async (request, response) =>
{
    try
    {        
        let sql;
        if(request.query.student_id == null){
            sql = "SELECT first_name, last_name, title from marks JOIN student ON (marks.student_id = student.student_id) JOIN subjects ON (marks.subject_id = subjects.subject_id)"
        } else 
        {
            sql = "SELECT first_name, last_name, title from marks JOIN student ON (marks.student_id = student.student_id) JOIN subjects ON (marks.subject_id = subjects.subject_id) WHERE marks.student_id= " + request.query.student_id
        }
        let [result] = await connection.query(sql)
        response.send(result)
        console.log(result);
    }
    catch(error)
    {
        console.log(error);
    }
}

const getImpartidas = async (request, response) =>
{
    try
    {        
        let sql;
        if(request.query.teacher_id == null){
            sql = "SELECT first_name, last_name, title FROM teachers JOIN subject_teacher ON (teachers.teacher_id = subject_teacher.teacher_id) JOIN subjects ON (subject_teacher.subject_id = subjects.subject_id)"
        } else 
        {
            sql = "SELECT first_name, last_name, title FROM teachers JOIN subject_teacher ON (teachers.teacher_id = subject_teacher.teacher_id) JOIN subjects ON (subject_teacher.subject_id = subjects.subject_id) WHERE teachers.teacher_id=" + request.query.teacher_id;
        }
        let [result] = await connection.query(sql)
        response.send(result)
        console.log(result);
    }
    catch(error)
    {
        console.log(error);
    }
}

module.exports = {getMedia, getApuntadas, getImpartidas}