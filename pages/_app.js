import "react-toastify/dist/ReactToastify.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/flaticon.css'
import "../styles/font-awesome.min.css";
import "../styles/themify-icons.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'photoswipe/dist/photoswipe.css'
import '../styles/sass/style.scss'
import { GoogleAnalytics } from '@next/third-parties/google'
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
      <ToastContainer />
      <GoogleAnalytics gaId="G-8VNPWXF8HV" />
    </div>

  )
}

export default MyApp
