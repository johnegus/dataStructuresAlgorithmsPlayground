--count all users who live in Chicago:

SELECT
  COUNT(*)
FROM
  users
WHERE
	users.city = 'Chicago'
;


-- find groceris and first name where users name is John

SELECT groceries.item_name, users.first_name
From
groceries
inner join users on groceries.user_id = users.id
where users.first_name = 'John'
;





/******************************************************************************\
* AppAcademy JS/Py Online Week 10 - "Solving the SQL Menagerie"
*
*** Directions *****************************************************************
*
* Phase 1: create a 'travel' database and follow the directions to pipe your
* seed file into this database.
*
* Phases 2, 3, 4 & Bonus - add your queries to this file - the directions for
* each query is listed in a separate block comment below.
*
\******************************************************************************/

-- connect to the correct database - 'travel'
\echo
\c travel
\echo

-- disable pagination
\pset pager off
\echo

---- Phase 2: Write basic SELECT statements. -----------------------------------
-- Retrieve rows from a table using SELECT ... FROM SQL statements.
--------------------------------------------------------------------------------
\echo ========= Problem 2.1 ====================================================
\echo
/*
2.1) Write a SQL query that returns the city, state, and estimated population in
     2018 from the "cities" table.
*/

-- your query here
select city, state, population_estimate_2018
from cities;

\echo ========= Problem 2.2 ====================================================
\echo
/*
2.2) Write a SQL query that returns all of the airport names contained in the
     "airports" table.
*/

-- your query here
select name
from airports;

---- Phase 3: Add WHERE clauses ------------------------------------------------
-- Select specific rows from a table using WHERE and common operators.
--------------------------------------------------------------------------------
\echo ========= Problem 3.1 ====================================================
\echo
/*
3.1) Write a SQL query that uses a WHERE clause to get the estimated population
     in 2018 of the city of San Diego.
*/

-- your query here
select population_estimate_2018 from cities
where city = 'San Diego';

\echo ========= Problem 3.2 ====================================================
\echo
/*
3.2) Write a SQL query that uses a WHERE clause to get the city, state, and
     estimated population in 2018 of cities in this list:
      Phoenix, Jacksonville, Charlotte, Nashville.
*/
select city, state, population_estimate_2018 from cities
where city IN ('Phoenix', 'Jacksonville', 'Charlotte', 'Nashville');
 -- your query here

\echo ========= Problem 3.3 ====================================================
\echo
/*
3.3) Write a SQL query that uses a WHERE clause to get the cities with an
     estimated 2018 population between 800,000 and 900,000 people. Show the
     city, state, and estimated population in 2018 columns.
*/
select city from cities
where population_estimate_2018 between 800000 and 900000;
-- your query here

\echo ========= Problem 3.4 ====================================================
\echo
/*
3.4) Write a SQL query that uses a WHERE clause to get the names of the cities
     that had an estimated population in 2018 of at least 1 million people (or
     1,000,000 people).
*/

-- your query here
select city from cities
where population_estimate_2018 >= 1000000;

\echo ========= Problem 3.5 ====================================================
\echo
/*
3.5) Write a SQL query to get the city and estimated population in 2018 in
     number of millions (i.e. without zeroes at the end: 1 million), and that
     uses a WHERE clause to return only the cities in Texas.
*/
select city, (population_estimate_2018/1000000 || ' million') as population 
from cities
where state ='Texas';
-- your query here

\echo ========= Problem 3.6 ====================================================
\echo
/*
3.6) Write a SQL query to get the city and estimated population in 2018 in
     number of millions (i.e. without zeroes at the end: 1 million), and that
     uses a WHERE clause to return only the cities in Texas. Write a SQL query
     that uses a WHERE clause to get the city, state, and estimated population
     in 2018 of cities that are NOT in the following states:
     New York, California, Texas.
*/
select city, state, population_estimate_2018 from cities
where state not in ('New York', 'California', 'Texas');
-- your query here

\echo ========= Problem 3.7 ====================================================
\echo
/*
3.7) Write a SQL query that uses a WHERE clause with the LIKE operator to get
     the city, state, and estimated population in 2018 of cities that start with
     the letter "S".
     (Note: See the PostgreSQL doc on Pattern Matching for more information.)
*/
SELECT city, state, population_estimate_2018 from cities
where city like 'S%';
-- your query here

\echo ========= Problem 3.8 ====================================================
\echo
/*
3.8) Write a SQL query that uses a WHERE clause to find the cities with either a
     land area of over 400 square miles OR a population over 2 million people
     (or 2,000,000 people). Show the city name, the land area, and the estimated
     population in 2018.
*/
select city, land_area_sq_mi_2016, population_estimate_2018 from cities
where land_area_sq_mi_2016 > 400
and population_estimate_2018 > 2000000;
-- your query here

