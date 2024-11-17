const chitPlanTypes = [1,2,5,10,25,50];

export const ChitPlanTypesData = chitPlanTypes.map(plan => {
    return {
        id: plan,
        title: `${plan} Lakh`
    }
});
