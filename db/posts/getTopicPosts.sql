SELECT p.post_id, p.topic_id, p.user_id, p.user_post,u.username FROM post p
INNER JOIN topic t
ON p.topic_id = t.topic_id
INNER JOIN devforumuser u
ON u.user_id = p.user_id
WHERE t.topic_id = $1;