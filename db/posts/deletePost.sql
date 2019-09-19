DELETE FROM post
WHERE post_id = $2;

SELECT * from post
WHERE topic_id = $1;