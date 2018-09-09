import * as inquirer from 'inquirer';

const page: inquirer.Question = [
    {
        type: 'input',
        name: 'fromPage',
        message: 'From which page do you want to start ?',
        default: '1',
        validate: function (userChoice: any): boolean {
            const valid = !isNaN(parseFloat(userChoice));
            return valid || 'Please enter a number';
        },
        filter: Number,
    },
    {
        type: 'input',
        name: 'pages',
        message: 'To which page do you want to stop ?',
        default: '1',
        validate: function (value) {
            const valid = !isNaN(parseFloat(value));
            return valid || 'Please enter a number';
        },
        filter: Number,
    },
];

export const getCategory: any = async function (): Promise<void> {
    const result: any = await inquirer.prompt(page);
    return inquirer.prompt(page).then(answers => {
        var arg = JSON.stringify(answers, null, '  ');
        return arg;
    });
};
//   var getCategory = exports.getCategory = function() {
//     return inquirer.prompt(page).then(answers => {
//       var arg = JSON.stringify(answers, null, '  ');
//       return arg;
//     });
}