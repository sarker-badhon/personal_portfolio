import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white bottom-0">
            <div className="container mx-auto py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">About Me</h3>
                        <p className="text-gray-400">
                            "Hello, my name is Badhon Sarker, and I am a software developer. I am currently pursuing my education at Kurigram Polytechnic, where I am studying computer science. I'm expected to graduate in 2023, and I'm excited to apply my skills and knowledge to real-world projects.

                            I have a passion for web development and specialize in front-end technologies such as HTML, CSS, and JavaScript. Throughout my education, I have gained hands-on experience with frameworks like React js, enabling me to create interactive and user-friendly web applications.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Contact</h3>
                        <ul className="text-gray-400">
                            <li>Email: sarkerbadhon01@gmail.com</li>
                            <li>Phone: +880 1874081396</li>
                            <li>Address: Dhaka ,Bangladesh</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-gray-800 py-4">
                <div className="container mx-auto">
                    <div className="text-center">
                        <p className="text-gray-400">&copy; 2023 Badhon sarker. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
