import styles from "./App.module.scss";
const header = ["Activities", "Technology", "R&D", "Community"];

function App() {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <p className={styles.headerC}>C</p>
        <div>
          {header.map((link) => (
            <a className={styles.headerLink} href="/">
              {link}
            </a>
          ))}
          <button className={styles.headerButton}>
            <span className={styles.headerButtonText}>Career</span>
            <img src={require("./assets/icons/shape.png")} alt=""></img>
          </button>
        </div>
        <div className={styles.headerSidebar}>
          <hr />
          <hr />
        </div>
      </header>

      <section className={styles.banner}>
        <div className={styles.bannerText}>
          <p className={styles.bannerSubtitle}>crypto trading</p>
          <h2 className={styles.bannerTitle}>
            Engineers Meet
            <span className={styles.bannerGradient}> Traders __</span>
          </h2>
          <p className={styles.bannerDescription}>
            Advanced crypto algorithmic trading and efficient cross-chain
            execution, at scale.
          </p>
        </div>

        <div className={styles.bannerWrapper}>
          <button className={styles.bannerButton}>
            <span>Learn More</span>
            <div className={styles.bannerButtonArrowDown}>
              <img src={require("./assets/icons/arrowDown.png")} alt="" />
            </div>
          </button>

          <img src={require("./assets/icons/mouse.png")} alt="" />
        </div>
      </section>

      <section className={styles.about}>
        <div className={styles.aboutTitle}>
          <p>about us</p>
          <h2>Global technologies</h2>
        </div>

        <div className={styles.aboutStats} />

        <div className={styles.aboutDescription}>
          <p>Level 1</p>
          <ul>
            <li>
              Deploy a multi-legged futures strategy by simultaneously placing
              orders to buy and sell from the same order ticket.
            </li>
            <li>
              Place and manage orders based on the Level 2 order book, which
              provides a live display of all bids and offers waiting to be
              executed.
            </li>
          </ul>
          <button className={styles.aboutButton}>Start Now</button>
        </div>
      </section>

      <section className={styles.services}>
        <div className={styles.servicesNetworks}>
          <button>Artificial Intelligence</button>
          <button>Storage Networks</button>
          <button>P2P Networks</button>
        </div>

        <div className={styles.servicesButtons}>
          <button>Public Data</button>
          <button>Encrypted Private Data *</button>
        </div>

        <div className={styles.servicesPersonal}>
          <img src={require("./assets/icons/service.png")} alt="" />
          <p>
            Easy to use digital service and exclusive personal service for our
            active traders
          </p>
          <button>Indexing</button>
          <button>API</button>

          <div className={styles.servicesArrow}>
            <div>
              <span />
              <span />
            </div>

            <span>Consumers</span>
          </div>
        </div>

        <div className={styles.servicesDescription}>
          <h2>
            The future <span>of</span> Cryptocurrency trading{" "}
            <span>platform</span>
          </h2>
          <p>
            Take advantage of time and sales, futures spread orders and depth
            trader — plus, trade directly from charts.
          </p>
          <a href="/">Learn more</a>
        </div>
      </section>

      <section className={styles.cards}>
        <div>
          <img src={require("./assets/background/cardsNumbers.png")} alt="" />
          <div>
            <p>Spot & Margin</p>
            <h3>
              Trade <span>200+</span> pairs with up to 10x leverage
            </h3>
            <a href="/">Learn more</a>
          </div>
        </div>
        <div>
          <p>Derivatives</p>
          <h3>40+ quarterly futures and contracts</h3>
          <a href="/">Learn more</a>
        </div>
        <div>
          <p>Trading Arena</p>
          <h3>Prize pools worth up to USD 1,000,000</h3>
          <a href="/">Learn more</a>
        </div>

        <div>
          <img src={require("./assets/background/cardsPattern.png")} alt="" />
          <div>
            <p>mobile app</p>
            <h3>Trade anytime, anywhere</h3>
            <a href="/">Learn more</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
