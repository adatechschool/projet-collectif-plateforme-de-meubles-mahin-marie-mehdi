class Product {
  constructor(name, description, categoryId, inventoryId, price, pictureUrl, createdAt, modifiedAt, deletedAt) {
    this.name = name;
    this.description = description;
    this.categoryId = categoryId;
    this.inventoryId = inventoryId;
    this.price = price;
    this.pictureUrl = pictureUrl;
    this.createdAt = new Date();
    this.modifiedAt = new Date();
    this.deletedAt = new Date();
  }
}
