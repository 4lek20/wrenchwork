'use client';

import { useState } from 'react';

const questions = [
  {
    id: 1,
    question: "Which activities do you enjoy most?",
    options: [
      { value: 'hands-on', label: 'Building, fixing, or working with tools' },
      { value: 'tech', label: 'Working with computers or technology' },
      { value: 'creative', label: 'Designing or creating things' },
      { value: 'helping', label: 'Helping or caring for people' },
    ],
  },
  {
    id: 2,
    question: "How important is earning potential to you?",
    options: [
      { value: 'high', label: 'Top priority - I want six figures' },
      { value: 'medium', label: 'Important but not everything' },
      { value: 'balanced', label: 'Work-life balance matters most' },
    ],
  },
  {
    id: 3,
    question: "What's your preferred learning style?",
    options: [
      { value: 'apprenticeship', label: 'Learn on the job (apprenticeship)' },
      { value: 'classroom', label: 'Traditional classroom + hands-on' },
      { value: 'self-taught', label: 'Self-directed learning' },
    ],
  },
];

const careers = {
  'hands-on': [
    { title: 'Electrician', salary: '$60K-$90K', time: '4-5 years', demand: 'High' },
    { title: 'Plumber', salary: '$55K-$85K', time: '4-5 years', demand: 'High' },
    { title: 'HVAC Technician', salary: '$50K-$80K', time: '6-24 months', demand: 'Very High' },
  ],
  'tech': [
    { title: 'Network Administrator', salary: '$65K-$95K', time: '2-4 years', demand: 'High' },
    { title: 'Solar Panel Installer', salary: '$45K-$70K', time: '3-6 months', demand: 'Very High' },
  ],
  'creative': [
    { title: 'Construction Manager', salary: '$70K-$110K', time: '2-4 years', demand: 'High' },
    { title: 'Welder', salary: '$45K-$75K', time: '6-18 months', demand: 'High' },
  ],
  'helping': [
    { title: 'Dental Hygienist', salary: '$70K-$100K', time: '2 years', demand: 'High' },
    { title: 'Respiratory Therapist', salary: '$60K-$85K', time: '2 years', demand: 'Very High' },
  ],
};

export default function Assessment() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [result, setResult] = useState<any[]>([]);

  const handleAnswer = (questionId: number, value: string) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const calculateResults = () => {
    const primaryInterest = answers[1];
    const matchedCareers = careers[primaryInterest as keyof typeof careers] || careers['hands-on'];
    setResult(matchedCareers);
    setStep(4); // Results step
  };

  if (step === 4) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold text-center mb-8">Your Career Matches</h1>
          <div className="grid gap-6">
            {result.map((career, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm border">
                <h2 className="text-2xl font-semibold text-blue-600 mb-4">{career.title}</h2>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <div className="text-sm text-gray-500">Starting Salary</div>
                    <div className="font-semibold">{career.salary}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Training Time</div>
                    <div className="font-semibold">{career.time}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Job Demand</div>
                    <div className="font-semibold text-green-600">{career.demand}</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                    Find Programs Near You
                  </button>
                  <button className="flex-1 border-2 border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-50 transition">
                    Download Career Guide
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Share your results with your school counselor!</p>
            <a
              href="/counselors"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              For Counselors →
            </a>
          </div>
          <div className="mt-8 text-center">
            <a
              href="/"
              className="text-blue-600 hover:underline"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </div>
    );
  }

  if (step < questions.length) {
    const q = questions[step];
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-500 mb-2">
              <span>Question {step + 1} of {questions.length}</span>
              <span>{Math.round(((step + 1) / questions.length) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all"
                style={{ width: `${((step + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          <h1 className="text-3xl font-bold mb-8">{q.question}</h1>
          
          <div className="space-y-4">
            {q.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(q.id, option.value)}
                className={`w-full p-4 text-left rounded-lg border-2 transition ${
                  answers[q.id] === option.value
                    ? 'border-blue-600 bg-blue-50 text-blue-900 font-medium'
                    : 'border-gray-300 hover:border-blue-300 bg-white text-gray-900 font-medium'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>

          <div className="flex justify-between mt-8">
            {step > 0 && (
              <button
                onClick={() => setStep(step - 1)}
                className="text-gray-600 hover:text-gray-900"
              >
                ← Back
              </button>
            )}
            {answers[q.id] && (
              <button
                onClick={() => {
                  if (step === questions.length - 1) {
                    calculateResults();
                  } else {
                    setStep(step + 1);
                  }
                }}
                className="ml-auto bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                {step === questions.length - 1 ? 'See Results' : 'Next →'}
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return null;
}
