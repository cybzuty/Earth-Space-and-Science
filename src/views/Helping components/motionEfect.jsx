import { useInView } from "framer-motion";
import { useRef } from "react";

function Section({children}){
    const ref = useRef(null);
    const isInView = useInView(ref);

    return (
    <section ref={ref}>
        <span
            style={{
                transform: isInView ? "none" : "translateX(-500px)",
                opacity: isInView ? 1 : 0,
                transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}
        >
            {children}
        </span>
    </section>)
}

export default Section;