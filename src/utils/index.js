import { COMPONENT_CODES } from './constants';

export const parseCode = (code) => {
  // return `${code}`.replace(/<BlockCode :code="code">/g, '')
  //   .replace(/<\/BlockCode>/g, '')
  //   .replace(/import BlockCode from "..\/BlockCode";/g, '')
  //   .replace(/components: { BlockCode },/g, '')
  //   .replace(/BlockCode,|BlockCode/g, '')
  //   .replace(/import code from ".\/Example(\d).code";/g, '')
  //   .replace(/code,|code/g, '');
  return code;
}

export const getTabs = (componentName) => {
  const { components, codes } = COMPONENT_CODES[componentName];
  const componentList = components.keys().map((key) => components(key));
  const codeList = codes.keys().map((key) => codes(key));

  const tabs = componentList.map((item, index) => {
    const Component = item.default;
    const { name } = Component || {};
    const code = codeList[index] ? codeList[index].default : '';

    return {
      id: name,
      name: name,
      component: <Component />,
      code,
    };
  });

  return tabs;
}