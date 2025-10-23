// Storage interface for the landing page
// This is a static landing page with no backend persistence needed

export interface IStorage {
  // No storage methods needed for static landing page
}

export class MemStorage implements IStorage {
  constructor() {
    // No data to store for static landing page
  }
}

export const storage = new MemStorage();
