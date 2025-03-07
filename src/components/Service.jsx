import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// DATA BOX SERVICE
const servicesData = [
  {
    id: 1,
    title: 'Project Management',
    icon: <i className="uil uil-user-check service-icon"></i>,
    description: 'End-to-end project planning and execution ensuring timely delivery and stakeholder satisfaction.',
    details: [
      'Project planning and scoping',
      'Resource allocation and team management',
      'Risk assessment and mitigation',
      'Agile workflow implementation',
      'Stakeholder communication',
    ],
  },
  {
    id: 2,
    title: 'IT Business Analyst',
    icon: <i className="uil uil-file-check-alt service-icon"></i>,
    description: 'Comprehensive analysis with focus on optimizing business processes and technology solutions.',
    details: [
      'Requirement gathering and analysis',
      'System design and architecture',
      'Process optimization',
      'Technical documentation',
      'Stakeholder collaboration',
    ],
  },
  // {
  //   id: 3,
  //   title: 'Quality Assurance',
  //   icon: <i className="uil uil-edit service-icon"></i>,
  //   description: 'Robust quality control processes ensuring software reliability and exceptional user experience.',
  //   details: [
  //     'Test planning and strategy',
  //     'Automated testing implementation',
  //     'Bug tracking and reporting',
  //     'Performance testing',
  //     'Quality metrics analysis',
  //   ],
  // },
];

// DATA SKILL ITEM
const skillItem = [
  { label: 'Journalist' },
  { label: 'Research Assistant' },
  { label: 'Content Writer' },
];

const Service = () => {
  // STATE UNTUK BOX SERVICE YANG DIPILIH
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="service" className="section relative overflow-hidden">
      <div className="container">
        <h2 className="headline-2 mb-8 text-center">Professional Services</h2>

        {/* BOX SERVICE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              className={`group relative bg-zinc-900/50 rounded-3xl p-8 border border-zinc-700/20 hover:border-transparent transition-all cursor-pointer 
                bg-gradient-to-br ${service.gradient} bg-size-200% bg-pos-0 hover:bg-pos-100`}
              onClick={() => setSelectedService(service.id)}
            >
              {/* ISI KONTEN BOX SERVICE */}
              <div className="relative z-10 space-y-6">
                {/* ICON DALAM BOX SERVICE */}
                <div className="w-20 h-20 flex items-center justify-center text-4xl">
                  {service.icon}
                </div>

                {/* ISI KONTEN DALAM BOX SERVICE */}
                <h3 className="text-3xl font-bold bg-gradient-to-r from-zinc-100 to-zinc-300 bg-clip-text text-transparent">
                  {service.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">{service.description}</p>

                {/* FLOATING ACTION (WHEN HOVER) */}
                <div className="flex items-center gap-1 text-orange-400 group-hover:text-amber-300 transition-colors">
                  <span className="text-sm font-medium">Read more</span>
                  <span className="material-symbols-rounded animate-pulse">arrow_outward</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* DETAIL POP-UP BOX */}
        <AnimatePresence>
          {selectedService && (
            // DESIGN POP-UP BOX
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-2xl flex items-center justify-center p-4 z-50 duration-0"
              onClick={() => setSelectedService(null)}
            >
              {/* ISI DALAM POP-UP BOX */}
              {servicesData.map((service) => (
                service.id === selectedService && (
                  <motion.div
                    key={service.id}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.8 }}
                    className="relative bg-zinc-900/80 rounded-3xl p-10 max-w-2xl w-full border border-zinc-700/30 shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* CLOSE BUTTON */}
                    <button
                      onClick={() => setSelectedService(null)}
                      className="absolute top-6 right-6 text-zinc-400 hover:text-orange-400 text-3xl material-symbols-rounded transition-colors"
                    >
                      close
                    </button>

                    {/* ISI KONTEN (ICON | TITLE | DESC) */}
                    <div className="space-y-8">
                      <div className="flex items-start gap-6">
                        <div className="max-sm:hidden text-5xl">{service.icon}</div>
                        <div>
                          <h3 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent cursor-default">
                            {service.title}
                          </h3>
                          <p className="text-zinc-400 mt-2">{service.description}</p>
                        </div>
                      </div>

                      {/* DETAIL LIST */}
                      <div className="grid gap-4">
                        {service.details.map((detail, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-4 p-4 bg-zinc-800/20 rounded-xl"
                          >
                            <div className="w-3 h-3 bg-orange-400 rounded-full flex-shrink-0" />
                            <p className="text-zinc-300">{detail}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* SKILL ITEMS BOX */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
        >
          {skillItem.map(({ label }, key) => (
            <motion.div
              key={key}
              whileHover={{ y: -5 }}
              className="group relative bg-zinc-900/50 backdrop-blur-xl rounded-2xl gap-3 p-3 border border-zinc-50/10 hover:bg-zinc-700/50 transition-all cursor-default"
            >
              <h4 className="text-xl font-semibold text-center text-zinc-100">{label}</h4>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Service;