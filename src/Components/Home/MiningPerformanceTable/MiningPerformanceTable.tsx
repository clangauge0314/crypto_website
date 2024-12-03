import { useEffect, useRef } from "react";

const MiningPerformanceTable = () => {
  const hasScrolled = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      const tableSection = document.getElementById("table-section");
      const tableSectionTop = tableSection?.offsetTop || 0;
      const tableSectionHeight = tableSection?.offsetHeight || 0;
      
      // 현재 스크롤이 테이블 섹션 내에 있는지 확인
      const isInTableSection = 
        scrollHeight >= tableSectionTop && 
        scrollHeight <= (tableSectionTop + tableSectionHeight);
      
      // 테이블 섹션의 10% 지점을 지났는지 확인
      const triggerPoint = tableSectionTop + (tableSectionHeight * 0.1);

      if (isInTableSection && scrollHeight > triggerPoint && !hasScrolled.current) {
        hasScrolled.current = true;
        const nextSection = document.getElementById("referral-section");
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: "smooth" });
        }
      }

      // 테이블 섹션 상단으로 돌아왔을 때 리셋
      if (scrollHeight < tableSectionTop) {
        hasScrolled.current = false;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
