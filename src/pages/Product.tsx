import styles from "../styles/Product.module.css";
import aboutImg from "../assets/about.webp";
import PageNav from "../components/PageNav";

const Product = () => {
  return (
    <div className={styles.container}>
      <PageNav />
      <span className="space-90"></span>

      <main className={styles["main-container"]}>
        <div className={styles["image-container"]}>
          <img src={aboutImg} alt="" />
        </div>
        <div className={styles["text-container"]}>
          <h2 className="heading">About Trip At</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
            veniam corporis, recusandae distinctio earum unde dolor, vitae quo
            ut culpa rem, eius eaque assumenda quas. <br /> Lorem ipsum, dolor
            sit amet consectetur adipisicing elit. Itaque iure iusto numquam
            sequi earum aspernatur fuga odit. Expedita, ullam unde! Facilis
            explicabo expedita sit, itaque nam ut accusamus voluptatem pariatur!
          </p>
        </div>
      </main>
    </div>
  );
};

export default Product;
