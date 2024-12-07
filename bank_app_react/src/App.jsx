import styles from './style';
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
const App = () => (
    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.padding} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar/>
            </div>
        </div>
        <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Hero></Hero>
            </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <stats></stats>
                <business></business>
                <CardDeal></CardDeal>
                <Testimonials></Testimonials>
                <Clients></Clients>
                <CTA></CTA>
                <Footer></Footer>
            </div>
        </div>
    </div>
);

export default App;