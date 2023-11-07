CREATE TABLE IF NOT EXISTS product_proposition (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER DEFAULT NULL,
  category_name varchar(45) DEFAULT NULL,
  price decimal(10,0) DEFAULT NULL,
  dimensions varchar(45) DEFAULT NULL,
  color varchar(45) DEFAULT NULL,
  material varchar(45) DEFAULT NULL,
  picture text,
  status varchar(45) DEFAULT NULL,
  created_at timestamp NULL DEFAULT NULL,
  modified_at timestamp NULL DEFAULT NULL,
  deleted_at timestamp NULL DEFAULT NULL
) 