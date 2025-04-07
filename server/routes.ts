import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import constitutionalLaws from "../client/src/data/laws/constitutional";
import domesticLaws from "../client/src/data/laws/domestic";
import workplaceLaws from "../client/src/data/laws/workplace";
import propertyLaws from "../client/src/data/laws/property";
import criminalLaws from "../client/src/data/laws/criminal";
import categories from "../client/src/data/categories";

export async function registerRoutes(app: Express): Promise<Server> {
  // prefix all routes with /api
  
  // API endpoint for getting all laws
  app.get("/api/laws", (req, res) => {
    const allLaws = [
      ...constitutionalLaws,
      ...domesticLaws,
      ...workplaceLaws,
      ...propertyLaws,
      ...criminalLaws
    ];
    
    // Handle search query parameter
    const searchTerm = req.query.search as string | undefined;
    if (searchTerm && searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      const filteredLaws = allLaws.filter(law => 
        law.title.toLowerCase().includes(term) || 
        law.simplifiedDescription.toLowerCase().includes(term) ||
        law.description.toLowerCase().includes(term) ||
        (law.articleNumber && law.articleNumber.toLowerCase().includes(term))
      );
      return res.json(filteredLaws);
    }
    
    // Return all laws if no search term
    res.json(allLaws);
  });
  
  // API endpoint for getting laws by category
  app.get("/api/laws/category/:categoryId", (req, res) => {
    const { categoryId } = req.params;
    
    let lawsByCategory;
    switch (categoryId) {
      case "constitutional":
        lawsByCategory = constitutionalLaws;
        break;
      case "domestic":
        lawsByCategory = domesticLaws;
        break;
      case "workplace":
        lawsByCategory = workplaceLaws;
        break;
      case "property":
        lawsByCategory = propertyLaws;
        break;
      case "criminal":
        lawsByCategory = criminalLaws;
        break;
      default:
        return res.status(404).json({ message: "Category not found" });
    }
    
    res.json(lawsByCategory);
  });
  
  // API endpoint for getting a specific law by ID
  app.get("/api/laws/:id", (req, res) => {
    const { id } = req.params;
    
    const allLaws = [
      ...constitutionalLaws,
      ...domesticLaws,
      ...workplaceLaws,
      ...propertyLaws,
      ...criminalLaws
    ];
    
    const law = allLaws.find(law => law.id === id);
    
    if (!law) {
      return res.status(404).json({ message: "Law not found" });
    }
    
    res.json(law);
  });
  
  // API endpoint for getting all categories
  app.get("/api/categories", (req, res) => {
    res.json(categories);
  });
  
  // API endpoint for getting a specific category
  app.get("/api/categories/:id", (req, res) => {
    const { id } = req.params;
    const category = categories.find(cat => cat.id === id);
    
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    
    res.json(category);
  });
  
  // API endpoint for getting related laws
  app.get("/api/laws/:id/related", (req, res) => {
    const { id } = req.params;
    
    const allLaws = [
      ...constitutionalLaws,
      ...domesticLaws,
      ...workplaceLaws,
      ...propertyLaws,
      ...criminalLaws
    ];
    
    const law = allLaws.find(law => law.id === id);
    
    if (!law) {
      return res.status(404).json({ message: "Law not found" });
    }
    
    // Find related laws (same category or matching tags)
    const relatedLaws = allLaws
      .filter(l => l.id !== id) // Exclude current law
      .filter(l => 
        l.categoryId === law.categoryId || // Same category
        l.tags.some(tag => 
          law.tags.some(t => t.id === tag.id)
        ) // Matching tags
      )
      .slice(0, 4); // Limit to 4 related laws
    
    res.json(relatedLaws);
  });
  
  // API endpoint for newsletter subscription (simulated)
  app.post("/api/newsletter/subscribe", (req, res) => {
    const { email } = req.body;
    
    if (!email || !email.includes('@')) {
      return res.status(400).json({ message: "Valid email is required" });
    }
    
    // In a real app, this would store the email in a database
    // For now, just return success response
    res.json({ 
      success: true, 
      message: "Thank you for subscribing! You'll receive updates about new laws and resources." 
    });
  });
  
  // API endpoint for filtering laws by tags
  app.get("/api/laws/tags/:tagName", (req, res) => {
    const { tagName } = req.params;
    
    const allLaws = [
      ...constitutionalLaws,
      ...domesticLaws,
      ...workplaceLaws,
      ...propertyLaws,
      ...criminalLaws
    ];
    
    const filteredLaws = allLaws.filter(law => 
      law.tags.some(tag => tag.name.toLowerCase() === tagName.toLowerCase())
    );
    
    res.json(filteredLaws);
  });

  const httpServer = createServer(app);

  return httpServer;
}
