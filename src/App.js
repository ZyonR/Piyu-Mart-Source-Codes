import styles from'./App.module.css';
import { IoSearchCircleSharp } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { CiFlag1 } from "react-icons/ci";
import { FaShare } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaMeta } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

function App() {
  return (
    <div className={styles.PiyuMart}>
      <PiyuMartHeader/>
      <PiyuMartProduct/>
      <PiyuMartDataAndReviews/>
    </div>
  );
}

const PiyuMartHeader = () =>{
  return(
    <div className={styles.piyuMartHeader}>
      <div className={styles.upperDivisionHeader}>
        <div>
          <p className={styles.piyuMartLogo}>Piyu Mart</p>
        </div>
        <div className={styles.searchBarHeaderContainer}>
          <input className={styles.searchBarHeader} type='text'></input>
          <button className={styles.searchBtnHeader}><IoSearchCircleSharp /></button>
        </div>
        <div className={styles.profileAccount}>
          <p className={styles.accountDummyImage}><MdAccountCircle /></p>
          <p>Account Name</p>
        </div>
      </div>
      <div className={styles.headerOptionsBar}>
        <button className={styles.headerOptions}>All Categories</button>
        <button className={styles.headerOptions}>Trending</button>
        <button className={styles.headerOptions}>Guidelines and Policy</button>
        <button className={styles.headerOptions}>About</button>
        <button className={styles.headerOptions}>Donations</button>
      </div>
    </div>
  )
}
const PiyuMartProductLeft = () => {
  const MoreSampleImages = () => {
    let divs = [];
    for(let i = 2; i!= 6; i++){
      const opacity = 1 - (1 / i);
      divs.push(<div className={styles.sampleProductImage} style={{opacity:opacity}}>
      </div>);
    }
    return divs;
  }
  return(
    <div className={styles.imagesofProductArea}>
      <div className={styles.miniImagesContainer}>
        <MoreSampleImages/>
      </div>
      <div className={styles.hugeProductImage}>
      </div>
    </div>
  )
}
const PiyuMartProductRight = () => {
  const GetStarRatings = () => {
    const NStars = [];
    for(let i =0; i!=5; i++){
      NStars.push(<p className={styles.starRatings}><FaStar /></p>);
    }
    return NStars;
  }
  const AboutStore = () => {
    return(
      <div className={styles.standardSocialMediaContainer}>
        <div className={styles.sellerAccountInformationContainer}>
          <p className={styles.accountDummyImage}><MdAccountCircle /> </p>
          <p className={styles.sellersName}>FEU Bookstore</p>
        </div>
         <div className={styles.standardSocialMedia}>
           <p><FaMeta /></p>
           <p><FaXTwitter/></p>
           <p><FaInstagram/></p>
         </div>
      </div>
    )
  }
  return(
    <div className={styles.wholeProductInformation}>
      <div className={styles.topGeneralProductInfo}>
        <p className={styles.productTitle}>Far Eastern University Tam-Tam Stickers</p>
        <div className={styles.top_topGeneralProductInfo}>
          <div className={styles.overAllStarRating}>
            <p>4.7</p>
            <div className={styles.getStarRatingsContainer}><GetStarRatings/></div>
          </div>
          <p>1123 In Stock</p>
          <button className={styles.reportProductBtn}><CiFlag1 />Report</button>
        </div>
        <div className={styles.top_middleGeneralProductInfo}>
          <div className={styles.productPriceContainer}>
            <p className={styles.productPrice}>Php 10.00</p>
            <p className={styles.productPricePerPrice}>per piece</p>
          </div>
        </div>
      </div>
      <p className={styles.productDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <div className={styles.stardardSocialMediaBtnContainer}>
        <button className={styles.stardardSocialMediaBtn}><IoMdNotificationsOutline /> Notify Me</button>
        <button className={styles.stardardSocialMediaBtn}><FaShare /> Share</button>
        <button className={styles.stardardSocialMediaBtn_favourite}><FaRegHeart /> Favourite</button>
      </div>
      <div>
        <AboutStore/>
      </div>
    </div>
  )
}
const PiyuMartProduct = () =>{
  return(
    <div className={styles.bothSidesProductSection}>
      <PiyuMartProductLeft/>
      <PiyuMartProductRight/>
    </div>
  )
}
const PiyuMartDataAndReviews = () => {
  const PrintDataOnProduct = () => {
    const dataContent = {"Product Quality": 4.5,
                          "Costumer Service": 4.7,
                          "Overall Costumer Satisfaction": 5};
    const dataDivs = [];
    Object.keys(dataContent).forEach(key=>{
      const productData = <div>
                            <p>{key}</p>
                            <p>{dataContent[key]}</p>
                          </div>;
      dataDivs.push(productData);
    });
    return dataDivs;
  }
  return(
    <div>
      <div>
        <PrintDataOnProduct/>
      </div>
      <div>

      </div>
    </div>
  )
}
export default App;
