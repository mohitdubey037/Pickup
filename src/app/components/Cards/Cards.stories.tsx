import { CategoryProgressCard } from ".";

export default { title: "Cards" };

export const CategoryCard = () => (
  <CategoryProgressCard
    contents={[
      { category: "Category1", progressValue: 10, cost: 3231 },
      { category: "Category1", progressValue: 10, cost: 3231 },
      { category: "Category1", progressValue: 10, cost: 3231 },
      { category: "Category1", progressValue: 10, cost: 3231 },
      { category: "Category1", progressValue: 10, cost: 3231 }
    ]}
  />
);
