import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Laws schema
export const laws = pgTable("laws", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  categoryId: integer("category_id").notNull(),
  description: text("description").notNull(),
  simplifiedDescription: text("simplified_description").notNull(),
  articleNumber: text("article_number"),
  keyPoints: text("key_points").array(),
  tags: text("tags").array(),
  helpfulLinks: text("helpful_links").array(),
  viewCount: integer("view_count").default(0),
});

export const insertLawSchema = createInsertSchema(laws).omit({
  id: true,
  viewCount: true,
});

export type InsertLaw = z.infer<typeof insertLawSchema>;
export type Law = typeof laws.$inferSelect;

// Categories schema
export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: text("name").notNull().unique(),
  description: text("description").notNull(),
  icon: text("icon").notNull(),
  color: text("color").notNull(),
});

export const insertCategorySchema = createInsertSchema(categories).omit({
  id: true,
});

export type InsertCategory = z.infer<typeof insertCategorySchema>;
export type Category = typeof categories.$inferSelect;

// Resources schema
export const resources = pgTable("resources", {
  id: serial("id").primaryKey(),
  type: text("type").notNull(), // helpline, ngo, document, etc.
  title: text("title").notNull(),
  description: text("description").notNull(),
  contactInfo: text("contact_info"),
  link: text("link"),
});

export const insertResourceSchema = createInsertSchema(resources).omit({
  id: true,
});

export type InsertResource = z.infer<typeof insertResourceSchema>;
export type Resource = typeof resources.$inferSelect;
