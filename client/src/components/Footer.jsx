function Footer() {
    return (
        <footer className="bg-gray-900 text-white mt-20">

            <div className="max-w-7xl mx-auto px-6 py-12">

                <div className="grid md:grid-cols-3 gap-10">

                    {/* BRAND */}
                    <div>

                        <h2 className="text-2xl font-bold mb-3">
                            Learnexa
                        </h2>

                        <p className="text-gray-400">
                            Empowering learners with industry-ready skills and practical learning experiences.
                        </p>

                    </div>

                    {/* LINKS */}
                    <div>

                        <h3 className="font-semibold mb-3">
                            Quick Links
                        </h3>

                        <ul className="space-y-2 text-gray-400">

                            <li>Home</li>
                            <li>Courses</li>
                            <li>Login</li>
                            <li>Register</li>

                        </ul>

                    </div>

                    {/* CONTACT */}
                    <div>

                        <h3 className="font-semibold mb-3">
                            Contact
                        </h3>

                        <p className="text-gray-400">
                            support@nexora.com
                        </p>

                    </div>

                </div>

                {/* BOTTOM LINE */}
                <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500">
                    © 2026 Learnexa. All rights reserved.
                </div>

            </div>

        </footer>
    );
}

export default Footer;