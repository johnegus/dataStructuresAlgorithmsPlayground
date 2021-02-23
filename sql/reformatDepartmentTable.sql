
-- Table: Department

-- +---------------+---------+
-- | Column Name   | Type    |
-- +---------------+---------+
-- | id            | int     |
-- | revenue       | int     |
-- | month         | varchar |
-- +---------------+---------+
-- (id, month) is the primary key of this table.
-- The table has information about the revenue of each department per month.
-- The month has values in ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].
 

-- Write an SQL query to reformat the table such that there is a department id column and a revenue column for each month.

-- The query result format is in the following example:

-- Department table:
-- +------+---------+-------+
-- | id   | revenue | month |
-- +------+---------+-------+
-- | 1    | 8000    | Jan   |
-- | 2    | 9000    | Jan   |
-- | 3    | 10000   | Feb   |
-- | 1    | 7000    | Feb   |
-- | 1    | 6000    | Mar   |
-- +------+---------+-------+

-- Result table:
-- +------+-------------+-------------+-------------+-----+-------------+
-- | id   | Jan_Revenue | Feb_Revenue | Mar_Revenue | ... | Dec_Revenue |
-- +------+-------------+-------------+-------------+-----+-------------+
-- | 1    | 8000        | 7000        | 6000        | ... | null        |
-- | 2    | 9000        | null        | null        | ... | null        |
-- | 3    | null        | 10000       | null        | ... | null        |
-- +------+-------------+-------------+-------------+-----+-------------+

-- Note that the result table has 13 columns (1 for the department id + 12 for the months).


SELECT d.id as 'id',
      d1.revenue as 'Jan_Revenue',
      d2.revenue as 'feb_Revenue',
      d3.revenue as 'Mar_Revenue',
      d4.revenue as 'Apr_Revenue',
      d5.revenue as 'May_Revenue',
      d6.revenue as 'Jun_Revenue',
      d7.revenue as 'Jul_Revenue',
      d8.revenue as 'Aug_Revenue',
      d9.revenue as 'Sep_Revenue',
      d10.revenue as 'Oct_Revenue',
      d11.revenue as 'Nov_Revenue',
      d12.revenue as 'Dec_Revenue'
FROM Department d
LEFT JOIN (SELECT * FROM Department WHERE month = 'Jan') d1 on d1.id = d.id
LEFT JOIN (SELECT * FROM Department WHERE month = 'Feb') d2 on d2.id = d.id
LEFT JOIN (SELECT * FROM Department WHERE month = 'Mar') d3 on d3.id = d.id
LEFT JOIN (SELECT * FROM Department WHERE month = 'Apr') d4 on d4.id = d.id
LEFT JOIN (SELECT * FROM Department WHERE month = 'May') d5 on d5.id = d.id
LEFT JOIN (SELECT * FROM Department WHERE month = 'Jun') d6 on d6.id = d.id
LEFT JOIN (SELECT * FROM Department WHERE month = 'Jul') d7 on d7.id = d.id
LEFT JOIN (SELECT * FROM Department WHERE month = 'Aug') d8 on d8.id = d.id
LEFT JOIN (SELECT * FROM Department WHERE month = 'Sep') d9 on d9.id = d.id
LEFT JOIN (SELECT * FROM Department WHERE month = 'Oct') d10 on d10.id = d.id
LEFT JOIN (SELECT * FROM Department WHERE month = 'Nov') d11 on d11.id = d.id
LEFT JOIN (SELECT * FROM Department WHERE month = 'Dec') d12 on d12.id = d.id
GROUP BY 1


-- SELECT 
--     id, 
--     sum( if( month = 'Jan', revenue, null ) ) AS Jan_Revenue,
--     sum( if( month = 'Feb', revenue, null ) ) AS Feb_Revenue,
--     sum( if( month = 'Mar', revenue, null ) ) AS Mar_Revenue,
--     sum( if( month = 'Apr', revenue, null ) ) AS Apr_Revenue,
--     sum( if( month = 'May', revenue, null ) ) AS May_Revenue,
--     sum( if( month = 'Jun', revenue, null ) ) AS Jun_Revenue,
--     sum( if( month = 'Jul', revenue, null ) ) AS Jul_Revenue,
--     sum( if( month = 'Aug', revenue, null ) ) AS Aug_Revenue,
--     sum( if( month = 'Sep', revenue, null ) ) AS Sep_Revenue,
--     sum( if( month = 'Oct', revenue, null ) ) AS Oct_Revenue,
--     sum( if( month = 'Nov', revenue, null ) ) AS Nov_Revenue,
--     sum( if( month = 'Dec', revenue, null ) ) AS Dec_Revenue
-- FROM 
--     Department
-- GROUP BY 
--     id;