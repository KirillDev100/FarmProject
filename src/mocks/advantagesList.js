import eat from "/src/assets/eat.svg";
import chemistry from "/src/assets/chemistry.svg";
import noMeat from "/src/assets/no-meat.svg";
import dirt from "/src/assets/sprout.svg";

const advantagesList = [
  {
    isFarm: true,
    icon: eat,
    title: "Еда намного вкуснее",
    text: "Домашняя колбаса из мяса, соли и специй и колбаса из магазина — два настолько разных продукта, что они даже не родственники",
  },
  {
    isFarm: false,
    icon: chemistry,
    title: "Просроченные продукты",
    text: "Из-за большого количество товара сотрудники магазинов не успевают своевременно производить замену товара",
  },
  {
    isFarm: true,
    icon: dirt,
    title: "Натуральные продукты",
    text: "Поставляем местные органические продукты выращенные без пестицидов и химических удобрений.",
  },
  {
    isFarm: false,
    icon: noMeat,
    title: "Некачественное мясо",
    text: "Мясные полуфабрикаты, в которых содержится чрезмерно много натрия, вредных жиров, консервантов",
  },
];

export default advantagesList;
