module.exports = plop => {
    plop.setGenerator('componentAtom', {
      description: 'Create a component Atom',
      // User input prompts provided as arguments to the template
      prompts: [
        {
          // Raw text input
          type: 'input',
          // Variable name for this input
          name: 'name',
          // Prompt to display on command line
          message: 'What is your component atom name?'
        },
      ],
      actions: [
        {
          // Add a new file
          type: 'add',
          // Path for the new file
          path: 'src/components/atoms/{{pascalCase name}}/index.js',
          // Handlebars template used to generate content of new file
          templateFile: 'plop-templates/Component.js.hbs',
        },
        {
            // Add a new file
            type: 'add',
            // Path for the new file
            path: 'src/components/atoms/{{pascalCase name}}/index.scss',
            // Handlebars template used to generate content of new file
            templateFile: 'plop-templates/index.scss.hbs',
        },
      ],
    });
  };