import React from 'react';
import { motion } from 'framer-motion';

const BentoGrid = () => {
    const bentoItems = [
        {
            id: 1,
            title: "Save your files",
            description: "We automatically save your files as you type.",
            icon: "document",
            image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fHww",
            size: "medium",
        },
        {
            id: 2,
            title: "Notifications",
            description: "Get notified when something happens.",
            icon: "bell",
            size: "large",
            notifications: [
                { type: "message", title: "New message", time: "5m ago", source: "Magic UI" },
                { type: "signup", title: "User signed up", time: "10m ago", source: "Magic UI" },
                { type: "payment", title: "Payment received", time: "15m ago", source: "Magic UI" },
            ]
        },
        {
            id: 3,
            title: "Integrations",
            description: "Supports 100+ integrations and counting.",
            icon: "share",
            image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fHww",
            size: "large",
        },
        {
            id: 4,
            title: "Calendar",
            description: "Use the calendar to filter your files by date.",
            icon: "calendar",
            size: "small",
        },
        {
            id: 5,
            title: "Code Snippets",
            description: "Store your frequently used code snippets.",
            icon: "code",
            image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fHww",
            size: "small",
        },
    ];

    // Framer Motion animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <div className="bg-gray-900 min-h-screen p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-white">Your Dashboard</h1>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {bentoItems.map((item) => (
                        <motion.div
                            key={item.id}
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.02,
                                transition: { duration: 0.2 },
                            }}
                            className={`
                bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300
                ${item.size === 'large' ? 'md:col-span-2 md:row-span-2' : item.size === 'medium' ? 'md:col-span-1 md:row-span-2' : ''}
                relative group
              `}
                        >
                            {/* Background Animation */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                            />

                            {/* Main Content */}
                            <div className="p-6 relative z-10 h-full flex flex-col">
                                <div className="mt-auto flex-grow flex items-center justify-center overflow-hidden rounded-lg">
                                    <motion.img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transform transition-transform duration-300"
                                        whileHover={{ scale: 1.05 }}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default BentoGrid;