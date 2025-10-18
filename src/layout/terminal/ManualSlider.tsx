import { useEffect, useState } from "react";
import MobileSlider from "./MobileSlider";
import DesktopSlider from "./DesktopSlider";

export default function ManualSlider() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <MobileSlider /> : <DesktopSlider />;
}