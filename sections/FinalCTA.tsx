import React from 'react';
import { Button } from '../components/UI';
import { motion } from 'framer-motion';

export const FinalCTA: React.FC = () => {
    return (
        <section className="py-32 relative z-10 bg-black text-center">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 text-white">
                        Ready to crew up?
                    </h2>
                    <p className="text-gray-400 text-lg mb-12">
                        Join thousands of event professionals and organizers on KrewsUp today.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Button className="min-w-[200px]">Post an Event</Button>
                        <Button variant="secondary" className="min-w-[200px]">Join the Crew</Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}