import { useEffect, useRef } from "react";

const MiningPerformanceTable = () => {
  const hasScrolled = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      const triggerHeight = window.innerHeight * 0.1;

      if (scrollHeight > triggerHeight && !hasScrolled.current) {
        hasScrolled.current = true;
        const nextSection = document.getElementById("referral-section");
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: "smooth" });
        }
      }

      if (scrollHeight < triggerHeight) {
        hasScrolled.current = false;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="table-section"
      className="h-screen flex items-center justify-center bg-gray-100 text-gray-800"
    >
      <h2 className="text-4xl font-bold">테이블 구현예정</h2>
    </div>
  );
};

export default MiningPerformanceTable;
