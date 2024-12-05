import { useScrollToNextSection } from "../../../hooks/useScrollToNextSection";

const MiningPerformanceTable = () => {
  useScrollToNextSection({
    currentSectionId: "table-section",
    nextSectionId: "referral-section"
  });

  return (
    <div
      id="table-section"
      className="h-screen flex items-center justify-center text-white"
    >
      <h2 className="text-4xl font-bold">테이블 구현예정</h2>
    </div>
  );
};

export default MiningPerformanceTable;
