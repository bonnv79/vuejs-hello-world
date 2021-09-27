export const parseCode = (code) => {
  return `${code}`.replace(/<BlockCode :code="code">/g, '')
    .replace(/<\/BlockCode>/g, '')
    .replace(/import BlockCode from "..\/BlockCode";/g, '')
    .replace(/components: { BlockCode },/g, '')
    .replace(/BlockCode,|BlockCode/g, '')
    .replace(/import code from ".\/Example(\d).code";/g, '')
    .replace(/code,|code/g, '');
}