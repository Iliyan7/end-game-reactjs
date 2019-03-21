import * as React from 'react';
import Breadcrumb from '../shared/Breadcrumb';
import Newsletter from '../shared/Newsletter';

class Games extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* <div id="preloder">
          <div className="loader"></div>
        </div> */}
        <Breadcrumb currentPage="Games" />

        <section className="games-section">
          <div className="container">
            <ul className="game-filter">
              <li>
                <a href="#">A</a>
              </li>
              <li>
                <a href="#">B</a>
              </li>
              <li>
                <a href="#">C</a>
              </li>
              <li>
                <a href="#">D</a>
              </li>
              <li>
                <a href="#">E</a>
              </li>
              <li>
                <a href="#">F</a>
              </li>
              <li>
                <a href="#">G</a>
              </li>
              <li>
                <a href="#">H</a>
              </li>
              <li>
                <a href="#">I</a>
              </li>
              <li>
                <a href="#">J</a>
              </li>
              <li>
                <a href="#">K</a>
              </li>
              <li>
                <a href="#">L</a>
              </li>
              <li>
                <a href="#">M</a>
              </li>
              <li>
                <a href="#">N</a>
              </li>
              <li>
                <a href="#">O</a>
              </li>
              <li>
                <a href="#">P</a>
              </li>
              <li>
                <a href="#">Q</a>
              </li>
              <li>
                <a href="#">R</a>
              </li>
              <li>
                <a href="#">S</a>
              </li>
              <li>
                <a href="#">T</a>
              </li>
              <li>
                <a href="#">U</a>
              </li>
              <li>
                <a href="#">V</a>
              </li>
              <li>
                <a href="#">W</a>
              </li>
              <li>
                <a href="#">X</a>
              </li>
              <li>
                <a href="#">Y</a>
              </li>
              <li>
                <a href="#">Z</a>
              </li>
            </ul>
            <div className="row">
              <div className="col-xl-7 col-lg-8 col-md-7">
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <div className="game-item">
                      <img src="img/games/1.jpg" alt="#" />
                      <h5>Zombie Appocalipse 2</h5>
                      <a href="game-single.html" className="read-more">
                        Read More{" "}
                        <img src="img/icons/double-arrow.png" alt="#" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="game-item">
                      <img src="img/games/2.jpg" alt="#" />
                      <h5>Dooms Day</h5>
                      <a href="game-single.html" className="read-more">
                        Read More{" "}
                        <img src="img/icons/double-arrow.png" alt="#" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="game-item">
                      <img src="img/games/3.jpg" alt="#" />
                      <h5>The Huricane</h5>
                      <a href="game-single.html" className="read-more">
                        Read More{" "}
                        <img src="img/icons/double-arrow.png" alt="#" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="game-item">
                      <img src="img/games/4.jpg" alt="#" />
                      <h5>Star Wars</h5>
                      <a href="game-single.html" className="read-more">
                        Read More{" "}
                        <img src="img/icons/double-arrow.png" alt="#" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="game-item">
                      <img src="img/games/5.jpg" alt="#" />
                      <h5>Candy land</h5>
                      <a href="game-single.html" className="read-more">
                        Read More{" "}
                        <img src="img/icons/double-arrow.png" alt="#" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="game-item">
                      <img src="img/games/6.jpg" alt="#" />
                      <h5>E.T.</h5>
                      <a href="game-single.html" className="read-more">
                        Read More{" "}
                        <img src="img/icons/double-arrow.png" alt="#" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="game-item">
                      <img src="img/games/7.jpg" alt="#" />
                      <h5>Zombie Appocalipse 2</h5>
                      <a href="game-single.html" className="read-more">
                        Read More{" "}
                        <img src="img/icons/double-arrow.png" alt="#" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="game-item">
                      <img src="img/games/8.jpg" alt="#" />
                      <h5>Dooms Day</h5>
                      <a href="game-single.html" className="read-more">
                        Read More{" "}
                        <img src="img/icons/double-arrow.png" alt="#" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="game-item">
                      <img src="img/games/9.jpg" alt="#" />
                      <h5>The Huricane</h5>
                      <a href="game-single.html" className="read-more">
                        Read More{" "}
                        <img src="img/icons/double-arrow.png" alt="#" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="site-pagination">
                  <a href="#" className="active">
                    01.
          </a>
                  <a href="#">02.</a>
                  <a href="#">03.</a>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-5 sidebar game-page-sideber">
                <div id="stickySidebar">
                  <div className="widget-item">
                    <div className="categories-widget">
                      <h4 className="widget-title">categories</h4>
                      <ul>
                        <li>
                          <a href="#">Games</a>
                        </li>
                        <li>
                          <a href="#">Gaming Tips &amp; Tricks</a>
                        </li>
                        <li>
                          <a href="#">Online Games</a>
                        </li>
                        <li>
                          <a href="#">Team Games</a>
                        </li>
                        <li>
                          <a href="#">Community</a>
                        </li>
                        <li>
                          <a href="#">Uncategorized</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="widget-item">
                    <div className="categories-widget">
                      <h4 className="widget-title">platform</h4>
                      <ul>
                        <li>
                          <a href="#">Xbox</a>
                        </li>
                        <li>
                          <a href="#">X box 360</a>
                        </li>
                        <li>
                          <a href="#">Play Station</a>
                        </li>
                        <li>
                          <a href="#">Play Station VR</a>
                        </li>
                        <li>
                          <a href="#">Nintendo Wii</a>
                        </li>
                        <li>
                          <a href="#">Nintendo Wii U</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="widget-item">
                    <div className="categories-widget">
                      <h4 className="widget-title">Genre</h4>
                      <ul>
                        <li>
                          <a href="#">Online</a>
                        </li>
                        <li>
                          <a href="#">Adventure</a>
                        </li>
                        <li>
                          <a href="#">S.F.</a>
                        </li>
                        <li>
                          <a href="#">Strategy</a>
                        </li>
                        <li>
                          <a href="#">Racing</a>
                        </li>
                        <li>
                          <a href="#">Shooter</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
      </React.Fragment>

    );
  }
}

export default Games;