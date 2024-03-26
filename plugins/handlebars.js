const templateExtensionRexExp = /\.(hbs)$/;

export const handlebars = () => {
  return {
    name: "handlebars-plugin",
    transform: (fileContent, fileName) => {
      if (templateExtensionRexExp.test(fileName)) {
        return {
          code: `export default function template(props = {}) { return \`${fileContent}\`}`,
          map: null,
        };
      }
    },
  };
};
