const faker = require('faker');

let fakeHeader = () => {
  return (faker.lorem.sentence().slice(0, -1));
};

let fakeSentence = () => {
  return (faker.lorem.sentence());
};

let fakeDescription = () => {
  return (faker.lorem.sentences());
};

let fakeTitle = () => {
  return (faker.name.jobArea());
};

let fakeDataGenerator = (recordsToCreate, startingRecordID) => {

  let data = [];

  while (recordsToCreate > 0) {
    data.push({
      productId: startingRecordID,
      banner: {
        header: fakeHeader(),
        text: fakeDescription()
      },
      features: [
        {
          header: fakeHeader(),
          description: fakeDescription()
        },
        {
          header: fakeHeader(),
          description: fakeDescription()
        },
        {
          header: fakeHeader(),
          description: fakeDescription()
        },
        {
          header: fakeHeader(),
          description: fakeDescription()
        },
        {
          header: fakeHeader(),
          description: fakeDescription()
        },
        {
          header: fakeHeader(),
          description: fakeDescription()
        },
        {
          header: fakeHeader(),
          description: fakeDescription()
        }
      ],
      featureSetup: {
        header: fakeHeader(),
        description: [fakeSentence(), fakeSentence(), fakeSentence()]
      },
      additionalFeatures: {
        header: fakeHeader(),
        description: fakeDescription(),
        contentGrid: [
          {
            title: fakeTitle(),
            description: fakeDescription()
          },
          {
            title: fakeTitle(),
            description: fakeDescription()
          },
          {
            title: fakeTitle(),
            description: fakeDescription()
          },
          {
            title: fakeTitle(),
            description: fakeDescription()
          },
          {
            title: fakeTitle(),
            description: fakeDescription()
          },
        ]
      }
    });

    recordsToCreate--;
    startingRecordID++;
  }

  return data;
};

module.exports.fakeDataGenerator = fakeDataGenerator;