import React from 'react'

const BlogSection = () => {
    return (
        <section className="blog-section spad">
            <div className="container">
                <div className="row">
                    <div className="col-xl-9 col-lg-8 col-md-7">
                        <div className="section-title text-white">
                            <h2>Latest News</h2>
                        </div>
                        <ul className="blog-filter">
                            <li><a href="#">Racing</a></li>
                            <li><a href="#">Shooters</a></li>
                            <li><a href="#">Strategy</a></li>
                            <li><a href="#">Online</a></li>
                        </ul>
                        <div className="blog-item">
                            <div className="blog-thumb">
                                <img src="/img/blog/1.jpg" />
                            </div>
                            <div className="blog-text text-box text-white">
                                <div className="top-meta">11.11.18  /  in <a >Games</a></div>
                                <h3>The best online game is out now!</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius-mod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consecte-tur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.....</p>
                                <a href="#" className="read-more">Read More  <img src="/img/icons/double-arrow.png" alt="#" /></a>
                            </div>
                        </div>
                        <div className="blog-item">
                            <div className="blog-thumb">
                                <img src="/img/blog/2.jpg" />
                            </div>
                            <div className="blog-text text-box text-white">
                                <div className="top-meta">11.11.18  /  in <a >Games</a></div>
                                <h3>The best online game is out now!</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius-mod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consecte-tur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.....</p>
                                <a href="#" className="read-more">Read More  <img src="/img/icons/double-arrow.png" alt="#" /></a>
                            </div>
                        </div>
                        <div className="blog-item">
                            <div className="blog-thumb">
                                <img src="/img/blog/3.jpg" />
                            </div>
                            <div className="blog-text text-box text-white">
                                <div className="top-meta">11.11.18  /  in <a >Games</a></div>
                                <h3>The best online game is out now!</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius-mod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consecte-tur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.....</p>
                                <a href="#" className="read-more">Read More  <img src="/img/icons/double-arrow.png" alt="#" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-5 sidebar">
                        <div id="stickySidebar">
                            <div className="widget-item">
                                <h4 className="widget-title">Trending</h4>
                                <div className="trending-widget">
                                    <div className="tw-item">
                                        <div className="tw-thumb">
                                            <img src="/img/blog-widget/1.jpg" alt="#" />
                                        </div>
                                        <div className="tw-text">
                                            <div className="tw-meta">11.11.18  /  in <a >Games</a></div>
                                            <h5>The best online game is out now!</h5>
                                        </div>
                                    </div>
                                    <div className="tw-item">
                                        <div className="tw-thumb">
                                            <img src="/img/blog-widget/2.jpg" alt="#" />
                                        </div>
                                        <div className="tw-text">
                                            <div className="tw-meta">11.11.18  /  in <a >Games</a></div>
                                            <h5>The best online game is out now!</h5>
                                        </div>
                                    </div>
                                    <div className="tw-item">
                                        <div className="tw-thumb">
                                            <img src="/img/blog-widget/3.jpg" alt="#" />
                                        </div>
                                        <div className="tw-text">
                                            <div className="tw-meta">11.11.18  /  in <a >Games</a></div>
                                            <h5>The best online game is out now!</h5>
                                        </div>
                                    </div>
                                    <div className="tw-item">
                                        <div className="tw-thumb">
                                            <img src="/img/blog-widget/4.jpg" alt="#" />
                                        </div>
                                        <div className="tw-text">
                                            <div className="tw-meta">11.11.18  /  in <a >Games</a></div>
                                            <h5>The best online game is out now!</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="widget-item">
                                <div className="categories-widget">
                                    <h4 className="widget-title">categories</h4>
                                    <ul>
                                        <li><a href="#">Games</a></li>
                                        <li><a href="#">Gaming Tips &amp; Tricks</a></li>
                                        <li><a href="#">Online Games</a></li>
                                        <li><a href="#">Team Games</a></li>
                                        <li><a href="#">Community</a></li>
                                        <li><a href="#">Uncategorized</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="widget-item">
                                <a href="#" className="add">
                                    <img src="/img/add.jpg" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogSection
