import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function TextSection({children}){
    const ref = useRef(null);
    const isInView = useInView(ref);

    return (
        <section ref={ref}>
        <span
            style={{
                transform: isInView ? "none" : "translateX(-300px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s"
            }}
        >
            {children}
        </span>
        </section>
    )
        
    
}

export default TextSection;