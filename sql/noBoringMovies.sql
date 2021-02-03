SELECT id, movie, description, rating
FROM cinema
WHERE description is not 'boring'
and id % 2 = 1
ORDER BY rating desc