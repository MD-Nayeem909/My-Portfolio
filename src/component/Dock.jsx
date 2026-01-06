import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const Facebook = ({ className }) => <FaFacebook className={className} />;
const Instagram = ({ className }) => <FaInstagram className={className} />;
const LinkedIn = ({ className }) => <FaLinkedinIn className={className} />;
const Whatsapp = ({ className }) => <FaWhatsapp className={className} />;
const DockIcon = ({ mouseY, href, children, onClick }) => {
  const ref = useRef(null);
  const defaultMouseY = useMotionValue(Infinity);
  const iconSize = 35;
  const iconMagnification = 55;
  const iconDistance = 140;
  const distance = useTransform(mouseY ?? defaultMouseY, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? {
      y: 0,
      height: 0,
    };
    return val - bounds.y - bounds.height / 2;
  });
  const heightSync = useTransform(
    distance,
    [-iconDistance, 0, iconDistance],
    [iconSize, iconMagnification, iconSize]
  );
  const height = useSpring(heightSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };
  return (
    <motion.div
      ref={ref}
      style={{
        height,
      }}
      className="flex aspect-square items-center justify-center rounded-full"
    >
      <a
        href={href}
        className="flex h-full w-full items-center justify-center"
        onClick={handleClick}
      >
        {children}
      </a>
    </motion.div>
  );
};
const SimpleDock = ({ children }) => {
  const mouseY = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseY.set(e.pageY)}
      onMouseLeave={() => mouseY.set(Infinity)}
      className="flex flex-col items-center gap-2 rounded-lg bg-base-100 p-3 border border-base-300"
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === DockIcon) {
          return React.cloneElement(child, {
            ...child.props,
            mouseY: mouseY,
          });
        }
        return child;
      })}
    </motion.div>
  );
};
const Dock = () => {
  const icons = [
    {
      name: "Facebook",
      component: Facebook,
      href: "https://www.facebook.com/S.D.MD.Nayeem/",
    },
    {
      name: "Instagram",
      component: Instagram,
      href: "https://www.instagram.com/_nay_eem_moha_m_mad/",
    },
    {
      name: "LinkedIn",
      component: LinkedIn,
      href: "https://www.linkedin.com/in/md-nayeem98/",
    },
    {
      name: "Whatsapp",
      component: Whatsapp,
      href: "https://wa.me/8801883153330",
    },
  ];
  return (
    <div className="hidden md:block fixed left-4 top-1/2 -translate-y-1/2 z-100">
      <SimpleDock>
        {icons.map((icon) => (
          <DockIcon
            onClick={() => window.open(icon.href, "_blank")}
            key={icon.name}
            href={icon.href}
          >
            <icon.component className="h-full w-full p-2 text-neutral  hover:text-primary transition-colors" />
          </DockIcon>
        ))}
      </SimpleDock>
    </div>
  );
};
export default Dock;
