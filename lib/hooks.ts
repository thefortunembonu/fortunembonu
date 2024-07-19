import { useActiveSectionContext } from "@/context/activeSectioncontext";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";


export function useSectionInView(sectionName : any) {
    const { setActiveSection, lastTimeClicked } = useActiveSectionContext();
     const ref = useRef(null);
    const { ref : inViewRef, inView } = useInView({ threshold: 0.5 });


    const setRefs = (node : any) => {
    ref.current = node;
    inViewRef(node);
  };
 
  useEffect(() => {
    if (inView && Date.now() - lastTimeClicked > 1000) {
        setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, lastTimeClicked]);
    return {
ref,setRefs
    }
}