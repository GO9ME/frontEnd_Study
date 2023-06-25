show databases; #데이타 보기
use study; --한줄 주석
use mydb;  # 데이터베이스 사용
CREATE TABLE employees (
    emp_no      INT             NOT NULL,
    birth_date  DATE            NOT NULL,
    first_name  VARCHAR(14)     NOT NULL,
    last_name   VARCHAR(16)     NOT NULL,
    gender      ENUM ('M','F')  NOT NULL,    
    hire_date   DATE            NOT NULL,
    PRIMARY KEY (emp_no)
);

CREATE TABLE employees (
    emp_no      INT             NOT NULL  PRIMARY KEY  AUTO_INCREMENT,
    birth_date  DATE            NOT NULL,
    first_name  VARCHAR(14)     NOT NULL,
    last_name   VARCHAR(16)     NOT NULL,
    gender      ENUM ('M','F')  NOT NULL,    
    hire_date   DATE            NOT NULL 
);


INSERT INTO employees 
VALUES (1, '1998-12-12', 'JONE', 'DOE', 'M', '2023-06-17');

insert into employees
values (10020,'1952-12-24','Mayuko','Warwick','M','1991-01-26'),
(10021,'1960-02-20','Ramzi','Erde','M','1988-02-10'),
(10022,'1952-07-08','Shahaf','Famili','M','1995-08-22'),
(10023,'1953-09-29','Bojan','Montemayor','F','1989-12-17'),
(10024,'1958-09-05','Suzette','Pettey','F','1997-05-19'),
(10025,'1958-10-31','Prasadram','Heyers','M','1987-08-17'),
(10026,'1953-04-03','Yongqiao','Berztiss','M','1995-03-20'),
(10027,'1962-07-10','Divier','Reistad','F','1989-07-07'),
(10028,'1963-11-26','Domenick','Tempesti','M','1991-10-22'),
(10029,'1956-12-13','Otmar','Herbst','M','1985-11-20'),
(10030,'1958-07-14','Elvis','Demeyer','M','1994-02-17'),
(10031,'1959-01-27','Karsten','Joslin','M','1991-09-01'),
(10032,'1960-08-09','Jeong','Reistad','F','1990-06-20'),
(10033,'1956-11-14','Arif','Merlo','M','1987-03-18'),
(10034,'1962-12-29','Bader','Swan','M','1988-09-21'),
(10035,'1953-02-08','Alain','Chappelet','M','1988-09-05'),
(10036,'1959-08-10','Adamantios','Portugali','M','1992-01-03'),
(10037,'1963-07-22','Pradeep','Makrucki','M','1990-12-05'),
(10038,'1960-07-20','Huan','Lortz','M','1989-09-20'),
(10039,'1959-10-01','Alejandro','Brender','M','1988-01-19'),
(10040,'1959-09-13','Weiyi','Meriste','F','1993-02-14'),
(10041,'1959-08-27','Uri','Lenart','F','1989-11-12'),
(10042,'1956-02-26','Magy','Stamatiou','F','1993-03-21'),
(10043,'1960-09-19','Yishay','Tzvieli','M','1990-10-20'),
(10044,'1961-09-21','Mingsen','Casley','F','1994-05-21'),
(10045,'1957-08-14','Moss','Shanbhogue','M','1989-09-02'),
(10046,'1960-07-23','Lucien','Rosenbaum','M','1992-06-20'),
(10047,'1952-06-29','Zvonko','Nyanchama','M','1989-03-31');


SELECT * FROM employees;
SELECT first_name , birth_date FROM  employees;

SELECT * 
FROM  employees
WHERE gender='F';

SELECT * FROM  employees
WHERE first_name = 'Mayuko';

SELECT * FROM  employees
WHERE first_name like 'Mayuko';

SELECT * FROM  employees
WHERE first_name like '%M%';

SELECT * FROM  employees
WHERE first_name like '_o%';

SELECT * FROM  employees
WHERE  hire_date >= '1990-01-01';

SELECT * FROM  employees
WHERE  emp_no in ( 10032, 10042, 10047);

SELECT * FROM  employees
WHERE  emp_no = 10032 or emp_no = 10042;

SELECT * FROM  employees
WHERE  emp_no > 10032 and emp_no < 10042;

SELECT * FROM  employees
order by birth_date asc;

SELECT * FROM  employees
order by birth_date desc;

SELECT * FROM  employees
WHERE  emp_no > 10032 and emp_no < 10042
order by birth_date asc;

SELECT count(*) FROM  employees
WHERE  emp_no > 10032 and emp_no < 10042
order by birth_date asc;

SELECT count(birth_date) as cnt FROM  employees
WHERE  emp_no > 10032 and emp_no < 10042
order by birth_date asc;


UPDATE  employees set first_name = 'hello' 
WHERE emp_no = 1;

SELECT * FROM  employees
WHERE emp_no = 1;

DELETE FROM employees
WHERE emp_no = 1; 
