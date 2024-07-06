import { motion } from "framer-motion";

export default function CustomAnimatedComponent({ as, children, ...props }) {
  const ChildrenComponent = motion(as, { forwardNotionProps: true });

  return <ChildrenComponent {...props}>{children}</ChildrenComponent>;
}
