import{s as t}from"./index-8d0cbd5a.js";const n=t.div`
  margin: ${({theme:e})=>e.indentation.i0} auto;
  height: ${({theme:e})=>e.valueInVh.vh100};
  width: ${({theme:e})=>e.valueInPercent.pr100};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: ${({theme:e})=>e.dimensions.mobile}px) {
    width: ${({theme:e})=>e.valueInPercent.pr25};
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`,o=t.p`
  font-size: ${({theme:e})=>e.fontSizes.xxl};
  font-weight: ${({theme:e})=>e.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.fontColor};
`;export{o as T,n as W};
