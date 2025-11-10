// Import all the quiz data files
import { cybersecurityQuiz } from './quizes/cybersecurityQuiz';
import { machineLearningQuiz } from './quizes/machineLearningQuiz'
import { softwareDevelopmentQuiz } from './quizes/softwareDevelopmentQuiz';
import { cloudComputingQuiz } from './quizes/cloudComputingQuiz';
import { blockchainQuiz } from './quizes/blockchainQuiz';
import { iotQuiz } from './quizes/iotQuiz';
import { devopsQuiz } from './quizes/devopsQuiz';
import { dataScienceQuiz } from './quizes/dataScienceQuiz';

// 1. Create the master object to hold all quizzes
const allQuizzes = {
  cybersecurity: cybersecurityQuiz,
  machinelearning: machineLearningQuiz,
  softwaredevelopment: softwareDevelopmentQuiz,
  cloudcomputing: cloudComputingQuiz,
  blockchain: blockchainQuiz,
  iot: iotQuiz,
  devops: devopsQuiz,
  datascience: dataScienceQuiz,
};

// 2. Create our helper function to get the correct quiz
export const getQuizData = (domainId) => {
  return allQuizzes[domainId] || null;
};