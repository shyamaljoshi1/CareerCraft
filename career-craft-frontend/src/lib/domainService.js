const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

export const domainService = {
  // Get all domains
  getAllDomains: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/domains`);
      if (!response.ok) {
        throw new Error('Failed to fetch domains');
      }
      const data = await response.json();
      return data.data || [];
    } catch (error) {
      console.error('Error fetching domains:', error);
      throw error;
    }
  },

  // Get domain by id (e.g., "machinelearning", "blockchain")
  getDomainById: async (domainId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/domains/${domainId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch domain');
      }
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Error fetching domain:', error);
      throw error;
    }
  },

  // Create new domain
  createDomain: async (domainData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/domains`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(domainData)
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to create domain');
      }
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Error creating domain:', error);
      throw error;
    }
  },

  // Update domain
  updateDomain: async (domainId, domainData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/domains/${domainId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(domainData)
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to update domain');
      }
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Error updating domain:', error);
      throw error;
    }
  },

  // Delete domain
  deleteDomain: async (domainId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/domains/${domainId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      if (!response.ok) {
        throw new Error('Failed to delete domain');
      }
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Error deleting domain:', error);
      throw error;
    }
  },

  // Add topic to domain
  addTopic: async (domainId, topicData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/domains/${domainId}/topics`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ topic: topicData })
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to add topic');
      }
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Error adding topic:', error);
      throw error;
    }
  },

  // Update topic
  updateTopic: async (domainId, topicId, topicData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/domains/${domainId}/topics/${topicId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(topicData)
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to update topic');
      }
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Error updating topic:', error);
      throw error;
    }
  },

  // Delete topic
  deleteTopic: async (domainId, topicId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/domains/${domainId}/topics/${topicId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      if (!response.ok) {
        throw new Error('Failed to delete topic');
      }
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Error deleting topic:', error);
      throw error;
    }
  }
};

export default domainService;
