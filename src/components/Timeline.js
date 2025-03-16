import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const timelineData = [
  {
    year: '2019',
    title: 'Freelancing',
    description: 'Began offering web development and video editing services.',
  },
  {
    year: '2022',
    title: 'MicroDegree',
    description: 'Technical Assistant and Program Manager',
  },
  {
    year: '2025',
    title: 'UnifyCX',
    description: 'Support Engineer',
  }
];

const PortfolioTimeline = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 text-white pt-24">
     
      <div className="relative  border-gray-600 ml-6">
        {timelineData.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.3 }}
            className="mb-8 ml-6 relative"
          >
            <motion.div 
              className="absolute -left-8 bg-slate-800 text-white p-3 rounded-full shadow-lg z-10"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <FaBriefcase size={20} />
            </motion.div>
            <div className="bg-slate-900 p-4 rounded-lg shadow-md border border-gray-700 relative z-0">
              <span className="text-blue-400 font-bold">{item.year}</span>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default PortfolioTimeline;
