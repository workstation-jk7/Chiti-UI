const chitPlanTypes = [1,2,5,10,25,50];

export const ChitPlanTypesData = chitPlanTypes.map(plan => {
    return {
        id: plan,
        title: `${plan} Lakh`
    }
});

export const PlanTypeConfig = [
    {
      "value": "1L",
      "label": "1 Lakh"
    },
    {
      "value": "2L",
      "label": "2 Lakhs"
    },
    {
      "value": "5L",
      "label": "5 Lakhs"
    },
    {
      "value": "10L",
      "label": "10 Lakhs"
    },
    {
      "value": "15L",
      "label": "15 Lakhs"
    },
    {
      "value": "20L",
      "label": "20 Lakhs"
    }
  ];

  