\echo ========= Problem 3.9 ====================================================
\echo
/*
3.9) Write a SQL query that uses a WHERE clause to find the cities with either a
     land area of over 400 square miles OR a population over 2 million people
     (or 2,000,000 people) -- but not the cities that have both. Show the city
     name, the land area, and the estimated population in 2018.
*/
select city, land_area_sq_mi_2016, population_estimate_2018 from cities
where land_area_sq_mi_2016 > 400 and population_estimate_2018 < 2000000
or population_estimate_2018 > 2000000 and land_area_sq_mi_2016 < 400;
-- your query here

\echo ========= Problem 3.10 ===================================================
\echo
/*
3.10) Write a SQL query that uses a WHERE clause to find the cities where the
      population has increased by over 200,000 people from 2010 to 2018. Show
      the city name, the estimated population in 2018, and the census population
      in 2010.
*/
select city, population_estimate_2018, population_census_2010 from cities
where (population_estimate_2018-population_census_2010) > 200000;
-- your query here

---- Phase 4: Use a JOIN operation ---------------------------------------------
-- Retrieve rows from multiple tables joining on a foreign key.
-- The "airports" table has a foreign key called city_id that references the id
-- column in the "cities" table.
--------------------------------------------------------------------------------
\echo ========= Problem 4.1 ====================================================
\echo
/*
4.1) Write a SQL query using an INNER JOIN to join data from the "cities" table
     with data from the "airports" table using the city_id foreign key. Show the
     airport names and city names only.
*/
select airports.name, cities.city 
from airports
inner join cities on airports.city_id = cities.id;
-- your query here

\echo ========= Problem 4.2 ====================================================
\echo
/*
4.2) Write a SQL query using an INNER JOIN to join data from the "cities" table
     with data from the "airports" table to find out how many airports are in
     New York City using the city name.
     (Note: Use the aggregate function COUNT() to count the number of matching
      rows.)
*/
select COUNT(cities.city) 
from airports
inner join cities on airports.city_id = cities.id
WHERE cities.city = 'New York';
-- your query here


--------------------------------------------------------------------------------
---- Bonuses:
--------------------------------------------------------------------------------

\echo ========= Problem B.1 ====================================================
\echo
/*
B.1) Apostrophe: Write a SQL query to get all three ID codes (the Federal
     Aviation Administration (FAA) ID, the International Air Transport
     Association (IATA) ID, and the International Civil Aviation Organization
     (ICAO) ID) from the "airports" table for Chicago O'Hare International
     Airport.
     (Note: You'll need to escape the quotation mark in O'Hare. See How to
      include a single quote in a SQL query.)
*/
select airports.FAA_id, airports.IATA_id, .ICAO_id 
from airports
inner join cities on airports.city_id = cities.id
where airports.name = 'Chicago O''Hare International Airport';
-- your query here

\echo ========= Problem B.2 ====================================================
\echo
/*
B.2) Formatting Commas: Refactor Phase 2, Query #1 to turn the INT for estimated
     population in 2018 into a character string with commas. (Note: See Data
     Type Formatting Functions)

     * Phase 2, Query #1: Write a SQL query that returns the city, state, and
       estimated population in 2018 from the "cities" table.
*/
select city, state, to_char(population_estimate_2018, '999,999,999')
from cities;
-- your query here

\echo ========= Problem B.3 ====================================================
\echo
/*
B.3) Decimals and Rounding: Refactor Phase 3, Query #5 to turn number of
     millions from an integer into a decimal rounded to a precision of two
     decimal places.
     (Note: See Numeric Types and the ROUND function.)

     * Phase 3, Query #5: Write a SQL query to get the city and estimated
       population in 2018 in number of millions (i.e. without zeroes at the
       end: 1 million), and that uses a WHERE clause to return only the cities
       in Texas.
*/
select city, ROUND((population_estimate_2018/1000000::decimal), 2) from cities
where state ='Texas';
-- your query here

\echo ========= Problem B.4 ====================================================
\echo
/*
B.4) ORDER BY and LIMIT Clauses: Refactor Phase 3, Query #10 to return only one
     city with the biggest population increase from 2010 to 2018. Show the city
     name, the estimated population in 2018, and the census population in 2010
     for that city.
     (Note: You'll do the same calculation as before, but instead of comparing
      it to 200,000, use the ORDER BY Clause with the LIMIT Clause to sort the
      results and grab only the top result.)

     * Phase 3, Query #10: Write a SQL query that uses a WHERE clause to find
       the cities where the population has increased by over 200,000 people from
       2010 to 2018. Show the city name, the estimated population in 2018, and
       the census population in 2010.
*/
select city, population_estimate_2018, population_census_2010 from cities
where (population_estimate_2018-population_census_2010) > 200000
ORDER BY population_estimate_2018-population_census_2010
LIMIT 1;
-- your query here

\echo ========= (done!) ========================================================



select city, population_estimate_2018, population_census_2010 from cities
where (population_census_2010-population_estimate_2018) > 0
ORDER BY population_census_2010-population_estimate_2018
LIMIT 10;