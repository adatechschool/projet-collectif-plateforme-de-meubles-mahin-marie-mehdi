CREATE TABLE IF NOT EXISTS user (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username VARCHAR(45),
  password VARCHAR(128),
  first_name VARCHAR(45),
  last_name VARCHAR(45),
  created_at timestamp NULL,
  modified_at timestamp NULL
)