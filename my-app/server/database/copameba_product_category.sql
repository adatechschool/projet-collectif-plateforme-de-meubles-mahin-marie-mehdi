CREATE TABLE IF NOT EXISTS product_category (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name varchar(45) NOT NULL,
  description TEXT NOT NULL,
  created_at timestamp NOT NULL,
  modified_at timestamp NULL DEFAULT NULL,
  deleted_at timestamp NULL DEFAULT NULL
)