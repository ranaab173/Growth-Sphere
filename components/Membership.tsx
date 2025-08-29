import React from 'react';
import Button from './ui/Button';

const CheckListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start">
        <i className="fa-solid fa-check-circle text-sky-500 mt-1 mr-3"></i>
        <span>{children}</span>
    </li>
);


const Membership: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 text-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-12 border-2 border-sky-400 shadow-2xl shadow-sky-200/80">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">One platform. All of you.</h2>
            <p className="text-lg text-gray-600 mb-8">Get unlimited access to 100+ programs for one all-inclusive price.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <ul className="space-y-4 text-gray-700">
                <CheckListItem>100+ Growth Sphere Programs</CheckListItem>
                <CheckListItem>Daily Live Classes with world-class trainers</CheckListItem>
                <CheckListItem>AI-Personalized Growth Plans</CheckListItem>
            </ul>
             <ul className="space-y-4 text-gray-700">
                <CheckListItem>Access to Growth Sphere's Private Social Network</CheckListItem>
                <CheckListItem>Over 1,000 Guided Meditations & Sounds</CheckListItem>
                <CheckListItem>15-Day Money-Back Guarantee</CheckListItem>
            </ul>
          </div>
          <div className="text-center">
            <Button size="lg" variant="primary" className="w-full md:w-auto">
                Become A Member
            </Button>
            <p className="mt-4 text-gray-500 text-sm">Cancel anytime. 100% satisfaction guaranteed.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;