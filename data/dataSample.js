const dataSample = {
  quizzes: [
    {
      id: 1,
      name: 'Quiz 1',
      description: 'First quiz',
      rating: 5,
      category: 'general',
      author: 'Marin',
      authorIp: ':1',
      dateCreated: 'now',
      dateUpdated: 'now',
      questions: [
        {
          id: 1,
          question: 'What is the capital of the United States?',
          correctAnswer: 'Washington',
          answers: ['Washington', 'New York', 'Los Angeles', 'Chicago'],
        },
        {
          id: 2,
          question: 'What is the capital of France?',
          correctAnswer: 'Paris',
          answers: ['Paris', 'New York', 'Los Angeles', 'Chicago'],
        },
      ],
    },
    {
      id: 2,
      name: 'Quiz 2',
      description: 'second quiz',
      rating: 3,
      category: 'general',
      author: 'Marin',
      authorIp: ':1',
      dateCreated: 'now',
      dateUpdated: 'now',
      questions: [
        {
          id: 1,
          question: 'What is the ?',
          correctAnswer: 'I dont know',
          answers: ['I dont know', 'New York', 'Los Angeles', 'Chicago'],
        },
        {
          id: 2,
          question: 'Where is the ?',
          correctAnswer: 'I dont know',
          answers: ['Paris', 'I dont know', 'Los Angeles', 'Chicago'],
        },
      ],
    },
  ],
};

export default dataSample;
