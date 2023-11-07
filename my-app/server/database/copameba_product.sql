CREATE TABLE IF NOT EXISTS product (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name varchar(45) NOT NULL,
  description TEXT NOT NULL,
  category_id INTEGER DEFAULT NULL,
  price decimal(10,0) DEFAULT NULL,
  picture BLOB DEFAULT NULL,
  material varchar(45) DEFAULT NULL,
  color varchar(45) DEFAULT NULL,
  dimensions varchar(45) DEFAULT NULL,
  status INTEGER DEFAULT 0
) 