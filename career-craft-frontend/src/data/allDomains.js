// Import the domain service
import domainService from '../lib/domainService';

// Initialize as empty object - will be populated by fetchAllDomains
let allDomains = {};
let isLoadingDomains = false;
let domainsLoadedPromise = null;

/**
 * Fetch all domains from MongoDB via API
 * Converts the API response into the format expected by the application
 */
export const fetchAllDomains = async () => {
  // If already loading, wait for that promise to complete
  if (isLoadingDomains && domainsLoadedPromise) {
    return domainsLoadedPromise;
  }

  // If already loaded, return immediately
  if (Object.keys(allDomains).length > 0) {
    return true;
  }

  isLoadingDomains = true;

  domainsLoadedPromise = (async () => {
    try {
      console.log('Fetching domains from MongoDB...');
      // Fetch all domains from the API
      const domainsFromAPI = await domainService.getAllDomains();
      
      if (!domainsFromAPI || domainsFromAPI.length === 0) {
        console.warn('No domains returned from API');
        return false;
      }

      // Convert the array into a keyed object format
      // This allows us to access domains by their id (e.g., allDomains.blockchain)
      domainsFromAPI.forEach(domain => {
        // Use the domain's custom 'id' field as the key
        allDomains[domain.id] = domain;
      });

      console.log('Domains loaded successfully:', Object.keys(allDomains));
      return true;
    } catch (error) {
      console.error('Error loading domains from API:', error);
      return false;
    } finally {
      isLoadingDomains = false;
    }
  })();

  return domainsLoadedPromise;
};

// Helper function to wait for domains to load
export const waitForDomains = async () => {
  if (Object.keys(allDomains).length > 0) {
    return true; // Already loaded
  }

  if (isLoadingDomains && domainsLoadedPromise) {
    return domainsLoadedPromise;
  }

  return fetchAllDomains();
};

// Helper function to get a single domain by its ID
export const getDomainData = (domainId) => {
  return allDomains[domainId] || null;
};

// Helper function to get a specific topic from a domain
export const getTopicData = (domainId, topicId) => {
  const domain = getDomainData(domainId);
  if (!domain) return null;
  return domain.topics.find((topic) => topic.id === topicId) || null;
};

// Helper function to get all domains as an array
export const getAllDomains = () => {
  // Returns an array of all domain objects
  return Object.values(allDomains);
};