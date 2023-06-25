const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host:'127.0.0.1',
    user :'root',
    port : '3306',
    password : '12345',
    database: 'mydb',
    connectionLimit : 5
})

const path = require('path');
const fs = require('fs');

// http://localhost:3000/employees : 복수형 s
const getEmployees = async (req, res)=>{
    let conn; 
    try{
      conn = await pool.getConnection(); 
      const sql = 'SELECT * FROM employees;';
      //const sql = 'SELECT count(*) as cnt FROM employees;';
      let rows ;

      if( conn ){
          rows = await conn.query(sql);
          console.log(rows); // [ { cnt: 28n } ]

          if( rows ){
              // res.json(rows);
              // res.send({success: true, message : rows[0].cnt});
              res.send({success: true, message : rows});
          }else{
              res.send({success: false, message : '데이터를 찾을 수 없습니다.'});
          }        
      }else{
          
          res.send({success: false, message : 'db에 접근 불가'});
      }

    }catch(err){
        throw err; 
    }finally{
      if(conn){ conn.end(); }
    }
}

// http://localhost:3000/employees/emp_no 함수명 s제외
// app.get('/employees/:emp_no', ()=>{})
const getEmployee = async (req, res)=>{
  let conn; 
  try{
    const { emp_no } = req.params;
    console.log( emp_no );

    conn = await pool.getConnection(); 
    const sql = `SELECT * FROM  employees WHERE emp_no = ${emp_no}`; 
    let rows ;

    if( conn ){
        rows = await conn.query(sql);
        console.log(rows); //  

        if( rows.length >= 1 ){
            res.send({success: true, message : rows});
        }else{
            res.send({success: false, message : '데이터를 찾을 수 없습니다.'});
        }        
    }else{
        
        res.send({success: false, message : 'db에 접근 불가'});
    }

  }catch(err){
      throw err; 
  }finally{
    if(conn){ conn.end(); }
  }
} 
// 데이터 등록 
// primary key : unique(유일한키) = 중복 되면 안됨 
// 
const postEmployee = async (req, res)=>{
  let conn; 
  try{
    const { emp_no,
      birth_date, 
      first_name,
      last_name,
      gender,
      hire_date
    } = req.body;
    console.log( emp_no );
/*
    {
      "emp_no": 10042,
      "birth_date": "1956-02-25",
      "first_name": "Magy",
      "last_name": "Stamatiou",
      "gender": "F",
      "hire_date": "1993-03-20"
    }
*/
    conn = await pool.getConnection(); 
    const sql = `INSERT INTO employees 
                 VALUES ( ${emp_no}, 
                  '${birth_date}', 
                  '${first_name}', 
                  '${last_name}', 
                  '${gender}', 
                  '${hire_date}');`; 
    let rows ;

    if( conn ){
        rows = await conn.query(sql);
        console.log(rows); 
        //  OkPacket { affectedRows: 1, insertId: 0n, warningStatus: 0 }

        if( rows.affectedRows >= 1 ){
            res.send({success: true, message : '등록 되었습니다.'});
        }else{
            res.send({success: false, message : '데이터를 등록할 수 없습니다.'});
        }        
    }else{
        
        res.send({success: false, message : 'db에 접근 불가'});
    }

  }catch(err){
      throw err; 
  }finally{
    if(conn){ conn.end(); }
  }

} 

// emp_no 없으면 지울 수 없음 : error 
// emp_no 있으면 지움
const delEmployee = async (req, res)=>{
  let conn; 
  try{
    const { emp_no } = req.params;
    console.log( emp_no );

    conn = await pool.getConnection(); 
    const sql = `DELETE FROM employees WHERE emp_no =  ${emp_no}`; 
    let rows ;

    if( conn ){
        rows = await conn.query(sql);
        console.log(rows); 
        // OkPacket { affectedRows: 1, insertId: 0n, warningStatus: 0 }  

        if( rows.affectedRows > 0 ){
            res.send({success: true, message : '삭제하였습니다.'});
        }else{
            res.send({success: false, message : '데이터를 찾을 수 없습니다.'});
        }        
    }else{
        
        res.send({success: false, message : 'db에 접근 불가'});
    }

  }catch(err){
      throw err; 
  }finally{
    if(conn){ conn.end(); }
  }

} 

// id가 수정되지 못하는 것과 같이 
// premarykey, unique 도 수정되지 못함
const putEmployee = async (req, res)=>{
  let conn; 
  try{
    const { emp_no,  last_name,  hire_date } = req.body;
    console.log( emp_no );
 
    conn = await pool.getConnection(); 
    const sql = `UPDATE  employees 
          set last_name = '${last_name}', hire_date = '${hire_date}'
          WHERE emp_no = ${emp_no};`; 
    let rows ;

    if( conn ){
        rows = await conn.query(sql);
        console.log(rows); 
        //  OkPacket { affectedRows: 1, insertId: 0n, warningStatus: 0 }

        if( rows.affectedRows >= 1 ){
            res.send({success: true, message : '수정 되었습니다.'});
        }else{
            res.send({success: false, message : '수정할 수 없습니다.'});
        }        
    }else{
        
        res.send({success: false, message : 'db에 접근 불가'});
    }

  }catch(err){
      throw err; 
  }finally{
    if(conn){ conn.end(); }
  }

}  

process.on('uncaughtException', (err)=>{
    console.error( err );
})


module.exports = { 
  getEmployees, 
  getEmployee, 
  postEmployee, 
  delEmployee,
  putEmployee }