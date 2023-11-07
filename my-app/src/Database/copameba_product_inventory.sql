CREATE TABLE IF NOT EXISTS product_inventory (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  quantity INTEGER DEFAULT NULL,
  created_at timestamp NULL DEFAULT NULL,
  modified_at timestamp NULL DEFAULT NULL,
  deleted_at timestamp NULL DEFAULT NULL
) 