const Domain = require('../models/Domain');

// Get all domains
exports.getAllDomains = async (req, res) => {
  try {
    const domains = await Domain.find();
    res.status(200).json({
      success: true,
      message: 'Domains fetched successfully',
      data: domains
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching domains',
      error: error.message
    });
  }
};

// Get single domain by id field (e.g., "machinelearning", "blockchain")
exports.getDomainById = async (req, res) => {
  try {
    const domain = await Domain.findOne({ id: req.params.id });
    if (!domain) {
      return res.status(404).json({
        success: false,
        message: 'Domain not found'
      });
    }
    res.status(200).json({
      success: true,
      message: 'Domain fetched successfully',
      data: domain
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching domain',
      error: error.message
    });
  }
};

// Create new domain
exports.createDomain = async (req, res) => {
  try {
    const { id, title, description, imageUrl, quizRoute, topics } = req.body;

    // Validation
    if (!id || !title || !description) {
      return res.status(400).json({
        success: false,
        message: 'Please provide id, title, and description'
      });
    }

    // Check if domain already exists
    const existingDomain = await Domain.findOne({ id });
    if (existingDomain) {
      return res.status(409).json({
        success: false,
        message: 'Domain with this id already exists'
      });
    }

    const newDomain = new Domain({
      id,
      title,
      description,
      imageUrl: imageUrl || '',
      quizRoute: quizRoute || '',
      topics: topics || []
    });

    await newDomain.save();
    res.status(201).json({
      success: true,
      message: 'Domain created successfully',
      data: newDomain
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error creating domain',
      error: error.message
    });
  }
};

// Update domain
exports.updateDomain = async (req, res) => {
  try {
    const { title, description, imageUrl, quizRoute, topics } = req.body;

    const updateData = {
      ...(title && { title }),
      ...(description && { description }),
      ...(imageUrl !== undefined && { imageUrl }),
      ...(quizRoute !== undefined && { quizRoute }),
      ...(topics && { topics })
    };

    const updatedDomain = await Domain.findOneAndUpdate(
      { id: req.params.id },
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedDomain) {
      return res.status(404).json({
        success: false,
        message: 'Domain not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Domain updated successfully',
      data: updatedDomain
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating domain',
      error: error.message
    });
  }
};

// Delete domain
exports.deleteDomain = async (req, res) => {
  try {
    const domain = await Domain.findOneAndDelete({ id: req.params.id });

    if (!domain) {
      return res.status(404).json({
        success: false,
        message: 'Domain not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Domain deleted successfully',
      data: domain
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting domain',
      error: error.message
    });
  }
};

// Add topic to domain
exports.addTopic = async (req, res) => {
  try {
    const { topic } = req.body;

    if (!topic || !topic.id || !topic.title) {
      return res.status(400).json({
        success: false,
        message: 'Please provide complete topic data'
      });
    }

    const domain = await Domain.findOne({ id: req.params.id });
    if (!domain) {
      return res.status(404).json({
        success: false,
        message: 'Domain not found'
      });
    }

    domain.topics.push(topic);
    await domain.save();

    res.status(200).json({
      success: true,
      message: 'Topic added successfully',
      data: domain
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error adding topic',
      error: error.message
    });
  }
};

// Update topic in domain
exports.updateTopic = async (req, res) => {
  try {
    const { topicId } = req.params;
    const topicData = req.body;

    const domain = await Domain.findOne({ id: req.params.id });
    if (!domain) {
      return res.status(404).json({
        success: false,
        message: 'Domain not found'
      });
    }

    const topicIndex = domain.topics.findIndex(t => t._id.toString() === topicId);
    if (topicIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'Topic not found'
      });
    }

    domain.topics[topicIndex] = { ...domain.topics[topicIndex], ...topicData };
    await domain.save();

    res.status(200).json({
      success: true,
      message: 'Topic updated successfully',
      data: domain
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating topic',
      error: error.message
    });
  }
};

// Delete topic from domain
exports.deleteTopic = async (req, res) => {
  try {
    const { topicId } = req.params;

    const domain = await Domain.findOne({ id: req.params.id });
    if (!domain) {
      return res.status(404).json({
        success: false,
        message: 'Domain not found'
      });
    }

    domain.topics = domain.topics.filter(t => t._id.toString() !== topicId);
    await domain.save();

    res.status(200).json({
      success: true,
      message: 'Topic deleted successfully',
      data: domain
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting topic',
      error: error.message
    });
  }
};
