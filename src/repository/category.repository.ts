import Category from "@/models/category.model";
import BaseRepository from "./base.repository";

export default class CategoryRepo extends BaseRepository<Category> {
    constructor() {
      super(Category.name);
    }
}