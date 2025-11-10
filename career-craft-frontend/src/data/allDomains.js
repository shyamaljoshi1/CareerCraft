// Import all the domain data files we created
import { cybersecurityDomain } from './cybersecurityDomain';
import { machineLearningDomain } from './machineLearningDomain';
import { softwareDevelopmentDomain } from './softwareDevelopmentDomain';
import { cloudComputingDomain } from './cloudComputingDomain';
import { blockchainDomain } from './blockchainDomain';
import { iotDomain } from './iotDomain';
import { devopsDomain } from './devopsDomain';
import { dataScienceDomain } from './dataScienceDomain';

// 1. Create the master object
const allDomains = {
  cybersecurity: cybersecurityDomain,
  machinelearning: machineLearningDomain,
  softwaredevelopment: softwareDevelopmentDomain,
  cloudcomputing: cloudComputingDomain,
  datascience: dataScienceDomain,
  blockchain: blockchainDomain,
  iot: iotDomain,
  devops: devopsDomain,
};

// 2. Create our helper functions
export const getDomainData = (domainId) => {
  return allDomains[domainId] || null;
};

export const getTopicData = (domainId, topicId) => {
  const domain = getDomainData(domainId);
  if (!domain) return null;
  return domain.topics.find((topic) => topic.id === topicId) || null;
};

export const getAllDomains = () => {
  // Returns an array of all domain objects, e.g., [cybersecurityDomain, machineLearningDomain, ...]
  return Object.values(allDomains);
};