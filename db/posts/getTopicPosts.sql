SELECT p.post_id, p.topic_id, p.user_id, p.user_post FROM post p
INNER JOIN topic t
ON p.topic_id = t.topic_id
WHERE t.topic_id = $1;