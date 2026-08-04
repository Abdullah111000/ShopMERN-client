import React from 'react';

const Copyrights = () => {
    const year = new Date().getFullYear()
    return (
        <footer className="text-white pt-5 pb-3 site-footer">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6">
                        <h4 className="fw-bold footer-brand">Shop MERN</h4>
                        <p className="footer-desc">Empowering global trade through seamless storefronts, secure payments, expert training, reliable sourcing. Together, we build a better digital future.</p>
                        <div className="d-flex gap-3">
                            <a href="#" className="footer-social-link" aria-label="Facebook">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://w3.org">
                                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                                </svg>
                            </a>
                            <a href="#" className="footer-social-link" aria-label="Instagram">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://w3.org">
                                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                                </svg>
                            </a>
                            <a href="#" className="footer-social-link" aria-label="YouTube">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://w3.org">
                                    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                                </svg>
                            </a>
                            <a href="#" className="footer-social-link" aria-label="LinkedIn">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://w3.org">
                                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6">
                        <h5 className="footer-heading">Links</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a className="footer-link" href="/">Home</a></li>
                            <li className="mb-2"><a className="footer-link" href="/product">Products</a></li>
                            <li className="mb-2"><a className="footer-link" href="/about">About</a></li>
                            <li className="mb-2"><a className="footer-link" href="/services">Services</a></li>
                            <li className="mb-2"><a className="footer-link" href="/contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <h5 className="footer-heading">Shop Categories</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2 footer-category-item">Electronics &amp; Gadgets</li>
                            <li className="mb-2 footer-category-item">Fashion &amp; Apparel</li>
                            <li className="mb-2 footer-category-item">Home &amp; Lifestyle</li>
                            <li className="mb-2 footer-category-item">Beauty &amp; Cosmetics</li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <h5 className="footer-heading">Contact</h5>
                        <p className="footer-contact-item">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://w3.org">
                                <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                            </svg>
                            <span>Amin Town, Faisalabad</span>
                        </p>
                        <p className="footer-contact-item">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://w3.org">
                                <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                            </svg>
                            <span>+92 349 9715987</span>
                        </p>
                        <p className="footer-contact-item">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://w3.org">
                                <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.4 9.7-4.7L256 343.3l198.3-152.2z"></path>
                            </svg>
                            <span>info@shopmern.com</span>
                        </p>
                    </div>

                    <hr className="footer-divider" />
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <p className='d-flex justify-content-between footer-bottom-text'>&copy; {year} Shop MERN. All Rights Reserved. <span>Designed &amp; Devloped by Abdullah Iftikhar</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Copyrights;
