const mongoose = require('mongoose');
const Form = require('./schema.js'); 

const dotenv = require("dotenv");

dotenv.config();


mongoose.connect(`${process.env.URL}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const questions = [
  "Working relationship with your current Supervisor/HOD",
  "Working relationship with fellow employees",
  "Salary and Benefits for your position",
  "Opportunities for career advancement",
  "Work-life balance as a professor/staff",
  "Support from the university administration",
  "Availability of teaching/working resources",
  "Clarity of job responsibilities and workload distribution",
  "Professional development opportunities (workshops, seminars)",
  "Your Overall Experience",
];

const reasons = [
  "Salary",
  "Benefits",
  "Personal",
  "Higher Education",
  "Relocation",
  "Health/Medical",
  "Family Responsibilities",
  "Dissatisfied/Management",
  "Job Advertisement",
  "Job Termination",
  "End of Contract/Superannuation",
  "Other(specify)",
];


const getRandomRating = () => Math.floor(Math.random() * 5) + 1;
const getRandomReason = () => reasons[Math.floor(Math.random() * reasons.length)];


const seedForms = async () => {
  const forms = [];

  for (let i = 0; i < 10; i++) {
    const ratings = questions.map((question) => ({
      questionText: question,
      rating: getRandomRating(),
      explanation: '', 
    }));

    const improvementAreas = Array.from(
      { length: 2 },
      () => getRandomReason()
    ); 

    forms.push({
      name: `Employee ${i + 1}`,
      employeeId: `EMP00${i + 1}`,
      designation: 'Professor', 
      department: 'Computer Science', 
      improvementAreas,
      questions: ratings,
    });
  }

  try {
    
    await Form.deleteMany({});
    // Insert new seed data
    await Form.insertMany(forms);
    console.log('Database seeded with form entries');
  } catch (err) {
    console.error('Error seeding database:', err);
  } finally {
    mongoose.connection.close();
  }
};

// Run the seed function
seedForms();
