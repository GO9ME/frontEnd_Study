// const mariadb = require('mariadb');

// const pool = mariadb.createPool({
//     host: process.env.DB_HOST,
//     user :process.env.DB_USER,
//     port : process.env.DB_PORT,
//     password : process.env.DB_PASS,
//     database: process.env.DB_NAME,
//     connectionLimit : 5
// })

const connection = require('../model/mariadb.js');
const pool = connection();

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
    const sql = `SELECT * FROM  employees WHERE emp_no = ?`; 
    let rows ;

    if( conn ){
        rows = await conn.query(sql, [emp_no]); // 
        console.log('row : ', rows );

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

    const keys = Object.keys(req.body);
    const values = Object.values(req.body);
    console.log('keys', keys);
    console.log('values', values);
/*
    {
      "emp_no": 10042,
      "birth_date": "1956-02-25",
      "first_name": "Magy",
      "last_name": "Stamatiou",
      "gender": "F",
      "hire_date": "1993-03-20"
    }
    emp_no, birth_date, first_name, last_name, gender, hire_date
     
*/
    conn = await pool.getConnection(); 

    const checkSql = `SELECT count(*) as cnt FROM  employees WHERE emp_no = ?`;
    const sql = `INSERT INTO employees VALUES(?, ?, ?, ?, ?, ?);`; 
    //
    let rows ;
    if( conn ){
        rows = await conn.query( checkSql, [emp_no]);
        console.log( rows ); // [ { cnt: 1n } ]
        console.log( rows[0].cnt ); // 1

        if( rows[0].cnt >= 1 ){  
            res.send({success: false, message : 'data가 존재합니다.'});
        }else{
            // rows = await conn.query(sql, [emp_no,birth_date, first_name, last_name, gender, hire_date]);
            rows = await conn.query(sql, [...values]);
            
            if( rows.affectedRows >= 1 ){
                res.send({success: true, message : '등록 되었습니다.'});
            }else{
                res.send({success: false, message : '데이터를 등록할 수 없습니다.'});
            }   
        } // data 존재유무 처리
    }// conn check end

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
      if( !conn ) res.send({success: false, message : 'db에 접근 불가'});

      let rows ;
      const checkSql = `SELECT count(*) as cnt FROM  employees WHERE emp_no = ?`;
      rows = await conn.query(checkSql, [emp_no]);

      if( rows[0].cnt <= 0 ){
          res.send({success: false, message : '데이터를 찾을 수 없습니다.'});
      }

      const sql = `DELETE FROM employees WHERE emp_no = ?`; 
      rows = await conn.query(sql, [emp_no]);
      console.log(rows); 
        // OkPacket { affectedRows: 1, insertId: 0n, warningStatus: 0 }  

      if( rows.affectedRows > 0 ){
          res.send({success: true, message : '삭제하였습니다.'});
      }else{
          res.send({success: false, message : '삭제할 수 없습니다.'});
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
          set last_name = ?, hire_date = ?
          WHERE emp_no = ?;`; 
    let rows ;

    if( conn ){
        rows = await conn.query(sql, [last_name, hire_date, emp_no]);
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