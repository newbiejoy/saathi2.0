import ContentSection from '../ContentSection';

export default function ContentSectionExample() {
  return (
    <ContentSection 
      title="Understanding Natural Disasters"
      subtitle="Knowledge is Power"
      content={[
        "Natural disasters are extreme weather events or geological phenomena that can cause significant damage to property, infrastructure, and human life. Understanding these events is crucial for proper preparation and response.",
        "From earthquakes that strike without warning to hurricanes that can be tracked for days, each type of disaster requires specific knowledge and preparation strategies. The key to survival often lies in advance planning and quick, informed decision-making when disaster strikes.",
        "Emergency preparedness isn't just about having supplies ready - it's about understanding risks, knowing evacuation routes, and having communication plans with family members. This knowledge can mean the difference between life and death when seconds count."
      ]}
      backgroundColor="light"
    />
  );
}