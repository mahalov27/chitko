import mockupIOs1 from "../../assets/image/mockups/mockupForTeamMemberIOs_1.png";
import mockupIOs2 from "../../assets/image/mockups/mockupForTeamMemberIOs_2.png";
import mockupAndroid1 from "../../assets/image/mockups/mockupForTeamMemberAndroid_1.png";
import mockupAndroid2 from "../../assets/image/mockups/mockupForTeamMemberAndroid_2.png";

export const content = [
  {
    title: "ВСІ ТРЕНУВАННЯ В ОДНОМУ МІСЦІ",
    description:
      "Дуже легко слідкувати за графіком своїх тренувань, і бачити всі зміни. Ви також маєте можливість швидко та легко поставити відмітку присутності або відсутності без зайвих месенджерів.",
    mockups: [
      {
        id: 1,
        iOS: mockupIOs1,
        android: mockupAndroid1,
        altIOS: "Mockup of iOS",
        altAndroid: "Mockup of Android",
      },
    ],
  },
  {
    title: "КАЛЕНДАР",
    description:
      "Завжди можете переглянути історію ваших тренувань і турнірів у зручному календарі застосунку. А вчасні сповіщення допоможуть не пропустити оновлення розкладу! ",
    mockups: [
      {
        id: 1,
        iOS: mockupIOs2,
        android: mockupAndroid2,
        altIOS: "Mockup of iOS",
        altAndroid: "Mockup of Android",
      },
    ],
  },
];
