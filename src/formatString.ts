export const formatString = (template: string, ...args: (string | number)[]) => {
  let formattedString = template;

  args.forEach((arg) => {
    formattedString = formattedString.replace('{}', arg.toString());
  });

  return formattedString;
};
