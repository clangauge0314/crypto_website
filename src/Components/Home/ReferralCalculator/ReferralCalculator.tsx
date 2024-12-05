import { useScrollToNextSection } from "../../../hooks/useScrollToNextSection";

const ReferralCalculator = () => {
  useScrollToNextSection({
    currentSectionId: "referral-section",
    nextSectionId: "dashboard-section"
  });

  return (
    <div
      id="referral-section"
      className="h-screen flex items-center justify-center text-white"
    >
      <h2 className="text-4xl font-bold">레퍼럴 계산기 구현예정</h2>
    </div>
  );
};

export default ReferralCalculator;
