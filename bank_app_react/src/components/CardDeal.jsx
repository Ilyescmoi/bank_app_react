import styles, {layout} from "../style.js";
import {card} from "../assets/index.js";
import Button from "./Button.jsx";

export const CardDeal = () => (
    <section id="product" className={layout.sectionReverse}>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
                Find a better card deal <br className="sm:block hidden"/> in few easy
                steps.
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
                aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
            </p>

            <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
                <Button styles={'mt-10'}/>
            </div>
        </div>
        <div className={layout.sectionImgReverse}>
            <img src={card} alt="bill" className="w-[100%] h-[100%]"/>
        </div>
    </section>
);

export default CardDeal;