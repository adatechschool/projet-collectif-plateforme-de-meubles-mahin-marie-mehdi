CREATE TABLE IF NOT EXISTS product (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name varchar(45) NOT NULL,
  description mediumtext NOT NULL,
  category_id int DEFAULT NULL,
  inventory_id int DEFAULT NULL,
  price decimal(10,0) DEFAULT NULL,
  picture TEXT,
  dimensions varchar(45) DEFAULT NULL,
  color varchar(45) DEFAULT NULL,
  material varchar(45) DEFAULT NULL,
  created_at timestamp NULL DEFAULT NULL,
  modified_at timestamp NULL DEFAULT NULL,
  deleted_at timestamp NULL DEFAULT NULL
) 