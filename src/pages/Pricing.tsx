import PageNav from "../components/PageNav";
import styles from "../styles/Pricing.module.css";
import pricingImg from "../assets/pricing.webp";

const Pricing = () => {
  return (
    <>
      <PageNav />
      <span className="space-90"></span>

      <main className={styles.container}>
        <div className={styles["image-container"]}>
          <img src={pricingImg} alt="Pricing webp image" />
        </div>
        <div className={styles["text-container"]}>
          <h1 className="heading">
            Flexible Pricing Plans for Your Unique Needs
          </h1>
          <p className="text">
            Our pricing plans are designed to suit your budget and business
            needs. Discover the perfect pricing option that aligns with your
            requirements and goals. Explore our cost-effective pricing models
            tailored for your convenience
          </p>
          <a href="mailto:azerogluparviz@gmail.com" className="cta">
            Contact me
          </a>
        </div>
      </main>
      <span className="space-60"></span>
    </>
  );
};

export default Pricing;
