import React from "react";
import Breadcrumb from "../shared/Breadcrumb";
import FollowUs from "../shared/FollowUs";

class GameDetails extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Breadcrumb currentPage="Name Of Game!" background="/img/page-top-bg/4.jpg" />

        <section className="games-single-page">
          <div className="container">
            <div className="game-single-preview">
              <img src="/img/games/big.jpg" alt="" />
            </div>
            <div className="row">
              <div className="col-xl-9 col-lg-8 col-md-7 game-single-content">
                <div className="gs-meta">11.11.18 / in <a href="">Games</a></div>
                <h2 className="gs-title">Final Appocalipse 2.1</h2>
                <h4>Gameplay</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquamet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum posuere porttitor justo id pellentesque. Proin id lacus feugiat, posuere erat sit amet, commodo ipsum. Donec pellentesque vestibulum metus.</p>
                <h4>Conclusion</h4>
                <p>Nulla ut maximus mauris. Sed malesuada at sapien sed euismod. Vestibulum pharetra in sem id laoreet. Cras metus ex, placerat nec justo quis, luctus posuere ex. Vivamus volutpat nibh ac sollicitudin imperdiet. Donec scelerisque lorem sodales odio ultricies, nec rhoncus ex lobortis. Vivamus tincidunt sit amet sem id varius. Donec ele-mentum aliquet tortor. Curabitur justo mi, efficitur sed eros aliquet, dictum molestie eros. Nullam scelerisque convallis gravida. Morbi id lorem accumsan, scelerisque enim laoreet, sollicitudin neque. Vivamus volutpat nibh ac sollicitudin imperdiet. Donec scelerisque lorem sodales odio ultricies, nec rhoncus ex lobortis. Vivamus tincidunt sit amet sem id varius. Donec ele-mentum aliquet tortor. Curabitur justo mi, efficitur sed eros aliqueDonec vitae tellus sodales, congue augue at, biben-dum justo. Pellentesque non dolor et magna volutpat pharetra eget vel ligula. Maecenas facilisis vestibulum mattis. Sed sagittis gravida urna. Cras nec mi risus.
					      </p>
                <div className="geme-social-share pt-5 d-flex">
                  <p>Share:</p>
                  <FollowUs />
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-5 sidebar game-page-sideber">
                <div id="stickySidebar">
                  <div className="widget-item">
                    <div className="rating-widget">
                      <h4 className="widget-title">Ratings</h4>
                      <ul>
                        <li>Price<span>3.5/5</span></li>
                        <li>Graphics<span>4.5/5</span></li>
                        <li>Levels<span>3.5/5</span></li>
                        <li>Levels<span>4.5/5</span></li>
                        <li>Dificulty<span>4.5/5</span></li>
                      </ul>
                      <div className="rating">
                        <h5><i>Rating</i><span>4.5</span> / 5</h5>
                      </div>
                    </div>
                  </div>
                  <div className="widget-item">
                    <div className="testimonials-widget">
                      <h4 className="widget-title">Testimonials</h4>
                      <div className="testim-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo re magna aliqua. Quis ipsum suspend isse ultrices.</p>
                        <h6><span>James Smith,</span>Gamer</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="game-author-section">
          <div className="container">
            <div className="game-author-pic set-bg" style={{ backgroundImage: 'url("/img/author.jpg")' }}></div>
            <div className="game-author-info">
              <h4>Written by: Michael Williams</h4>
              <p>Vivamus volutpat nibh ac sollicitudin imperdiet. Donec scelerisque lorem sodales odio ultricies, nec rhoncus ex lobortis. Vivamus tincid-unt sit amet sem id varius. Donec elementum aliquet tortor. Curabitur justo mi, efficitur sed eros alique.</p>
            </div>
          </div>
        </section>
      </React.Fragment>

    )
  }
}

export default GameDetails